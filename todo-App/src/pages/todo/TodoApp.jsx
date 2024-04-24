import { Grid } from "@mui/material";
import React from "react";
import { TodoInformation } from "./components/TodoInformation";
import { TodoLayout } from "./layout/TodoLayout";

import { CreateTask } from "./components/CreateTask";
import { TodoList } from "./components/todo/TodoList";

export const TodoApp = () => {
  return (
    <TodoLayout>
      <CreateTask title="create task" />
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
