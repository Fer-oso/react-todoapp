import { StarOutline } from "@mui/icons-material";
import { Grid, Typography } from "@mui/material";
import React from "react";

export const NothingSelected = () => {
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
          <StarOutline sx={{ fontSize: 50, color: "black"}} />
        </Grid>
        <Grid>
         
          <Typography color="black">You not have notes Create one</Typography>
        </Grid>
      </Grid>
    </>
  );
};
