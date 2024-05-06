import { StarOutline, Task, TaskAltOutlined, TaskAltTwoTone, TaskOutlined } from "@mui/icons-material";
import { Grid, Typography } from "@mui/material";
import React from "react";

export const NothingSelected = ({title = ""}) => {
  return (
    <>
      <Grid
        container
        spacing={0}
        direction="column"
        justifyContent="center"
        alignContent="center"
      >
        <Grid margin="auto">
          <TaskOutlined sx={{ fontSize: 20, color: "grey"}} />
        </Grid>
        <Grid>
         
          <Typography color="black">{title}</Typography>
        </Grid>
      </Grid>
    </>
  );
};
