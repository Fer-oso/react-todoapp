import { Grid, List, Typography } from "@mui/material";
import React from "react";
import { Comments } from "../Comments";
import { Title } from "../Title";
import { useSelector } from "react-redux";

export const TaskComments = () => {

  const { subtaskSelected } = useSelector((state) => state.tasks);

  return (
    < >
    <Title title={" Task comments"} variant="body1"/>
      <Grid container marginTop={2}>
      <List
        sx={{
          width: "100%",
          bgcolor: "main.error",
          position: "relative",
          overflow: "auto",
          maxHeight: {sm:300, md:470, lg:470, xl:520},
          "& ul": { padding: 0 },
        }}
        subheader={<li />}
      >
         <Comments task={subtaskSelected}/>
        </List>       
      </Grid>
    </>
  );
};
