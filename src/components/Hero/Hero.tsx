import { Box } from "@mui/system";
import { WhatsAppButton } from "../ui/WhatsAppButton";
import heroImage from "/Bolo8.jpg";

export function Hero() {
  return (
    <Box
      component="section"
      className="hero"
      sx={{
        width: "100%",
        height: { xs: "auto", sm: "calc(100vh - 80px)" },
        minHeight: { xs: "300px", sm: "500px" },
        // backgroundImage: { xs: "none", sm: `url(${heroImage})` },
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",

        // Flexbox para posicionar o botão
        display: "flex",
        justifyContent: "center", // Centraliza na horizontal
        alignItems: "flex-end", // Alinha no final (embaixo)
        paddingBottom: "4rem", // Dá um respiro na parte de baixo
      }}
    >
      <WhatsAppButton />
    </Box>
  );
}
