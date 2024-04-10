import {
  Box,
  Container,
  Divider,
  Grid, Typography
} from "@mui/material";
import React from "react";
import { InformationTaskSelected } from "./InformationTaskSelected";
import { Title } from "../Title";

import {useSelector} from 'react-redux'
export const TaskInformation = () => {

  const {taskSelected} = useSelector(state => state.tasks)

  return (
    <Container sx={{marginTop:{xs:"10px", md:"0px", xl:"0px"}}}>
      <Title title= {taskSelected.title}/>
      <Divider></Divider>
      <Grid container>
        <InformationTaskSelected taskSelected={taskSelected}/>
      </Grid>
    </Container>
  );
};
