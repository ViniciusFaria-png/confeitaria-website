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
        color: "#E91E63",
        borderColor: "#E91E63",
        "&:hover": {
          borderColor: "#C2185B",
          color: "#fff",
          backgroundColor: "#E91E63", // Um fundo rosa bem clarinho
        },
      }}
    >
      Peça já pelo WhatsApp
    </Button>
  );
}
