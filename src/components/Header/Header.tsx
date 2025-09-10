import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";

export function Header() {
  return (
    <Box
      component="header"
      sx={{ backgroundColor: "sua-cor-de-fundo-aqui", padding: "1rem 0" }}
    >
      <Typography
        variant="h1"
        component="h1"
        align="center"
        sx={{
          margin: 0,
          fontSize: "2.5rem",
        }}
      >
        Que seja Doce!
      </Typography>
    </Box>
  );
}
