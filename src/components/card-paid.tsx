import { Box, Typography } from "@mui/material";
import { CircleCheck } from "lucide-react";

export function CardPaid() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        zIndex: 9999
      }}
    >
      <Box
        p={4}
        bgcolor="#ffffff"
        borderRadius={4}
        boxShadow={3}
        maxWidth={320}
        textAlign="center"
      >
        <CircleCheck color={"#ffffff"} fill={"#03D69D"} size={"12.50rem"} />
        <Typography variant="body1" mt={2} fontWeight={"600"}>
          Parcela paga no cartão com sucesso !
        </Typography>
      </Box>
    </Box>
  );
}
