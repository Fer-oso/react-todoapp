import {
  CancelOutlined,
  Check,
  CommentOutlined,
  RemoveRedEyeOutlined,
} from "@mui/icons-material";
import {
  IconButton,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";

import Swal from "sweetalert2";
import "@sweetalert2/theme-material-ui";

import React, { useState } from "react";

import { useSelector } from "react-redux";

import { useDispatch } from "react-redux";
import {
  loadTasks,
  taskSelectedChecked,
  taskSelectedEnabled,
} from "../../../../store/todos/taskSlice";
import { Link } from "react-router-dom";

export const ListTasksToView = () => {
  const { listTasks } = useSelector((state) => state.tasks);

  const [enabled, setEnabled] = useState(false);

  const dispatch = useDispatch();

  const onClickTaskSelected = (task) => {
    const taskSelected = {
      ...task,
      enabled: !task.enabled,
    };

    dispatch(taskSelectedEnabled(taskSelected));

    const updatedListTasks = listTasks.map((t) => ({
      ...t,
      enabled: t.id === task.id,
    }));

    dispatch(loadTasks(updatedListTasks));
  };

  const onClickAproved = (task = {}) => {
    Swal.fire({
      title: "Do you want approve the Task?",
      showCancelButton: true,
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Saved!", "", "success");

        const taskAproved = {
          ...task,
          enabled: false,
          checked: "approved",
        };

        setEnabled(false);

        dispatch(taskSelectedChecked(taskAproved));
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };

  const onClickDenied = (task) => {
    Swal.fire({
      title: "Do you want Denied the Task?",

      showCancelButton: true,
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Saved!", "", "success");

        const taskDenied = {
          ...task,
          enabled: false,
          checked: "denied",
        };

        setEnabled(true);

        dispatch(taskSelectedChecked(taskDenied));
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };

  const colored = (task) => {
    const color =
      task.checked === "approved"
        ? "listItem.approved"
        : task.checked === "denied"
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
          secondaryAction={<></>}
          disablePadding
          divider
        >
          <IconButton
            disabled={!task.enabled}
            edge="end"
            aria-label="comments"
            onClick={() => onClickAproved(task)}
          >
            <Check />
          </IconButton>

          <IconButton
            edge="end"
            aria-label="comments"
            disabled={!task.enabled}
            onClick={() => onClickDenied(task)}
          >
            <CancelOutlined />
          </IconButton>

          <IconButton
            edge="end"
            aria-label="comments"
            disabled={!task.enabled}
            color="primary"
          >
            <Link to={`tasks/${task.id}`}>
              <RemoveRedEyeOutlined />
            </Link>
          </IconButton>

          <IconButton edge="end" aria-label="comments" disabled={!task.enabled}>
            <CommentOutlined />
          </IconButton>
          <ListItemButton
            disabled={enabled}
            dense
            onClick={() => onClickTaskSelected(task)}
          >
            <ListItemText primary={task.title} />
          </ListItemButton>
        </ListItem>
      ))}
    </>
  );
};
