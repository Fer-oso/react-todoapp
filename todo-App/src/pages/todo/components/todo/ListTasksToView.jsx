import React from "react";
import {
  CancelOutlined,
  Check,
  CommentOutlined,
  RemoveRedEyeOutlined,
} from "@mui/icons-material";
import {
  IconButton,
  Link,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";

import Swal from "sweetalert2";
import "@sweetalert2/theme-material-ui";

import { useDispatch, useSelector } from "react-redux";
import { loadTasks } from "../../../../store/todos/taskSlice";

import { NavLink as navLink } from "react-router-dom";
import {
  startSetStatusIntask,
  startSetTaskSelected
} from "../../../../store/todos/taskThunk";

export const ListTasksToView = () => {
  const { listTasks } = useSelector((state) => state.tasks);

  const dispatch = useDispatch();

  const onClickTaskSelected = (task) => {
    const taskSelected = {
      ...task,
    };

    dispatch(startSetTaskSelected(taskSelected));

    const updatedListTasks = listTasks.map((t) => ({
      ...t,
      enabled: t.id === task.id,
    }));

    dispatch(loadTasks(updatedListTasks));
  };

  const onClickChecked = (task = {}, status = "") => {
    Swal.fire({
      title: `Do you want ${status} the Task?`,
      showCancelButton: true,
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Saved!", "", "success");

        const taskChecked = {
          ...task,
          status,
        };

        dispatch(startSetStatusIntask(taskChecked));
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };

  const colored = (task) => {
    const color =
      task.status === "approved"
        ? "listItem.approved"
        : task.status === "denied"
        ? "listItem.denied"
        : "listItem.default";
    return { bgcolor: color };
  };

  return (
    <>
      {listTasks.map((task, index) => (
        <ListItem
          key={index}
          sx={() => colored(task)}
          disableGutters
          divider
          dense
          alignItems="flex-start"
        >
          <IconButton
            edge="end"
            aria-label="comments"
            onClick={() => onClickChecked(task, "approved")}
            disabled={!task.enabled}
          >
            <Check />
          </IconButton>

          <IconButton
            edge="end"
            aria-label="comments"
            onClick={() => onClickChecked(task, "denied")}
            disabled={!task.enabled}
          >
            <CancelOutlined />
          </IconButton>

          <IconButton
            edge="end"
            aria-label="comments"
            color="primary"
            disabled={!task.enabled}
          >
            <Link component={navLink} to={`tasks/${task.id}`}>
              <RemoveRedEyeOutlined
                sx={{ bgcolor: "white", color: "secondary.main" }}
              />
            </Link>
          </IconButton>

          <IconButton edge="end" aria-label="comments" disabled={!task.enabled}>
            <CommentOutlined />
          </IconButton>
          <ListItemButton dense onClick={() => onClickTaskSelected(task)}>
            <ListItemText primary={task.title} />
          </ListItemButton>
        </ListItem>
      ))}
    </>
  );
};
