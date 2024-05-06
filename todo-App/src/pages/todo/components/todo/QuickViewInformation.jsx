import { Container, Grid } from "@mui/material";
import React from "react";
import { TaskInformation } from "../taskinformation/TaskInformation";
import { TaskComments } from "../taskinformation/TaskComments";

export const QuickViewInformation = () => {
  return (
    <Grid container>
      <Grid item md={6}>
        <TaskInformation />
      </Grid>

      <Grid item md={6}>
        <TaskComments />
      </Grid>
    </Grid>
  );
};
