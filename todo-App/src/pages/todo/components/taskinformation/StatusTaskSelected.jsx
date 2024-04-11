import { Numbers, NumbersOutlined, StarBorder } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Container,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListSubheader,
  Typography,
} from "@mui/material";
import React from "react";

export const StatusTaskSelected = ({taskSelected}) => {
  return (
    <Grid>
      <List>
        <Typography
          variant="body1"
          color={"black"}
          fontWeight={"fontWeightBold"}
        >
          Resumen
        </Typography>

        <Typography variant="body2">
          The creation of the Template stay in a good way, we have made a lot of
          progress, this week must finalized the information and comments
          sections. <br />
          The proyect must finalized in three weeks
        </Typography>

        <Typography
          marginTop={2}
          variant="body1"
          color={"black"}
          fontWeight={"fontWeightBold"}
        >
          Changes history
        </Typography>

        {taskSelected.changes.map((change,index) => (
          <ListItem key={index} alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="profile-image"
                src="../img/profiles/profile-man.jpg"
              />
            </ListItemAvatar>
            <Typography variant="body2"> {change.comment}</Typography>
          </ListItem>
        ))}
      </List>
    </Grid>
  );
};
