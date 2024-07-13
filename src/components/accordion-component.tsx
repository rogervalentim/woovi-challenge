import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography
} from "@mui/material";
import { ChevronUp } from "lucide-react";

export function AccordionComponent() {
  return (
    <Accordion defaultExpanded sx={{ boxShadow: "none", padding: "1.25rem" }}>
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
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea nemo nihil
        numquam ipsa blanditiis, et officia cumque iste quasi! Fugiat unde at
        nemo accusamus vel modi magni possimus quis placeat?
      </AccordionDetails>
    </Accordion>
  );
}
