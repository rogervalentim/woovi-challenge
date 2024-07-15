import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography
} from "@mui/material";
import { ChevronUp } from "lucide-react";

export function AccordionComponent() {
  return (
    <Accordion sx={{ boxShadow: "none", padding: "1.25rem" }}>
      <AccordionSummary
        expandIcon={<ChevronUp color="#4d4d4d" />}
        aria-controls="panel1-content"
        id="panel1-header"
        sx={{
          paddingLeft: "0px",
          paddingRight: "0px"
        }}
      >
        <Typography fontWeight={"800"} fontSize={"1.00rem"} color={"#4D4D4D"}>
          Como funciona?
        </Typography>
      </AccordionSummary>
      <AccordionDetails color={"#AFAFAF"}>
        o pagamento de uma entrada através do Pix. Ele exibe um código QR para
        facilitar o pagamento, oferecendo uma maneira rápida e segura de
        completar a transação. Após o pagamento ser efetuado, o usuário pode ser
        redirecionado para o pagamento parcelado com cartão, se aplicável
      </AccordionDetails>
    </Accordion>
  );
}
