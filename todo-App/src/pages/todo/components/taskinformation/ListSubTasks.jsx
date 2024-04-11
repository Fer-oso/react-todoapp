import {
  AssignmentOutlined,
  ExpandLess,
  ExpandMore,
  HandshakeOutlined, PhoneAndroidOutlined,
  RemoveRedEye, StarBorder, WorkOutline
} from "@mui/icons-material";
import {
  Collapse,
  Container, IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider
} from "@mui/material";

import { useSelector } from 'react-redux';

import React, { useState } from "react";
import { Title } from "../Title";

export const ListSubTasks = () => {

  const {taskSelected} = useSelector(state =>state.tasks)

  const [open, setOpen] = useState([]);

  const [checked, setChecked] = React.useState([1]);

  const handleToggle = (value, index) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);

    setOpen(() => {
      const newOpenList = open;
      newOpenList[index] = !newOpenList[index];
      return newOpenList;
    });
  };

  const icons = [];

  icons[0] = <WorkOutline />;
  icons[1] = <PhoneAndroidOutlined />;

  return (
    <Container>
      <Title title={taskSelected.title} />
      <Divider></Divider>
      <List
        component="nav"
        sx={{
          maxHeight: { xs: 150 },
          position: "relative",
          overflow: "auto",
          marginTop: "20px",
        }}
      >
        {taskSelected.subTasks.map((value, index) => (
          <>
            <ListItem
              key={index}
              secondaryAction={
                <IconButton
                  edge="end"
                  aria-label="info-task"
                  onClick={handleToggle(value, index)}
                >
                  {open[index] ? <ExpandLess /> : <ExpandMore />}
                </IconButton>
              }
              disablePadding
            >
              <ListItemButton>
                <ListItemAvatar>
                  <AssignmentOutlined></AssignmentOutlined>
                </ListItemAvatar>
                <ListItemText
                  id={value}
                  primary={value.title /*`Line item ${value + 1}`*/}
                />
              </ListItemButton>
            </ListItem>
            <Collapse in={open[index]} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText primary="Starred" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <HandshakeOutlined />
                  </ListItemIcon>
                  <ListItemText primary="Bussines" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <RemoveRedEye />
                  </ListItemIcon>
                  <ListItemText primary="View" />
                </ListItemButton>
              </List>
            </Collapse>
          </>
        ))}
      </List>
    </Container>
  );
};
