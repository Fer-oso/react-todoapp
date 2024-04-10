import { Box, Grid, Toolbar } from '@mui/material'
import React from 'react'
import { NavBar } from '../components/NavBar'

export const TodoLayout = ({children}) => {
  return (
   <Grid >
    <Box component='main' position="relative">
   
    {children}
    </Box>
   </Grid>
  )
}
