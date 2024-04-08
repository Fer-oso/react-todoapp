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

import { useSelector } from "react-redux";

export const Comments = () => {
 const { taskSelected } = useSelector((state) => state.tasks);

  return (
    <Stack spacing={1} sx={{ width: "100%" }}>
      <List>
        {taskSelected.comments.map((commentData) => (
          <>
            <ListSubheader key={taskSelected.id}>
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
            <>
              {commentData.comment.map((comm, index) => (
                <ListItem alignItems="flex-start" key={index}>
                  <ListItemButton>
                    <Alert variant="filled" severity={comm.severity}>
                      {comm.text}
                    </Alert>
                  </ListItemButton>
                </ListItem>
              ))}
            </>
          </>
        ))}
      </List>

      <Divider></Divider>
    </Stack>
  );
};
