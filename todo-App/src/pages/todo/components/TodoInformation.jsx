import { Container, Divider, Grid, List, Typography } from '@mui/material'
import React from 'react'
import { Comments } from './Comments'
import { Title } from './Title';

export const TodoInformation = () => {
  return (
    <>
      <Title
        variant={"h4"}
        title={"Quick view of week 1"}
        textAlign={"center"}
      />

      <Grid>
        <Divider>comments</Divider>
        <List
          sx={{
            width: "100%",
            bgcolor: "main.error",
            position: "relative",
            overflow: "auto",
            maxHeight: { xs: 500, sm: 300, md: 300, lg: 400, xl: 370 },
            "& ul": { padding: 0 },
          }}
          subheader={<li />}
        >
          <Comments />
        </List>
      </Grid>
    </>
  );
}
