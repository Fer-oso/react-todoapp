import {  Grid } from "@mui/material";
import React from "react";
import { TaskSelectedInformation } from "./components/todo/TaskSelectedInformation";
import { TodoLayout } from "./layout/TodoLayout";

import { CreateTask } from "./components/CreateTask";
import { ToViewTasksList } from "./components/todo/ToViewTasksList";

import { QuickViewInformation } from "./components/todo/QuickViewInformation";
import { RefusedTasksList } from "./components/todo/RefusedTasksList";
import { ApprovedTasksList } from "./components/todo/ApprovedTasksList";

export const TodoApp = () => {
  return (
    <TodoLayout>
      <CreateTask title="create task" />

      <Grid container>
        <Grid item xs={12} md={2} xl={2}>
          <ToViewTasksList />
          <ApprovedTasksList />
          <RefusedTasksList />
        </Grid>

        <Grid item xs={12} md={4} xl={5}>
          <TaskSelectedInformation />
        </Grid>

        <Grid item xs={12} md={6} xl={5}>
          <QuickViewInformation />
        </Grid>
      </Grid>
    </TodoLayout>
  );
};
