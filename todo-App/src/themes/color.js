import { createTheme } from "@mui/material";
import { blue, green, grey, red, yellow } from "@mui/material/colors";
import '@fontsource-variable/open-sans';

export const colorTheme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: grey[50],
      second: green[50],
    },
    secondary: {
      main: grey[600],
    },
    error: {
      main: red[900],
    },

    listItem: {
      approved: green[100],
      refused: red[100],
      finished:green[200],
      inProcess:blue[200],
      pending: yellow[200] ,
      paused:red[200],
      default: grey[50]
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
      '"Open Sans"'
    ].join(','),
  },
});
