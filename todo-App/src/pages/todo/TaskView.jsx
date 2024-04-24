import { Grid } from "@mui/material";
import React from "react";
import { TaskComments } from "./components/taskinformation/TaskComments";
import { ListSubTasks } from "./components/taskinformation/ListSubTasks";
import { TaskInformation } from "./components/taskinformation/TaskInformation";
import { CommentTaskSelected } from "./components/taskinformation/CommentTaskSelected";
import { CreateSubtask } from "./components/CreateSubtask";

export const TaskView = () => {

  return (
    <Grid container marginTop={1} spacing={2}>
      <Grid item xs={12} md={4}>
        <ListSubTasks />
        <CommentTaskSelected />
      </Grid>

      <Grid item xs={12} md={4}>
        <TaskInformation />
      </Grid>

      <Grid item xs={12} md={4}>
        <TaskComments />
      </Grid>
      <CreateSubtask />
    </Grid>
  );
};
