import { Container, Divider, Grid, List, Typography } from "@mui/material";
import React from "react";

import { useSelector } from "react-redux";

import { Comments } from "./Comments";
import { Title } from "./Title";
import { NothingSelected } from "./NothingSelected";

export const TodoInformation = () => {
  const { listTasks, taskSelected } = useSelector((state) => state.tasks);

  return (
    <>
      {!!listTasks ? (
        <>
          {!!taskSelected ? (
            <>
              <Title
                variant={"h6"}
                title={`Quick view of ${taskSelected.title}`}
                textAlign={"center"}
              />
              <Divider>comments</Divider>
              <List
                sx={{
                  position: "relative",
                  overflow: "auto",
                  maxHeight: { xs: 500, sm: 300, md: 480, lg: 430, xl: 370 },
                  "& ul": { padding: 0 },
                }}
                subheader={<li />}
              >
                <Comments comments={taskSelected.comments}/>
              </List>
            </>
          ) : (
            <NothingSelected title="Select one Task of the list" />
          )}
        </>
      ) : (
        <NothingSelected title="You not have Tasks available" />
      )}
    </>
  );
};
