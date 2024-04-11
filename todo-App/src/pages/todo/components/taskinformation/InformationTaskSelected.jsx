import { List, ListItem, ListSubheader, Typography } from '@mui/material'
import React from 'react'
import { StatusTaskSelected } from './StatusTaskSelected'

export const InformationTaskSelected = ({ taskSelected }) => {
  return (
    <List
      sx={{
        overflow: "auto",
        maxHeight: { xs: 500, md: 550, lg: 720, xl: 830 },
      }}
      subheader={
        <ListSubheader sx={{ marginTop: "15px" }}>
          <Typography
            variant="body1"
            color={"black"}
            fontWeight={"fontWeightBold"}
          >
            Description of the task
          </Typography>
        </ListSubheader>
      }
    >
      <ListItem>
        <Typography variant="body2">
          {taskSelected.description}
        </Typography>
      </ListItem>

      <ListItem>
        <StatusTaskSelected taskSelected={taskSelected}/>
      </ListItem>
    </List>
  );
};
