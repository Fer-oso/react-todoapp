import {
  Button,
  Container,
  Divider,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { Title } from "../Title";
import { useForm } from "../../../hooks/useForm";
import { comments } from "../../../../data/task";
import { useDispatch } from "react-redux";
import { startSetCommentInSubTask } from "../../../../store/todos/taskThunk";
import Swal from "sweetalert2";

export const CommentTaskSelected = () => {
  const { formState, onInputChange } = useForm(comments);

  const dispatch = useDispatch();

  const onclickChangesButton = () => {};

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
      dispatch(startSetCommentInSubTask({...formState,severity}));
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
                name="comment"
                onChange={onInputChange}
              />
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
