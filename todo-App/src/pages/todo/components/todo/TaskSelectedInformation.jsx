import {
  Button,
  Checkbox,
  Container,
  Divider, Link,
  List,
  ListItem,
  ListItemButton, TextField,
  Typography
} from "@mui/material";
import React from "react";

import { useDispatch, useSelector } from "react-redux";

import { Title } from "../Title";
import { NothingSelected } from "../NothingSelected";

import { NavLink as navLink } from "react-router-dom";
import {
  RemoveRedEye
} from "@mui/icons-material";
import { subtaskSelected } from "../../../../store/todos/taskSlice";
import { ImageGallery } from "../ImageGallery";

export const TaskSelectedInformation = () => {
  
  const { listTasks, taskSelected } = useSelector((state) => state.tasks);

  const dispatch = useDispatch();

  return (
    <Container sx={{ borderRight: " 2px solid #F1F1F1", marginTop: 1 }}>
      {!!listTasks ? (
        <>
          {!!taskSelected ? (
            <>
              <Divider>
                <Title
                  variant={"subtitle2"}
                  title={`${taskSelected.title}`}
                  textAlign={"center"}
                />
              </Divider>

              <Typography variant="subtitle2">
                {taskSelected.description}
              </Typography>

              <ImageGallery images = {taskSelected.images} />

              <TextField
                id="outlined-basic"
                label="add Subtask"
                variant="outlined"
                size="small"
                margin="dense"
                type="text"
                fullWidth
                sx={{ marginTop: 1 }}
                color="info"
              />
              <Button
                variant="outlined"
                disableElevation
                size="small"
                endIcon={<RemoveRedEye sx={{color:"grey"}} />}
                sx={{ bgcolor: "#E4F8FF", color: "#040404" }}
              >
                <Link
                  component={navLink}
                  to={`tasks/${taskSelected.id}`}
                  color="inherit"
                  underline="none"
                  fontSize={11}
                  fontFamily={"Open Sans"}
                >
                  View full task
                </Link>
              </Button>

              <List
                dense
                sx={{
                  position: "relative",
                  overflow: "auto",
                  maxHeight: { xs: 500, sm: 300, md: 480, lg: 430, xl: 370 },
                  "& ul": { padding: 0 },
                }}
                subheader={<li />}
              >
                {!!taskSelected.subtasks && taskSelected.subtasks.length > 0 ? (
                  <>
                    {taskSelected.subtasks.map((subtask, index) => (
                      <ListItem
                        disablePadding
                        alignItems="flex-start"
                        key={index}
                      >
                        <ListItemButton key={index} disableGutters  onClick={() => dispatch(subtaskSelected(subtask))}>
                          <Checkbox edge="start" color="success" size="small" checked={subtask.status === "finished"} disabled={subtask.status === "finished"} />
                          <Typography fontSize={14} variant="caption">
                            {subtask.title}
                          </Typography>
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </>
                ) : (
                  <>
                    <NothingSelected title="no subtasks" />
                  </>
                )}
              </List>
            </>
          ) : (
            <NothingSelected title="Select one Task of the list" />
          )}
        </>
      ) : (
        <NothingSelected title="You not have Tasks available" />
      )}
    </Container>
  );
};
