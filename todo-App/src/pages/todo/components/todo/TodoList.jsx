import { Divider, List,Container } from "@mui/material";
import React from "react";
import { Title } from "../Title";
import { useSelector } from "react-redux";
import { ListTasksToView } from "./ListTasksToView";
import { NothingSelected } from "../NothingSelected";

export const TodoList = () => {
  const { listTasks } = useSelector((state) => state.tasks);

  return (
    <Container>
      <Title title={"List of Tasks"} variant="h4" />
      <Divider>To view</Divider>
      <List
        sx={{
          width: "100%",
          position: "relative",
          overflow: "auto",
          maxHeight: 300,
        }}
      >
        {listTasks.length > 0 ? (
          <ListTasksToView />
        ) : (
          <NothingSelected title="You not have Tasks to check 😎" />
        )}
      </List>
    </Container>
  );
};
