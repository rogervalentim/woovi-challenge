import { Box, Divider, Typography } from "@mui/material";

import qrCode from "../assets/qr-code.png";
import copyVector from "../assets/copy-vector.png";

import { useLocation } from "react-router-dom";
import { AccordionComponent } from "../components/accordion-component";
import { Circle } from "lucide-react";
import "./payment-pix.css";

export function PaymentPix() {
  const location = useLocation();
  const { numberInstallment, price, total } = location.state || {};

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
          <Circle color="#03D69D" size="1.00rem" />

          <Typography fontWeight="600" fontSize="1.13rem" color="#4D4D4D">
            1ª entrada no Pix
          </Typography>
        </Box>
        <Typography fontWeight="800" fontSize="1.13rem" color="#4D4D4D">
          {price}
        </Typography>
      </Box>
    );

    for (let i = 2; i <= numberInstallment; i++) {
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
            {price}
          </Typography>
        </Box>
      );
    }

    return installments;
  };

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
            {total} pelo Pix{" "}
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
            {total}
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
    </Box>
  );
}
