import { Container, Typography } from "@mui/material";
import React from "react";
import { InformationTaskSelected } from "./InformationTaskSelected";

export const TaskInformation = () => {
  return (
    <Container sx={{ marginTop: { xs: "10px", md: "0px", xl: "0px" } }}>
      <Typography
        variant="body1"
        color={"black"}
        fontWeight={"fontWeightBold"}
        textAlign={"center"}
      >
        Resumen
      </Typography>

      <Typography variant="body2">
        The creation of the Template stay in a good way, we have made a lot of
        progress, this week must finalized the information and comments
        sections. <br />
        The proyect must finalized in three weeks
      </Typography>

      <Typography
        marginTop={2}
        variant="body1"
        color={"black"}
        fontWeight={"fontWeightBold"}
      >
        Changes history
      </Typography>

      <InformationTaskSelected/>
    </Container>
  );
};
