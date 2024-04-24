import { Divider, List, Container } from "@mui/material";
import React from "react";
import { Title } from "../Title";
import { useSelector } from "react-redux";
import { ListTasksToView } from "./ListTasksToView";
import { NothingSelected } from "../NothingSelected";

export const TodoList = () => {
  const { listTasks } = useSelector((state) => state.tasks);

  return (
    <Container>
      <Title title={"List of Tasks"} variant="h6" />
      <Divider>To view</Divider>

      {!!listTasks ? (
        <List
          sx={{
            width: "100%",
            position: "relative",
            overflow: "auto",
            maxHeight: 300,
          }}
        >
          <ListTasksToView />
        </List>
      ) : (
        <NothingSelected title="You not have Tasks to check 😎" />
      )}
    </Container>
  );
};
