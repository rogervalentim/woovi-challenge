import { Box, Typography } from "@mui/material";
import { Form } from "../components/form";
import { PaymentDetails } from "../components/payment-details";
import { usePayment } from "../context/use-payment";

export function PaymentCard() {
  const { paymentData } = usePayment();
  const { numberInstallment, price, total } = paymentData || {};

  return (
    <Box
      component={"section"}
      sx={{ paddingLeft: "1.13rem", paddingRight: "1.19rem" }}
    >
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
      >
        <Box component={"div"} paddingTop={"2.5rem"}>
          <Typography
            variant="h1"
            fontWeight={"800"}
            fontSize={"1.5rem"}
            textAlign={"center"}
            color={"#4d4d4d"}
          >
            João, pague o restante em {numberInstallment - 1}x no
            <br /> cartão
          </Typography>
        </Box>
      </Box>

      <Form />

      <PaymentDetails
        numberInstallment={numberInstallment}
        total={total}
        price={price}
        paidOut={true}
      />
    </Box>
  );
}
