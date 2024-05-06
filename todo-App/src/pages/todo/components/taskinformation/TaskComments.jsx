import { Container, Divider, Grid, List, Typography } from "@mui/material";
import React from "react";
import { Comments } from "../Comments";
import { Title } from "../Title";
import { useSelector } from "react-redux";
import { NothingSelected } from "../NothingSelected";

export const TaskComments = () => {
  const { subtaskSelected } = useSelector((state) => state.tasks);

  return (
    <Container sx={{ borderRight: " 2px solid #F1F1F1", marginTop: 1 }}>
      <Divider>
        {" "}
        <Title title={"Task comments"} variant="subtitle2" />
      </Divider>

      <>
        {!!subtaskSelected ? (
          <List
            sx={{
              width: "100%",
              bgcolor: "main.error",
              position: "relative",
              overflow: "auto",
              maxHeight: { sm: 300, md: 470, lg: 470, xl: 520 },
              "& ul": { padding: 0 },
            }}
            subheader={<li />}
          >
            <Comments subtaskSelected={subtaskSelected} />
          </List>
        ) : (
          <NothingSelected title="Select one subtask to view comments" />
        )}
      </>
    </Container>
  );
};
