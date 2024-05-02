import { Divider, Grid } from "@mui/material";
import React from "react";
import { TodoInformation } from "./components/TodoInformation";
import { TodoLayout } from "./layout/TodoLayout";

import { CreateTask } from "./components/CreateTask";
import { TodoList } from "./components/todo/TodoList";
import { PendingList } from "./components/todo/PendingList";

export const TodoApp = () => {
  return (
    <TodoLayout>

      <CreateTask title="create task" />

      <Grid container >

        <Grid item xs={12} md={2} xl={4} >
          <TodoList />
          <PendingList />
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
