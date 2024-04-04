import React from "react";
import { useDispatch } from "react-redux";
import { startLogoutUser } from "../../store/auth/authThunk";
import { TodoLayout } from "./layout/TodoLayout";
import { Button, Grid, Paper, Typography, styled } from "@mui/material";
import { TodoInformation } from "./components/TodoInformation";
import { PendingList } from "./components/PendingList";
import { taskWithData } from "../../data/task";

import { useSelector } from "react-redux";
import { startCreateTask } from "../../store/todos/taskThunk";
import { TodoList } from "./components/todo/TodoList";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export const TodoApp = () => {
  const dispatch = useDispatch();

  const onClickSignOut = () => {
    dispatch(startLogoutUser());
  };

  const { uid } = useSelector(
    (state) => state.authentication.userAuthenticated
  );

  const onClickCreateTaskData = () =>{
    dispatch(startCreateTask(taskWithData))
  }

  return (
    <TodoLayout>
      {/* <TaskView></TaskView>*/}

      <Grid container spacing={2}>
        <Grid item xs={12} md={12} xl={4}>
          <Button variant="contained" onClick={onClickCreateTaskData}>
            <Typography color={"black"}>Create</Typography>
          </Button>

          <Button variant="contained" onClick={onClickSignOut}>
            <Typography color={"black"}>Logout</Typography>
          </Button>

          <TodoList />
        </Grid>

        <Grid item xs={12} md={6} xl={4}>
          <TodoInformation />
        </Grid>

        <Grid item xs={12} md={6} xl={4}>
          <PendingList />
        </Grid>
      </Grid>
    </TodoLayout>
  );
};
