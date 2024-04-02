import { Grid, Typography } from "@mui/material";
import React from "react";

export const AuthLayout = ({ children, title = "" }) => {
  return (
    <Grid
      container
      className=" animate__animated animate__fadeIn animate__faster"
      spacing={0}
      justifyContent="center"
      alignItems="center"
      textAlign="center"
      sx={{
        minHeight: "100vh",
        backgroundColor: "primary.main",
        padding: 4,
      }}
    >
      <Grid
        item
        className="box-shadow"
        xs={12}
        md={6}
        xl={4}
        sx={{
          width: { sm: 450 },
          backgroundColor: "secondary.main",
          padding: 2,
          borderRadius: 2,
        }}
      >
        <Typography variant="h5" sx={{ mb: 2 }} color={"black"}>
          {title}
        </Typography>
        {children}
      </Grid>
    </Grid>
  );
};
