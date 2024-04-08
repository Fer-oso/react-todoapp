import {
  CancelOutlined,
  Check,
  CommentOutlined,
  RemoveRedEyeOutlined,
} from "@mui/icons-material";
import {
  ButtonGroup,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import React from "react";

import { useSelector } from "react-redux";

import { useDispatch } from "react-redux";
import {
  loadTasks,
  setTaskSelected,
  taskApprovedChecked,
  taskDeniedChecked,
  taskEnabledChecked,
} from "../../../../store/todos/taskSlice";

export const ListTasksToView = () => {
  const { listTasks, taskSelected } = useSelector((state) => state.tasks);

  const dispatch = useDispatch();

  const onClickTaskSelected = (task) => {
    dispatch(setTaskSelected(task));

    dispatch(taskEnabledChecked());

    const updatedListTasks = listTasks.map((t) => ({
      ...t,
      enabled: t.id === task.id,
    }));

    dispatch(loadTasks(updatedListTasks));
  };

  const onClickAproved = (task) => {
    dispatch(taskApprovedChecked("approved"));

    const updatedListTasks = listTasks.map((t) => ({
      ...t,
      checked: t.id === task.id ? "approved" : t.checked,
    }));

    dispatch(loadTasks(updatedListTasks));
  };

    const onClickDenied = (task) => {
      dispatch(taskDeniedChecked("denied"));

      const updatedListTasks = listTasks.map((t) => ({
        ...t,
        checked: t.id === task.id ? "denied" : t.checked,
      }));

      dispatch(loadTasks(updatedListTasks));
    };

  const colored = (task) => {
    const color =
      task.checked === "approved"
        ? "listItem.approved"
        : task.checked === "denied"
        ? "listItem.denied"
        : "inherit";
    return { bgcolor: color };
  };

  return (
    <>
      {listTasks.map((task) => (
        <ListItem
          key={task.id}
          sx={() => colored(task)}
          secondaryAction={
            <ButtonGroup variant="text" disableElevation>
              <IconButton
                disabled={!task.enabled}
                edge="end"
                aria-label="comments"
                onClick={() => onClickAproved(task)}
                id={task.id}
              >
                <Check />
              </IconButton>

              <IconButton
                edge="end"
                aria-label="comments"
                disabled={!task.enabled}
                onClick={() => onClickDenied(task)}
                id={task.id}
              >
                <CancelOutlined />
              </IconButton>

              <IconButton
                edge="end"
                aria-label="comments"
                disabled={!task.enabled}
              >
                <RemoveRedEyeOutlined />
              </IconButton>

              <IconButton
                edge="end"
                aria-label="comments"
                disabled={!task.enabled}
              >
                <CommentOutlined />
              </IconButton>
            </ButtonGroup>
          }
          disablePadding
        >
          <ListItemButton dense onClick={() => onClickTaskSelected(task)}>
            <ListItemText id={task.id} primary={task.title} />
          </ListItemButton>
        </ListItem>
      ))}
    </>
  );
};
