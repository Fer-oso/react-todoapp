import { Typography } from "@mui/material";
import React from "react";

export const Title = ({ title = "", variant = "h5", textAlign="center" }) => {
  return (
    <Typography
      variant={variant}
      component="h5"
      color="black"
      fontWeight="fontWeightBold"
      textAlign={textAlign}
      sx={{fontSize:{md:"25px"}}}
    >
      {title}
    </Typography>
    
  );
};
