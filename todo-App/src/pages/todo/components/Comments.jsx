import { Alert, Divider, ListItem, Typography } from "@mui/material";
import React from "react";
import { NothingSelected } from "./NothingSelected";

export const Comments = ({ subtaskSelected }) => {
  return (
    <>
      {subtaskSelected.comments.length > 0 ? (
        <>
          {subtaskSelected.comments.map((data, index) => (
            <div key={index}>
              <ListItem alignItems="flex-start">
                <Alert
                  variant="standard"
                  severity={data.severity}
                  key={data.date}
                >
                  <Typography
                    variant="body1"
                    color="black"
                    textAlign="start"
                    gutterBottom
                    fontWeight="fontWeightBold"
                  >
                    Fernando Osorio {data.date}
                  </Typography>
                  {data.text}
                </Alert>
              </ListItem>
              <Divider></Divider>
            </div>
          ))}
        </>
      ) : (
        <NothingSelected title="This subtask dont have comments, create one"/>
      )}
    </>
  );
};
