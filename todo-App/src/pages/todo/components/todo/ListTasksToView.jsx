import { CancelOutlined, Check, CommentOutlined, RemoveRedEyeOutlined } from '@mui/icons-material';
import { ButtonGroup, Checkbox, IconButton, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import React from 'react'

export const ListTasksToView = ({value}) => {

 const [checked, setChecked] = React.useState([0]);

 const handleToggle = (value) => () => {
   const currentIndex = checked.indexOf(value);
   const newChecked = [...checked];

   if (currentIndex === -1) {
     newChecked.push(value);
   } else {
     newChecked.splice(currentIndex, 1);
   }

   setChecked(newChecked);
 };


  return (
    <ListItem
      key={value.id}
      secondaryAction={
        <>
          <ButtonGroup variant="text" disableElevation>
            <IconButton edge="end" aria-label="comments">
              <Check />
            </IconButton>

            <IconButton edge="end" aria-label="comments">
              <CancelOutlined />
            </IconButton>

            <IconButton edge="end" aria-label="comments">
              <RemoveRedEyeOutlined />
            </IconButton>

            <IconButton edge="end" aria-label="comments">
              <CommentOutlined />
            </IconButton>
          </ButtonGroup>
        </>
      }
      disablePadding
    >
      <ListItemButton role={undefined} dense>
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={checked.indexOf(value.id) !== -1}
            tabIndex={-1}
            disableRipple
            inputProps={{ "aria-labelledby": value.id }}
            color="success"
            onClick={handleToggle(value.id)}
          />
        </ListItemIcon>
        <ListItemText id={value.id} primary={value.title} />
      </ListItemButton>
    </ListItem>
  );
}
