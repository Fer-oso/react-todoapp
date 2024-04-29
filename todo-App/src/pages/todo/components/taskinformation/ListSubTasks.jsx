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
import { subtaskSelected } from "../../../../store/todos/taskSlice";
import { useChecked } from "../../../hooks/useChecked";

import Swal from "sweetalert2";
import "@sweetalert2/theme-material-ui";
import { NothingSelected } from "../NothingSelected";
import { startSetStatusInSubtask } from "../../../../store/todos/taskThunk";

export const ListSubTasks = () => {
  const { taskSelected, listSubtasks } = useSelector((state) => state.tasks);

  const dispatch = useDispatch();

  const { open, handleToggle } = useChecked();

  const onClickSetState = (subtask = {}, status = "") => {
    Swal.fire({
      title: `Do you want ${status} the subtask?`,
      showCancelButton: true,
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Saved!", "", "success");

        const subtaskFinished = {
          ...subtask,
          status,
        };

        dispatch(startSetStatusInSubtask(taskSelected.id, subtaskFinished));
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };

  const colored = (task) => {
    let color = "";

    switch (task.status) {
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
      <Title title={taskSelected.title} variant="h6" />

      <Typography variant="body2">{taskSelected.description}</Typography>

      <Divider></Divider>

      <>
        {listSubtasks.length > 0 ? (
          <List
            component="nav"
            sx={{
              maxHeight: { xs: 150, md: 450 },
              position: "relative",
              overflow: "auto",
              marginTop: "20px",
            }}
          >
            <>
              {listSubtasks.map((subtask, index) => (
                <div key={index}>
                  <ListItem
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
                      <Typography variant="overline">
                        {subtask.title}
                      </Typography>
                    </ListItemButton>
                  </ListItem>

                  <Collapse in={open[index]} timeout="auto" unmountOnExit>
                    <ListItemButton
                      onClick={() => onClickSetState(subtask, "finished")}
                    >
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

                    <ListItemButton
                      onClick={() => onClickSetState(subtask, "in process")}
                    >
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

                    <ListItemButton
                      onClick={() => onClickSetState(subtask, "pending")}
                    >
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

                    <ListItemButton
                      onClick={() => onClickSetState(subtask, "paused")}
                    >
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
                  </Collapse>
                </div>
              ))}
            </>
          </List>
        ) : (
          <NothingSelected title="No subtasks" />
        )}
      </>
    </Container>
  );
};
