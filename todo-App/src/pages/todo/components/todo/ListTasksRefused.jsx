import React from "react";

import { ListItem, ListItemButton, ListItemText } from "@mui/material";

import Swal from "sweetalert2";
import "@sweetalert2/theme-material-ui";

import { useDispatch, useSelector } from "react-redux";

import {
  startSetStatusIntask,
} from "../../../../store/todos/taskThunk";
import { colored } from "../../../utils/colors";
import { Status } from "../Status";
import { useTaskSelection } from "../../hooks/useTaskSelection";

export const ListTasksRefused = () => {
  const { listTasks } = useSelector((state) => state.tasks);

  const dispatch = useDispatch();

  const { onClickTaskSelected } = useTaskSelection();

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
      {listTasks
        .filter((task) => task.status === "refused")
        .map((task, index) => (
          <ListItem
            disableGutters
            disablePadding
            key={index}
            secondaryAction={
              <Status onClickChecked={onClickChecked} task={task} />
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
