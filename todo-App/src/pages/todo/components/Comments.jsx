import {
  Alert,
  Divider,
  ListItem,
  ListSubheader,
  Typography,
} from "@mui/material";
import React from "react";

import { NothingSelected } from "./NothingSelected";
import { useSelector } from "react-redux";

export const Comments = () => {
  const { subtaskSelected } = useSelector((state) => state.tasks);

  return (
    <>
      {!!subtaskSelected ? (
        <>
          {subtaskSelected.comments.map((data, index) => (
            <>
              <ListItem alignItems="flex-start" key={index}>
                <Alert variant="standard" severity={data.severity}>
                  <Typography
                    variant="body1"
                    color="black"
                    textAlign="start"
                    gutterBottom
                    fontWeight="fontWeightBold"
                  > 
                   Fernando Osorio {data.date}
                  </Typography>
                  {data.comment}
                </Alert>
              </ListItem>
              <Divider></Divider>
            </>
          ))}
        </>
      ) : (
        <NothingSelected title="you not have comments for this task" />
      )}
    </>
  );
};
