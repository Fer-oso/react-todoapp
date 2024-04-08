import { createTheme } from "@mui/material";
import { green, grey, red } from "@mui/material/colors";

export const colorTheme = createTheme({
  palette: {
    primary: {
      main: grey[100],
      second: grey,
    },
    secondary: {
      main: grey[200],
    },
    error: {
      main: grey[50],
    },

    listItem:{
      approved: green[100],
      denied: red[100]
    }
  },
});
