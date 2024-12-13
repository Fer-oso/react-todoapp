import {
  Button,
  Container,
  Divider,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import React, { useRef } from "react";
import { Title } from "../Title";
import { useForm } from "../../../hooks/useForm";
import { changes } from "../../../../data/task";
import { useDispatch } from "react-redux";
import {
  startSetChangeInSubTask,
  startSetCommentInSubTask,
} from "../../../../store/todos/taskThunk";
import Swal from "sweetalert2";
import { Image } from "@mui/icons-material";

export const CommentTaskSelected = () => {
  const { formState, onInputChange } = useForm(changes);

  const dispatch = useDispatch();

  const ref = useRef();

  let images = [];

  const onChangeInputImages = ({ target }) => {
    if (target.files === 0) return;
    images = target.files;
  };

  const onclickChangesButton = () => {
    Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Saved!", "", "success");
        dispatch(startSetChangeInSubTask(formState, images));
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };

  const onclickCommentButton = () => {
    (async () => {
      const { value: severity } = await Swal.fire({
        title: "Select field validation",
        input: "select",
        inputOptions: {
          Severity: {
            success: "Finished",
            info: "In proccess",
            warning: "Pending",
            error: "Paused",
          },
        },
        inputPlaceholder: "Select a severity for the comment",
        showCancelButton: true,
      });
      if (severity) {
        Swal.fire(`You selected: ${severity}`);
        dispatch(startSetCommentInSubTask({ ...formState, severity }));
      }
    })();
  };

  return (
    <Container sx={{ marginTop: { xs: "10px", xl: "0px" } }}>
      <Title title={"Write comment"} variant="body1" />
      <Divider></Divider>
      <Grid>
        <form>
          <Grid container spacing={2}>
            <Grid item xs={12}></Grid>
            <Grid item xs={12}>
              <TextField
                id="outlined-multiline-static"
                label="Write your changes / comments"
                multiline
                rows={5}
                fullWidth
                placeholder="Write your changes / comments"
                size="small"
                name="text"
                onChange={onInputChange}
              />
            </Grid>
          </Grid>

          <Grid container sx={{ mb: 2, mt: 1, ml: 0 }}>
            <Grid item xs={12} md={6}>
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
            </Grid>
          </Grid>

          <Grid container sx={{ mb: 2, mt: 1, ml: 0 }}>
            <Grid item xs={12} md={6}>
              <Button
                variant="contained"
                fullWidth
                onClick={onclickChangesButton}
              >
                <Typography variant="body1" fontWeight={"fontWeightBold"}>
                  Public changes
                </Typography>
              </Button>
            </Grid>

            <Grid item xs={12} md={6}>
              <Button
                variant="contained"
                fullWidth
                onClick={onclickCommentButton}
              >
                <Typography variant="body1" fontWeight={"fontWeightBold"}>
                  Public comment
                </Typography>
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Container>
  );
};
