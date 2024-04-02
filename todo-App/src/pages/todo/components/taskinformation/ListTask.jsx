import {
  DraftsOutlined,
  ExpandLess,
  ExpandMore,
  HandshakeOutlined,
  InboxOutlined,
  PhoneAndroidOutlined,
  RemoveRedEye,
  SendOutlined,
  StarBorder,
  Work,
  WorkOutline,
} from "@mui/icons-material";
import {
  Avatar,
  Checkbox,
  Collapse,
  Container,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Title } from "../Title";

export const ListTask = () => {
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
    <Grid sx={{ width: "100%" }}>
     
      <Title title={"Task N° 165232"} />
      <List
        sx={{
          width: "100%",
          bgcolor: "primary.main",
          maxHeight: 300,
          position: "relative",
          overflow: "auto",
          "& ul": { padding: 0 },
        }}
        component="nav"
        subheader={
          <ListSubheader
            component="div"
            id="nested-list-subheader"
          ></ListSubheader>
        }
      >
        {[1, 2, 3, 4, 5, 6].map((value, index) => {
          const labelId = `checkbox-list-secondary-label-${value}`;
          return (
            <>
              {" "}
              <ListItem
                key={value}
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
                    <IconButton>{icons[index]}</IconButton>
                  </ListItemAvatar>
                  <ListItemText
                    id={value}
                    primary={
                      "Create a Template for information" /*`Line item ${value + 1}`*/
                    }
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
          );
        })}
      </List>
    </Grid>
  );
};
