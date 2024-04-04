import { Divider, List } from "@mui/material";
import React, { useEffect } from "react";
import { listTask } from "../../../../data/listTasks";
import { Title } from "../Title";
import { useDispatch, useSelector } from "react-redux";
import { ListTasksToView } from "./ListTasksToView";
import { NothingSelected } from "../NothingSelected";

export const TodoList = () => {
  const { listTasks } = useSelector((state) => state.tasks);
  return (
  <>
  
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
        {listTasks.length>0 ? (
          listTasks.map((value) => (<ListTasksToView value={value} />))
        ) : (
          <NothingSelected />
        )}
      </List>
    </>
  );
};
