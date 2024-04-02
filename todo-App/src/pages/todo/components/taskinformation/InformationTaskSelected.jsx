import { List, ListItem, ListSubheader, Typography } from '@mui/material'
import React from 'react'
import { StatusTaskSelected } from './StatusTaskSelected'

export const InformationTaskSelected = () => {
  return (
    <List sx={{maxWidth:'100%',
    overflow: 'auto',
    maxHeight: {xs:500 ,md: 550, lg:720,xl:830},
    }}
      subheader={
        <ListSubheader sx={{marginTop:'15px'}}>
          <Typography  variant="body1" color={"black"} fontWeight={"fontWeightBold"}>Template Requirements description</Typography>
        </ListSubheader>
      }
    >
      <ListItem alignItems="flex-start">
        <Typography variant="body1">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum
          optio maxime asperiores rem veniam, doloribus unde eligendi
          laborum modi deserunt id fugit iste voluptatum repellat,
          doloremque odio ea. Consequuntur, voluptates!
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum
          optio maxime asperiores rem veniam, doloribus unde eligendi
          laborum modi deserunt id fugit iste voluptatum repellat,
          doloremque odio ea. Consequuntur, voluptates!
        </Typography>
      </ListItem>
<br />
      <ListSubheader> <Typography  variant="body1" color={"black"} fontWeight={"fontWeightBold"}>Status</Typography></ListSubheader>
      <ListItem alignItems="flex-start">
        <StatusTaskSelected/>
      </ListItem>
    </List>
  )
}
