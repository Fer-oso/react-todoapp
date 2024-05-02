import {
    Divider,
    List,
    Container,
    ListItemButton,
    IconButton,
    Collapse,
    Typography,
    Box,
    ListItem, ListItemIcon
  } from "@mui/material";
  import React from "react";
  import { useSelector } from "react-redux";
  import { ListTasksToView } from "./ListTasksToView";
  import { NothingSelected } from "../NothingSelected";
  import { MenuOutlined } from "@mui/icons-material";
  import { useChecked } from "../../../hooks/useChecked";
  
  export const PendingList = () => {
    const { listTasks } = useSelector((state) => state.tasks);
  
    const { open, handleToggle } = useChecked();
  
    const calendary = ["Today", "Tomorrow", "Yesterday", "Next Week"];
    return (
      <Container sx={{ borderRight:" 2px solid #D2D1D1", marginTop:1}}>
        
        <Divider>
          <Typography variant="subtitle2" fontFamily={"Open Sans"} fontWeight={"fontWeightBold"}>
            Pending
          </Typography>
        </Divider>
  
        {!!listTasks ? (
          <List dense disablePadding sx={{marginTop:1}}>
            {calendary.map((day, index) => (
              <Box key={index}>
                <ListItem
                  disableGutters
                  disablePadding
                  secondaryAction={
                    <ListItemIcon sx={{fontSize:'13px', fontWeight:'fontWeightBold'}}>
                      {listTasks.length}
                    </ListItemIcon>
                  }
                >
                  <ListItemButton disableGutters>
                    <IconButton size="small" onClick={handleToggle(day, index)}>
                      <MenuOutlined />
                    </IconButton>
                    <Typography variant="subtitle2" fontFamily={"Segoe UI"} >
                      {day}
                    </Typography>
                  </ListItemButton>
                </ListItem>
  
                <Collapse in={open[index]} timeout="auto" unmountOnExit>
                  <ListTasksToView />
                </Collapse>
              </Box>
            ))}
          </List>
          
  
          
        ) : (
          <NothingSelected title="You not have Tasks to check 😎" />
        )}
      </Container>
    );
  };
  