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

export const StatusTaskSelected = () => {
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

        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="profile-image" src="../img/profiles/profile-man.jpg" />
          </ListItemAvatar>
          12-3-24 / 20:03 hs <br /> Se realizo el cambio en el header, ya no
          tiene puntas redondeadas donde deben ser rectangulares
        </ListItem>

        <ListItem>
          <ListItemAvatar>
            <Avatar
              alt="profile-image"
              src="../img/profiles/profile-woman-1.jpg"
            />
          </ListItemAvatar>{" "}
          11-3-24 / 20:03 hs <br />
          Se realizo el cambio necesario en el NavBar para que se pueda navegar
          correctamente
        </ListItem>

        <ListItem>
          <ListItemAvatar>
            <Avatar
              alt="profile-image"
              src="../img/profiles/profile-woman-2.jpg"
            />
          </ListItemAvatar>
          11-3-24 / 16:23 hs <br />
          Se realizo el cambio en la fuentes que generaban conflicto entre
          comentarios
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar
              alt="profile-image"
              src="../img/profiles/profile-woman-3.jpg"
            />
          </ListItemAvatar>
          11-3-24 / 13:11 hs <br />
          Se realizo el cambio en la fuentes que generaban conflicto entre menus
        </ListItem>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="profile-image" src="../img/profiles/profile-man.jpg" />
          </ListItemAvatar>
          09-3-24 / 09:03 hs <br /> Se realizo el cambio en el header, se
          pusieron puntas redondeadas donde deben ser rectangulares
        </ListItem>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="profile-image" src="../img/profiles/profile-man.jpg" />
          </ListItemAvatar>
          09-3-24 / 07:03 hs <br /> Se realizo el cambio en el menu, se pusieron
          bien las fuentes
        </ListItem>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="profile-image" src="../img/profiles/profile-man.jpg" />
          </ListItemAvatar>
          09-3-24 / 11:03 hs <br /> Se realizo el cambio en el template
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar
              alt="profile-image"
              src="../img/profiles/profile-woman-2.jpg"
            />
          </ListItemAvatar>
          8-3-24 / 16:23 hs <br />
          Se realizo el cambio en la fuentes que generaban conflicto entre
          comentarios
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar
              alt="profile-image"
              src="../img/profiles/profile-woman-3.jpg"
            />
          </ListItemAvatar>
          8-3-24 / 13:11 hs <br />
          Se realizo el cambio en la fuentes que generaban conflicto entre menus
        </ListItem>
      </List>
    </Grid>
  );
};
