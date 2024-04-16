import React from "react";
import { useDispatch } from "react-redux";
import { startLogoutUser } from "../../store/auth/authThunk";
import { TodoLayout } from "./layout/TodoLayout";
import { Button, Grid, Typography } from "@mui/material";
import { TodoInformation } from "./components/TodoInformation";
import { taskWithData } from "../../data/task";

import { startCreateTask } from "../../store/todos/taskThunk";
import { TodoList } from "./components/todo/TodoList";

export const TodoApp = () => {
  const dispatch = useDispatch();

  const onClickSignOut = () => {
    dispatch(startLogoutUser());
  };
  
  const onClickCreateTaskData = () =>{
    dispatch(startCreateTask(taskWithData))
  }

  return (
    <TodoLayout>

      <Button variant="contained" onClick={onClickCreateTaskData}>
        <Typography color={"black"}>Create</Typography>
      </Button>

      <Button variant="contained" onClick={onClickSignOut}>
        <Typography color={"black"}>Logout</Typography>
      </Button>

      <Grid container spacing={2}>
        <Grid item xs={12} md={4} xl={4}>
          <TodoList />
        </Grid>

        <Grid item xs={12} md={4} xl={4}>
        <TodoInformation />
        </Grid>

        <Grid item xs={12} md={4} xl={4}>
          {/*  <PendingList />
           */}{" "}
        </Grid>
      </Grid>
      
    </TodoLayout>
  );
};
