import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { ImageGallery } from "../ImageGallery";

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
          <ListItemText
            primary={
              <>
                <Typography
                  variant="body1"
                  fontWeight={"fontWeightBold"}
                  sx={{ color: "black" }}
                >
                  Fernando Osorio: {change.date}
                </Typography>
              </>
            }
            secondary={
              <>
                <Typography variant="body1" sx={{ color: "black" }}>
                  {change.text}
                </Typography>
                <br />
                <ImageGallery images={change.images} />
              </>
            }
          />
        </ListItem>
      ))}
    </>
  );
};
