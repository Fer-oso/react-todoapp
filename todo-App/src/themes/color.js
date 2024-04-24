import { createTheme } from "@mui/material";
import { blue, blueGrey, green, grey, orange, red, yellow } from "@mui/material/colors";

export const colorTheme = createTheme({
  palette: {
    primary: {
      main: grey[100],
      second: grey,
    },
    secondary: {
      main: grey[600],
    },
    error: {
      main: red[900],
    },

    listItem: {
      approved: green[100],
      denied: red[100],
      finished:green[200],
      inProcess:blue[200],
      pending: yellow[200] ,
      paused:red[200],
      default: grey[50]
    },
  },
});
