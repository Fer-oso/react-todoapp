import { Box, Grid } from '@mui/material'

export const TodoLayout = ({children}) => {
  return (
   <Grid >
    <Box component='main' position="relative" >
    {children}
    </Box>
   </Grid>
  )
}
