import { Avatar, ListItem, ListItemAvatar, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

export const ChangeHistoryComments = () => {
  const { subtaskSelected } = useSelector((state) => state.tasks);

  return (
    <>
      {subtaskSelected.changes.map((change, index) => (
        <ListItem key={index} alignItems="flex-start" disableGutters>
          <ListItemAvatar>
            <Avatar
              alt="profile-image"
              src="../../../img/profiles/profile-man.jpg"
            />
          </ListItemAvatar>
          <Typography variant="body2" fontWeight={"fontWeightBold"}>
            Fernando Osorio{" "}
            <Typography variant="body2" component={"em"}>
              <Typography
                variant="body2"
                component={"u"}
                fontWeight={"fontWeightBold"}
              >
                {change.date}
              </Typography>
              <br></br>
              {change.text}
            </Typography>
          </Typography>
        </ListItem>
      ))}
    </>
  );
};
