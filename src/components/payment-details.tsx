import { Box, Divider, Typography } from "@mui/material";
import { Circle, CircleCheck } from "lucide-react";
import { AccordionComponent } from "./accordion-component";
import { InstallmentProps } from "../types";
import { usePayment } from "../context/use-payment";

export function PaymentDetails({ paidOut }: InstallmentProps) {
  const { paymentData } = usePayment();

  const renderInstallments = () => {
    const installments = [];

    installments.push(
      <Box
        key={1}
        component="div"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        className="installment"
      >
        <Box
          display="flex"
          flexDirection="row"
          gap="0.50rem"
          alignItems="center"
        >
          {paidOut ? (
            <CircleCheck fill="#03D69D" color="#FFFFFF" size=" 1.13rem" />
          ) : (
            <Circle color="#03D69D" size=" 1.13rem" />
          )}
          <Typography fontWeight="600" fontSize="1.13rem" color="#4D4D4D">
            1ª entrada no Pix
          </Typography>
        </Box>
        <Typography fontWeight="800" fontSize="1.13rem" color="#4D4D4D">
          {paymentData.price}
        </Typography>
      </Box>
    );

    for (let i = 2; i <= paymentData.numberInstallment; i++) {
      installments.push(
        <Box
          key={i}
          component="div"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          marginTop="1.25rem"
          className="installment"
        >
          <Box
            display="flex"
            flexDirection="row"
            gap="0.50rem"
            alignItems="center"
          >
            <Circle color="#E5E5E5" size="1.00rem" />
            <Typography fontWeight="600" fontSize="1.13rem" color="#4D4D4D">
              {i}ª no cartão
            </Typography>
          </Box>
          <Typography fontWeight="800" fontSize="1.13rem" color="#4D4D4D">
            {paymentData.price}
          </Typography>
        </Box>
      );
    }

    return installments;
  };

  return (
    <Box component={"section"}>
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
          component="div"
          display="flex"
          flexDirection="column"
          paddingLeft="1.13rem"
          paddingRight="1.19rem"
        >
          {renderInstallments()}
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
          {paymentData.total}
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
    </Box>
  );
}
