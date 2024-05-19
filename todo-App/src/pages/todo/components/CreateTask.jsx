import { Image, SaveOutlined } from "@mui/icons-material";
import {
  Box,
  Button,
  Grid,
  IconButton,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import React, { useRef } from "react";
import Swal from "sweetalert2";
import { newTaskToFirebase } from "../../../data/task";
import { useForm } from "../../hooks/useForm";
import { useDispatch } from "react-redux";
import { startCreateTask } from "../../../store/todos/taskThunk";

let images = [];
export const CreateTask = () => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const dispatch = useDispatch();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { formState, onInputChange } = useForm(newTaskToFirebase);

  const { title, description } = formState;

  const onChangeInputImages = ({ target }) => {
    if (target.files === 0) return;
    images = target.files;
  };

  const ref = useRef();

  const onclickCreateNewTask = () => {
    Swal.fire({
      title: "Do you want to create the note?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Create",
      denyButtonText: `Don't create`,
      target: document.getElementById("form-modal"),
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(startCreateTask(formState, images));
        Swal.fire({
          title: "Created!",
          icon: "success",
          target: document.getElementById("form-modal"),
        });
      } else if (result.isDenied) {
        Swal.fire({
          title: "Note not created!",
          icon: "info",
          target: document.getElementById("form-modal"),
        });
      }
    });
  };
  return (
    <>
      <Button
        onClick={handleOpen}
        size="large"
        sx={{
          color: "white",
          backgroundColor: "error.main",
          ":hover": { backgroundColor: "error.main", opacity: 0.9 },
          position: "fixed",
          right: 40,
          bottom: 40,
        }}
      >
        Create task
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        hidden={false}
        id="form-modal"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Create task
          </Typography>

          <Grid container>
            <TextField
              type="text"
              variant="filled"
              fullWidth
              placeholder="Write one title"
              label="Title"
              sx={{ border: "none", mb: 1 }}
              name="title"
              value={title}
              onChange={onInputChange}
            />

            <TextField
              type="text"
              variant="filled"
              fullWidth
              multiline
              placeholder="whats happent today?"
              minRows={4}
              name="description"
              value={description}
              onChange={onInputChange}
            />

            <input
              type="file"
              multiple
              onChange={onChangeInputImages}
              style={{ display: "none" }}
              ref={ref}
            />

            <IconButton color="secondary" onClick={() => ref.current.click()}>
              <Image sx={{ fontSize: 30, mr: 1 }} />
              <Typography>Select images</Typography>
            </IconButton>

            <IconButton color="secondary" onClick={onclickCreateNewTask}>
              <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
              <Typography>Create Note</Typography>
            </IconButton>
          </Grid>
        </Box>
      </Modal>
    </>
  );
};
