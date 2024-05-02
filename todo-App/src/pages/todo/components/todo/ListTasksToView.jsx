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
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";

import Swal from "sweetalert2";
import "@sweetalert2/theme-material-ui";

import { useDispatch, useSelector } from "react-redux";
import {
  loadTasks,
  taskSelectedEnabled,
} from "../../../../store/todos/taskSlice";

import { NavLink as navLink } from "react-router-dom";
import {
  startSetStatusIntask,
  startSetTaskSelected,
} from "../../../../store/todos/taskThunk";
import { colored } from "../../../utils/colors";

export const ListTasksToView = () => {
  const { listTasks } = useSelector((state) => state.tasks);

  const dispatch = useDispatch();

  const onClickTaskSelected = (task) => {
    dispatch(startSetTaskSelected(task));

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

  return (
    <>
      {listTasks.map((task, index) => (
        <ListItem
          disableGutters
          disablePadding
          key={index}
          secondaryAction={
            <>
              <IconButton
                edge="end"
                aria-label="comments"
                onClick={() => onClickChecked(task, "approved")}
                disabled={!task.enabled}
                size="small"
              >
                <Check />
              </IconButton>

              <IconButton
                edge="end"
                aria-label="comments"
                onClick={() => onClickChecked(task, "denied")}
                disabled={!task.enabled}
                size="small"
              >
                <CancelOutlined />
              </IconButton>

              <IconButton
                edge="end"
                aria-label="comments"
                color="primary"
                disabled={!task.enabled}
                size="small"
              >
               
              </IconButton>
            </>
          }
        >
          <ListItemButton
            key={index}
            sx={{ bgcolor: colored(task) }}
            alignItems="flex-start"
            divider
            disableGutters
            onClick={() => onClickTaskSelected(task)}
          >
            <ListItemText
              sx={{
                margin: "auto",
                overflow: "hidden",
                display: "-webkit-box",
                whiteSpace: "normal",
                WebkitLineClamp: "2",
              }}
            >
              {task.title}
            </ListItemText>
          </ListItemButton>
        </ListItem>
      ))}
    </>
  );
};
{
  /*  <ListItemButton
            key={index}
            sx={{ bgcolor: colored(task) }}
            alignItems="flex-start"
            divider
            disableGutters
            onClick={() => onClickTaskSelected(task)}
          >
            <ListItemText sx={{ marginLeft: "7px" }}>{task.title}</ListItemText>
           

            <IconButton
              edge="end"
              aria-label="comments"
              onClick={() => onClickChecked(task, "denied")}
              disabled={!task.enabled}
              size="small"
            >
              <CancelOutlined />
            </IconButton>

            <IconButton
              edge="end"
              aria-label="comments"
              color="primary"
              disabled={!task.enabled}
              size="small"
            >
              <Link component={navLink} to={`tasks/${task.id}`}>
                <RemoveRedEyeOutlined
                  sx={{ bgcolor: "white", color: "secondary.main" }}
                />
              </Link>
            </IconButton>

            <IconButton
              edge="end"
              aria-label="comments"
              disabled={!task.enabled}
              size="small"
            >
              <CommentOutlined />
            </IconButton>
      </ListItemButton> */
}
