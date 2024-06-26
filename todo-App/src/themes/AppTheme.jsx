import { CssBaseline, ThemeProvider } from '@mui/material'
import React from 'react'
import { colorTheme } from './color'

export const AppTheme = ({children}) => {
  return (
   <ThemeProvider theme={colorTheme}>
    <CssBaseline/>
    {children}
   </ThemeProvider>
  )
}
