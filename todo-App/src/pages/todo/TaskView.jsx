import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import { TaskComments } from "./components/taskinformation/TaskComments";
import { ListTask } from "./components/taskinformation/ListTask";
import { TaskInformation } from "./components/taskinformation/TaskInformation";
import { CommentTaskSelected } from "./components/taskinformation/CommentTaskSelected";

export const TaskView = () => {
  return (
    <Grid container marginTop={2}>
      <Grid item xs={12} md={3}>
        <ListTask />
      </Grid>
      <Grid item xs={12} md={5}>
        <TaskInformation />
      </Grid>

      <Grid item xs={12} md={4}>
        <CommentTaskSelected />
        <TaskComments />
      </Grid>
    </Grid>
  );
};
