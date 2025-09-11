import Typography from "@mui/material/Typography";
import { Box, Grid } from "@mui/system";
import logoImage from "/logoLogo.png";

export function About() {
  return (
    <Box sx={{ flexGrow: 1, padding: 4 }}>
      <Grid
        container
        spacing={0.5}
        alignItems="center"
        justifyContent={"center"}
      >
        <Grid size={2}>
          <Box
            component="img"
            src={logoImage}
            alt="Logo Que Seja Doce!"
            sx={{
              width: "100%",
              maxWidth: "300px",
              display: "block",
              margin: "0 auto 0 0", // garante que fique na esquerda
            }}
          />
        </Grid>
        <Grid size={6}>
          <Typography variant="h4" component="h2" gutterBottom>
            Quem Somos
          </Typography>
          <Box sx={{ textAlign: "left" }}>
            <Typography variant="body1" component="p">
              Bem-vindo à nossa confeitaria, um lugar onde cada doce conta uma
              história de paixão e tradição. Nascemos do sonho de compartilhar
              receitas de família, aprimoradas com um toque de criatividade e os
              melhores ingredientes.
            </Typography>
            <Typography variant="body1" paragraph>
              Nosso compromisso é com a qualidade e o sabor autêntico. Desde os
              bolos mais elaborados até os simples biscoitos, tudo é feito
              artesanalmente, com carinho e dedicação para adoçar os seus
              momentos mais especiais.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
