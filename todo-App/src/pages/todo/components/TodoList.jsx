import { Cancel, CancelOutlined, CancelPresentation, CancelPresentationOutlined, CancelRounded, CancelScheduleSend, CancelSharp, ChangeCircleOutlined, Check, CheckCircle, CheckCircleOutline, Comment, CommentBank, CommentOutlined, CommentSharp, RemoveRedEye, RemoveRedEyeOutlined, ViewAgenda } from "@mui/icons-material";
import {
  Button,
  ButtonGroup,
  Checkbox,
  Container,
  Divider,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import { listTask } from "../../../data/listTasks";
import { Title } from "./Title";

export const TodoList = () => {
  const [checked, setChecked] = React.useState([0]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <Grid maxWidth="100%">
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
        {listTask.map((value) => {
          const labelId = `checkbox-list-label-${value.id}`;

          return (
            <ListItem
              key={value.id}
              secondaryAction={
                <>
                  <ButtonGroup variant="text" disableElevation>
                    <IconButton edge="end" aria-label="comments">
                      <Check />
                    </IconButton>

                    <IconButton edge="end" aria-label="comments">
                      <CancelOutlined />
                    </IconButton>

                    <IconButton edge="end" aria-label="comments">
                      <RemoveRedEyeOutlined />
                    </IconButton>

                    <IconButton edge="end" aria-label="comments">
                      <CommentOutlined />
                    </IconButton>
                  </ButtonGroup>
                </>
              }
              disablePadding
            >
              <ListItemButton role={undefined} dense>
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    checked={checked.indexOf(value.id) !== -1}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ "aria-labelledby": labelId }}
                    color="success"
                    onClick={handleToggle(value.id)}
                  />
                </ListItemIcon>
                <ListItemText id={labelId} primary={value.title} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Grid>
  );
};
