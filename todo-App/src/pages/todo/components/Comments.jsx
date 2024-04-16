import {
  Alert,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListSubheader,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

import { NothingSelected } from "./NothingSelected";

export const Comments = ({task}) => {

  return (
    <>
      {!!task ? (
        <>
          {task.comments.map((comment, index) => (
            <>
              <ListSubheader key={index}>
                <Typography
                  variant="h5"
                  color="black"
                  textAlign="center"
                  gutterBottom
                  fontWeight="fontWeightBold"
                >
                  {`Week ${comment.week}  - ${comment.date}`}
                </Typography>
              </ListSubheader>
              <>
                {comment.comment.map((comm, index) => (
                  <ListItem alignItems="flex-start" key={index}>
                    <Alert variant="standard" severity={comm.severity}>
                      {comm.text}
                    </Alert>
                  </ListItem>
                ))}
                <Divider></Divider>
              </>
            </>
          ))}
        </>
      ) : (
        <NothingSelected/>
      )}
    </>
  );
};
