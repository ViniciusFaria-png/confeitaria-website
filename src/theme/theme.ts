import { createTheme } from "@mui/material/styles";

const rosaAconchego = "#DEB4B7";
const vermelhoCereja = "#E04A4F";
const chocolate = "#5D4037";
const creme = "#F8F4F0";
const grafiteSuave = "#414141";

const theme = createTheme({
  palette: {
    primary: {
      main: vermelhoCereja,
    },
    secondary: {
      main: rosaAconchego,
    },
    background: {
      default: creme,
      paper: "#FFFFFF",
    },
    text: {
      primary: grafiteSuave,
      secondary: "#757575",
    },
    chocolate: {
      main: chocolate,
    },
  },
  typography: {
    fontFamily: '"system-ui", "Avenir", "Helvetica", "Arial", sans-serif',
  },
});

export default theme;
