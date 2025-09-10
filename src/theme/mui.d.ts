import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface PaletteOptions {
    chocolate?: {
      main?: string;
      light?: string;
      dark?: string;
      contrastText?: string;
    };
  }

  interface Palette {
    chocolate: {
      main: string;
      light?: string;
      dark?: string;
      contrastText?: string;
    };
  }
}
