import {  Grid } from "@mui/material";
import React from "react";
import { TaskSelectedInformation } from "./components/todo/TaskSelectedInformation";
import { TodoLayout } from "./layout/TodoLayout";

import { CreateTask } from "./components/CreateTask";
import { ToViewTasksList } from "./components/todo/ToViewTasksList";
import { PendingTasksList } from "./components/todo/PendingTasksList";
import { QuickViewInformation } from "./components/todo/QuickViewInformation";

export const TodoApp = () => {
  return (
    <TodoLayout>
      <CreateTask title="create task" />

      <Grid container>
        <Grid item xs={12} md={2} xl={4}>
          <ToViewTasksList />
          <PendingTasksList />
        </Grid>

        <Grid item xs={12} md={4} xl={4}>
          <TaskSelectedInformation />
        </Grid>

        <Grid item xs={12} md={6} xl={4}>
          <QuickViewInformation/>
          {/*  <PendingList />
           */}{" "}
        </Grid>
      </Grid>
    </TodoLayout>
  );
};
