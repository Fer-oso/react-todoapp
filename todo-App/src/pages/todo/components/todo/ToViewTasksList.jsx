import {
  Divider,
  List,
  Container,
  ListItemButton,
  IconButton,
  Collapse,
  Typography,
  Box,
  ListItem,
} from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { ListTasksToView } from "./ListTasksToView";
import { NothingSelected } from "../NothingSelected";
import {
  AssignmentLateOutlined,
  ExpandLess,
  ExpandMore,
} from "@mui/icons-material";
import { useChecked } from "../../../hooks/useChecked";

export const ToViewTasksList = () => {
  const { listTasks } = useSelector((state) => state.tasks);

  const { open, handleToggle } = useChecked();

  const calendary = ["To take"];

  return (
    <Container sx={{ borderRight: " 2px solid #F1F1F1", marginTop: 1 }}>
      <Divider>
        <Typography
          variant="subtitle2"
          fontFamily={"Open Sans"}
          fontWeight={"fontWeightBold"}
        >
          To view
        </Typography>
      </Divider>

      {!!listTasks ? (
        <List dense disablePadding sx={{ marginTop: 1 }}>
          {calendary.map((day, index) => (
            <Box key={index}>
              <ListItem
                disableGutters
                disablePadding
                secondaryAction={
                  <IconButton
                    onClick={handleToggle(day, index)}
                    sx={{
                      fontSize: "13px",
                      fontWeight: "fontWeightBold",
                      color: "black",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "13px",
                        fontWeight: "fontWeightBold",
                      }}
                    >
                      {listTasks.filter((task) => task.status === "").length}
                    </Typography>
                    {open[index] ? <ExpandLess /> : <ExpandMore />}
                  </IconButton>
                }
              >
                <ListItemButton disableGutters>
                  <AssignmentLateOutlined
                    sx={{ fontSize: 25, color: "grey" }}
                  />
                  <Typography variant="subtitle2" marginLeft={2}>
                    {day}
                  </Typography>
                </ListItemButton>
              </ListItem>

              <Collapse in={open[index]} timeout="auto" unmountOnExit>
                <ListTasksToView />
              </Collapse>
            </Box>
          ))}
        </List>
      ) : (
        <NothingSelected title="You not have Tasks to check 😎" />
      )}
    </Container>
  );
};
