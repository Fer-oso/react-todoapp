import {
  Box,
  Container,
  Divider,
  Grid, Typography
} from "@mui/material";
import React from "react";
import { InformationTaskSelected } from "./InformationTaskSelected";
import { Title } from "../Title";


export const TaskInformation = () => {
  return (
    <Container>
      <Title title= {"Create a Template for information"}/>
      <Divider></Divider>
      <Grid container>
        <InformationTaskSelected/>
      </Grid>
    </Container>
  );
};
