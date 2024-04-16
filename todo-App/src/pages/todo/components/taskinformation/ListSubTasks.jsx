import {
  AssignmentLateOutlined,
  AssignmentOutlined,
  AssignmentTurnedInOutlined,
  ExpandLess,
  ExpandMore,
  PendingActionsOutlined,
  RuleOutlined,
} from "@mui/icons-material";
import {
  Collapse,
  Container,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Divider,
  Typography,
} from "@mui/material";

import { useDispatch, useSelector } from "react-redux";

import React from "react";
import { Title } from "../Title";
import {
  subtaskSelected,
  subtaskSelectedChecked,
} from "../../../../store/todos/taskSlice";
import { useChecked } from "../../../hooks/useChecked";

import Swal from "sweetalert2";
import "@sweetalert2/theme-material-ui";

export const ListSubTasks = () => {
  const { taskSelected } = useSelector((state) => state.tasks);

  const dispatch = useDispatch();

  const { open, handleToggle } = useChecked();

  const onClickFinished = (subtask = {}) => {
    Swal.fire({
      title: "Do you want finish the subtask?",
      showCancelButton: true,
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Saved!", "", "success");

        const subtaskFinished = {
          ...subtask,
          enabled: true,
          checked: "finished",
        };

        dispatch(subtaskSelectedChecked(subtaskFinished));
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };

  const onClickInProcess = (task) => {
    Swal.fire({
      title: "Do you want in process the Task?",

      showCancelButton: true,
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Saved!", "", "success");

        const subtaskInProcess = {
          ...task,
          enabled: false,
          checked: "in process",
        };

        dispatch(subtaskSelectedChecked(subtaskInProcess));
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };

  const onClickPending = (task) => {
    Swal.fire({
      title: "Do you want pending the subtask?",

      showCancelButton: true,
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Saved!", "", "success");

        const subtaskPending = {
          ...task,
          enabled: false,
          checked: "pending",
        };

        dispatch(subtaskSelectedChecked(subtaskPending));
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };

  const onClickPaused = (task) => {
    Swal.fire({
      title: "Do you want paused the subtask?",

      showCancelButton: true,
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Saved!", "", "success");

        const subtaskPaused = {
          ...task,
          enabled: false,
          checked: "paused",
        };

        dispatch(subtaskSelectedChecked(subtaskPaused));
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };

  const colored = (task) => {
    let color = "";

    switch (task.checked) {
      case "finished":
        color = "listItem.finished";
        break;

      case "in process":
        color = "listItem.inProcess";
        break;

      case "pending":
        color = "listItem.pending";
        break;

      case "paused":
        color = "listItem.paused";
        break;
      default:
        "inherit";
        break;
    }
    return { bgcolor: color };
  };

  return (
    <Container>
      <Title title={taskSelected.title} variant="body1" />

      <Typography variant="body2">{taskSelected.description}</Typography>

      <Divider></Divider>
      <List
        component="nav"
        sx={{
          maxHeight: { xs: 150, md: 450 },
          position: "relative",
          overflow: "auto",
          marginTop: "20px",
        }}
      >
        {taskSelected.subTasks.map((subtask, index) => (
          <>
            <ListItem
              key={subtask.id}
              sx={() => colored(subtask)}
              secondaryAction={
                <IconButton
                  edge="end"
                  aria-label="info-task"
                  onClick={handleToggle(subtask, index)}
                >
                  {open[index] ? <ExpandLess /> : <ExpandMore />}
                </IconButton>
              }
              disablePadding
            >
              <ListItemButton
                onClick={() => dispatch(subtaskSelected(subtask))}
              >
                <ListItemIcon>
                  <AssignmentOutlined></AssignmentOutlined>
                </ListItemIcon>
                <Typography variant="overline">{subtask.title}</Typography>
              </ListItemButton>
            </ListItem>

            <Collapse in={open[index]} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton onClick={() => onClickFinished(subtask)}>
                  <ListItemIcon>
                    <AssignmentTurnedInOutlined />
                  </ListItemIcon>
                  <Typography
                    variant="caption"
                    sx={{ bgcolor: "listItem.finished" }}
                    fontWeight={"fontWeightBold"}
                  >
                    finished
                  </Typography>
                </ListItemButton>

                <ListItemButton onClick={() => onClickInProcess(subtask)}>
                  <ListItemIcon>
                    <RuleOutlined />
                  </ListItemIcon>
                  <Typography
                    variant="caption"
                    sx={{ bgcolor: "listItem.inProcess" }}
                    fontWeight={"fontWeightBold"}
                  >
                    In process
                  </Typography>
                </ListItemButton>

                <ListItemButton onClick={() => onClickPending(subtask)}>
                  <ListItemIcon>
                    <PendingActionsOutlined />
                  </ListItemIcon>
                  <Typography
                    variant="caption"
                    sx={{ bgcolor: "listItem.pending" }}
                    fontWeight={"fontWeightBold"}
                  >
                    Pending
                  </Typography>
                </ListItemButton>

                <ListItemButton onClick={() => onClickPaused(subtask)}>
                  <ListItemIcon>
                    <AssignmentLateOutlined />
                  </ListItemIcon>
                  <Typography
                    variant="caption"
                    sx={{ bgcolor: "listItem.paused" }}
                    fontWeight={"fontWeightBold"}
                  >
                    paused
                  </Typography>
                </ListItemButton>
              </List>
            </Collapse>
          </>
        ))}
      </List>
    </Container>
  );
};
