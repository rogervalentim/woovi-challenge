import { Box, Checkbox, Divider } from "@mui/material";
import { Circle, CircleCheck } from "lucide-react";
import { AccordionComponent } from "./accordion-component";

export function PaymentDetails() {
  return (
    <>
      <Box component={"div"} textAlign={"center"} marginTop={"1.25rem"}>
        <Box
          component={"p"}
          color={"#AFAFAF"}
          fontWeight={"600"}
          fontSize={"1.00rem"}
        >
          Prazo de pagamento:
          <br />
          <Box
            component={"span"}
            color={"#4D4D4D"}
            fontWeight={"800"}
            fontSize={"1.00rem"}
          >
            15/12/2021 - 08:17
          </Box>
        </Box>
      </Box>

      <Box component="div" marginTop="1.25rem">
        <Box
          display={"flex"}
          flexDirection={"column"}
          paddingLeft={"1.13rem"}
          paddingRight={"1.19rem"}
        >
          <Box
            component="div"
            display={"flex"}
            justifyContent={"space-between"}
          >
            <Box display={"flex"} flexDirection={"row"} gap={"0.50rem"}>
              <Checkbox
                icon={<Circle color="#E5E5E5" size="1.00rem" />}
                checkedIcon={
                  <CircleCheck color="#FFFFFF" fill="#03D69D" size="1.00rem" />
                }
                sx={{ padding: "0" }}
              />
              <Box
                component="p"
                fontWeight={"600"}
                fontSize={"1.13rem"}
                color={"#4D4D4D"}
              >
                1ª entrada no Pix
              </Box>
            </Box>
            <Box
              component="p"
              fontWeight={"800"}
              fontSize={"1.13rem"}
              color={"#4D4D4D"}
            >
              R$ 15.300,00{" "}
            </Box>
          </Box>

          <Divider
            sx={{
              borderLeft: "2px solid #E5E5E5",
              height: "1.6rem",
              width: "2px",
              marginLeft: "6px"
            }}
            flexItem
          />

          <Box
            component="div"
            display={"flex"}
            justifyContent={"space-between"}
          >
            <Box display={"flex"} flexDirection={"row"} gap={"0.50rem"}>
              <Checkbox
                icon={<Circle color="#E5E5E5" size="1.00rem" />}
                checkedIcon={
                  <CircleCheck color="#FFFFFF" fill="#03D69D" size="1.00rem" />
                }
                sx={{ padding: "0" }}
              />
              <Box
                component="p"
                fontWeight={"600"}
                fontSize={"1.13rem"}
                color={"#4D4D4D"}
              >
                2ª no cartão
              </Box>
            </Box>
            <Box
              component="p"
              fontWeight={"800"}
              fontSize={"1.13rem"}
              color={"#4D4D4D"}
            >
              R$ 15.300,00{" "}
            </Box>
          </Box>
        </Box>
      </Box>

      <Box component={"div"} marginTop={"1.25rem"}>
        <Divider color="#E5E5E5" sx={{ height: "2px" }} />
      </Box>
      <Box
        component={"div"}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        marginTop={"1.25rem"}
        padding={"1.25rem"}
      >
        <Box component={"p"} fontWeight={"600"} fontSize={"0.88rem"}>
          CET: 0,5%
        </Box>
        <Box component={"p"} fontWeight={"600"} fontSize={"1.13rem"}>
          Total: R$ 30.600,00
        </Box>
      </Box>

      <Box component={"div"} marginTop={"1.25rem"}>
        <Divider color="#E5E5E5" sx={{ height: "2px" }} />
      </Box>

      <AccordionComponent />
      <Box component={"div"}>
        <Divider color="#E5E5E5" sx={{ height: "2px" }} />
      </Box>

      <Box
        component={"p"}
        textAlign={"center"}
        color="#B2B2B2"
        marginTop={"1.25rem"}
        fontWeight={"600"}
        fontSize={"0.88rem"}
      >
        Identificador:
        <br />{" "}
        <Box
          component={"span"}
          color="#4D4D4D"
          fontWeight={"800"}
          fontSize={"0.88rem"}
        >
          2c1b951f356c4680b13ba1c9fc889c47
        </Box>
      </Box>
    </>
  );
}
