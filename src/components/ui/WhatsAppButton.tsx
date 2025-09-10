import Button from "@mui/material/Button";

export function WhatsAppButton() {
  const phone = "";
  const message = "Olá, gostaria de fazer um pedido!";
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  return (
    <Button
      href={url}
      variant="outlined"
      target="_blank"
      rel="noopener noreferrer"
      sx={{
        color: "rosaAconchego",
        borderColor: "rosaAconchego",
        "&:hover": {
          borderColor: "#vermelhoCereja",
          color: "chocolate.main",
          backgroundColor: "#vermelhoCereja",
        },
      }}
    >
      Peça já pelo WhatsApp
    </Button>
  );
}
