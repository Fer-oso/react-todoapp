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
      {listTasks.length > 0 ? (
        <>
          {!!taskSelected ? (
            <>
              <Title
                variant={"h4"}
                title={`Quick view of ${taskSelected.title}`}
                textAlign={"center"}
              />

              <Grid>
                <Divider>comments</Divider>
                <List
                  sx={{
                    width: "100%",
                    bgcolor: "main.error",
                    position: "relative",
                    overflow: "auto",
                    maxHeight: { xs: 500, sm: 300, md: 480, lg: 500, xl: 370 },
                    "& ul": { padding: 0 },
                  }}
                >
                  <Comments />
                </List>
              </Grid>
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
