import {
  Alert,
  Button,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListSubheader,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { listTask } from "../../../data/listTasks";

export const Comments = () => {
  return (
    <Stack spacing={1} sx={{ width: "100%" }}>
      {listTask.map((task) => (
        <List key={task.id}>
          {task.comments.map((commentData,index) => (
            <>
              <ListSubheader key={index}>
                <Typography
                  variant="h5"
                  color="black"
                  textAlign="center"
                  gutterBottom
                  fontWeight="fontWeightBold"
                >
                  {`Week ${commentData.week}  - ${commentData.date}`}
                </Typography>
              </ListSubheader>
              {commentData.comment.map(comm =>(
                  <ListItem alignItems="flex-start">
                  <ListItemButton>
                    <Alert variant="filled" severity={comm.severity}>
                      {comm.text}
                    </Alert>
                  </ListItemButton>
                </ListItem>
              ))}
            </>
          ))}
        </List>
      ))}
      <Divider></Divider>
    </Stack>
  );
};
