import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Button from "@mui/material/Button";

export function WhatsAppButton() {
  const phone = "";
  const message = "Olá, gostaria de fazer um pedido!";
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  return (
    <Button
      href={url}
      variant="contained"
      target="_blank"
      rel="noopener noreferrer"
      startIcon={<WhatsAppIcon />}
      sx={{
        fontSize: "1.1rem",
        padding: "12px 28px",
        fontWeight: "bold",
        color: "rosaAconchego",
        borderColor: "rosaAconchego",
        "&:hover": {
          borderColor: "#vermelhoCereja",
          color: "#vermelhoCereja",
          backgroundColor: "chocolate.main",
        },
      }}
    >
      Peça já pelo WhatsApp
    </Button>
  );
}
