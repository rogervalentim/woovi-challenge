import { Box, Typography } from "@mui/material";

import qrCode from "../assets/qr-code.png";
import copyVector from "../assets/copy-vector.png";

import { PaymentDetails } from "../components/payment-details";

export function PaymentPix() {
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
            João, pague a entrada de <br />
            R$ 15.300,00 pelo Pix{" "}
          </Typography>
        </Box>

        <Box
          component={"div"}
          width={"21.88rem"}
          height={"21.88rem"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          marginTop={"1.25rem"}
          sx={{ border: "2px solid #03D69D" }}
          borderRadius={"0.63rem"}
        >
          <Box
            component="img"
            src={qrCode}
            alt="qr code image"
            width={" 20.75rem"}
            height={" 20.75rem"}
          />
        </Box>

        <Box
          component={"button"}
          type="button"
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          gap={"0.63rem"}
          width={" 19.38rem"}
          height={"2.44rem"}
          border={"none"}
          marginTop={" 1.25rem"}
          borderRadius={" 0.50rem"}
          bgcolor="#133A6F"
          fontSize={"1.13rem"}
          color="#ffffff"
          sx={{
            "&:hover": {
              bgcolor: "#114e97"
            },
            cursor: "pointer"
          }}
        >
          Clique para copiar QR CODE
          <Box
            component={"img"}
            src={copyVector}
            alt="copy vector"
            width={"1.19rem"}
            height={" 1.38rem"}
          />
        </Box>
      </Box>

      <PaymentDetails paidOut={true} />
    </Box>
  );
}
