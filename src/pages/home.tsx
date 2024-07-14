import { useNavigate } from "react-router-dom";
import { Box, Badge, Checkbox, Typography } from "@mui/material";
import { Circle, CircleCheck } from "lucide-react";
import { useState, ChangeEvent } from "react";
import { Card } from "../components/card";
import { InstallmentProps } from "../types";
import { usePayment } from "../context/use-payment";

export function Home() {
  const [isChecked, setIsChecked] = useState(false);
  const [isCheckedInstallmentPix, setIsCheckedInstallmentPix] = useState(false);
  const { setPaymentData } = usePayment();
  const navigate = useNavigate();

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  const handleCheckboxChangeInstallmentPix = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setIsCheckedInstallmentPix(event.target.checked);
  };

  const handleCardSelect = (data: InstallmentProps) => {
    setPaymentData(data);
    setTimeout(() => {
      navigate("/payment-pix", { state: data });
    }, 1000);
  };

  return (
    <Box
      component={"section"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      sx={{ paddingX: "1.25rem", width: "100%" }}
      flexDirection={"column"}
    >
      <Box component={"div"} paddingTop={"2.5rem"}>
        <Typography
          variant="h1"
          fontWeight={"800"}
          fontSize={"1.5rem"}
          color={"#4d4d4d"}
        >
          João, como você quer pagar?
        </Typography>
      </Box>
      <Box component={"div"} paddingTop={"2rem"}>
        <Badge
          anchorOrigin={{ vertical: "top", horizontal: "left" }}
          badgeContent={"Pix"}
          sx={{
            "& .MuiBadge-badge": {
              backgroundColor: "#E5E5E5",
              color: "#4D4D4D",
              fontSize: "1.125rem",
              fontWeight: "800",
              height: "27px",
              paddingRight: "1.25rem",
              paddingLeft: "1.25rem",
              marginLeft: "56px"
            }
          }}
        >
          <Box
            component={"div"}
            width={"26.81rem"}
            borderRadius={"10px"}
            sx={{
              border: `2px solid ${isChecked ? "#03D69D" : "#E5E5E5"}`,
              "@media (max-width: 420px)": {
                width: "21.88rem",
                paddingX: "0.63rem"
              }
            }}
            height={" 8.56rem"}
            paddingTop={"1.25rem"}
            paddingX={"1.25rem"}
          >
            <Box
              component={"div"}
              display={"flex"}
              justifyContent={"space-between"}
            >
              <Box component={"div"}>
                <Typography
                  color={"#4d4d4d"}
                  fontSize={"1.5rem"}
                  fontWeight={"800"}
                  variant={"h2"}
                >
                  1x{" "}
                  <Box
                    component="span"
                    fontWeight={"600"}
                    fontSize={"1.5rem"}
                    color={"#4d4d4d"}
                  >
                    R$ 30.500,00
                  </Box>
                </Typography>
                <Box
                  component="p"
                  color={"#03d69d"}
                  fontSize={"1rem"}
                  fontWeight={"600"}
                >
                  Ganhe{" "}
                  <Box
                    component={"span"}
                    fontWeight={"800"}
                    color={"#03d69d"}
                    fontSize={"1rem"}
                  >
                    3%
                  </Box>{" "}
                  de Cashback
                </Box>
              </Box>
              <Box component={"div"}>
                <Checkbox
                  icon={<Circle color="#E5E5E5" size={" 1.625rem"} />}
                  checkedIcon={
                    <CircleCheck
                      color="#FFFFFF"
                      fill="#03D69D"
                      size={" 1.625rem"}
                    />
                  }
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                  onClick={() =>
                    handleCardSelect({
                      numberInstallment: 1,
                      price: "R$ 30.500,00",
                      total: "R$ 30.500,00"
                    })
                  }
                />
              </Box>
            </Box>
            <Box
              component={"div"}
              bgcolor={"#133A6F"}
              marginTop={"0.25rem"}
              borderRadius={"0.25rem"}
              height={"2.06rem"}
              display={"flex"}
              alignItems={"center"}
              sx={{
                clipPath:
                  "polygon(50.1% 0%, 100% 0%, 95.7% 51%, 100% 100%, 0% 100%, 0.1% 0%)",
                "@media (max-width: 420px)": { paddingLeft: "0" },
                paddingLeft: "0.63rem"
              }}
            >
              <Box
                component={"p"}
                color={"#ffffff"}
                fontSize={"1rem"}
                fontWeight={800}
              >
                🤑 R$ 300,00{" "}
                <Box
                  component="span"
                  color={"#FFFFFF"}
                  fontSize={"1rem"}
                  fontWeight={600}
                >
                  de volta no seu Pix na hora
                </Box>
              </Box>
            </Box>
          </Box>
        </Badge>
      </Box>

      <Box component={"div"} paddingTop={"2rem"}>
        <Badge
          anchorOrigin={{ vertical: "top", horizontal: "left" }}
          badgeContent={"Pix Parcelado"}
          sx={{
            "& .MuiBadge-badge": {
              backgroundColor: "#E5E5E5",
              color: "#4D4D4D",
              fontSize: "1.125rem",
              fontWeight: "800",
              paddingRight: "1.25rem",
              paddingLeft: "1.25rem",
              height: "27px",
              marginLeft: "110px"
            }
          }}
        >
          <Box
            component={"div"}
            width={"26.81rem"}
            borderRadius={" 0.63rem  0.63rem 0 0"}
            sx={{
              border: `2px solid ${isCheckedInstallmentPix ? "#03D69D" : "#E5E5E5"}`,
              "@media (max-width: 420px)": {
                width: "21.88rem",
                paddingX: "0.63rem"
              }
            }}
            height={"6.56rem"}
            paddingTop={" 1.75rem"}
            paddingX={"1.25rem"}
          >
            <Box
              component={"div"}
              display={"flex"}
              justifyContent={"space-between"}
            >
              <Box component={"div"}>
                <Typography
                  color={"#4d4d4d"}
                  fontSize={"1.5rem"}
                  fontWeight={"800"}
                  variant={"h2"}
                >
                  2x{" "}
                  <Box
                    component="span"
                    fontWeight={"600"}
                    fontSize={"1.5rem"}
                    color={"#4d4d4d"}
                  >
                    R$ 15.300,00
                  </Box>
                </Typography>
                <Box
                  component="p"
                  color={"#AFAFAF"}
                  fontSize={"1rem"}
                  fontWeight={"600"}
                >
                  Total: R$ 30.600,00
                </Box>
              </Box>
              <Box component={"div"}>
                <Checkbox
                  icon={<Circle color="#E5E5E5" size={" 1.625rem"} />}
                  checkedIcon={
                    <CircleCheck
                      color="#FFFFFF"
                      fill="#03D69D"
                      size={" 1.625rem"}
                    />
                  }
                  checked={isCheckedInstallmentPix}
                  onChange={handleCheckboxChangeInstallmentPix}
                  onClick={() =>
                    handleCardSelect({
                      numberInstallment: 2,
                      price: "R$ 15.300,00",
                      total: "R$ 30.600,00"
                    })
                  }
                />
              </Box>
            </Box>
          </Box>
        </Badge>
      </Box>

      <Box>
        <Card
          numberInstallment={3}
          price={"R$ 10.196,66"}
          total={"Total: R$ 30.620,00"}
          bestInstallmentOption={false}
          onSelect={handleCardSelect}
        />
        <Card
          numberInstallment={4}
          price={"R$ 7.725,00"}
          total={"Total: R$ 30.900,00"}
          bestInstallmentOption={true}
          onSelect={handleCardSelect}
        />
        <Card
          numberInstallment={5}
          price={"R$ 6.300,00"}
          total={"Total: R$ 31.500,00"}
          bestInstallmentOption={false}
          onSelect={handleCardSelect}
        />
        <Card
          numberInstallment={6}
          price={"R$ 5.283,33"}
          total={"Total: R$ 31.699,98"}
          bestInstallmentOption={false}
          onSelect={handleCardSelect}
        />
        <Card
          numberInstallment={7}
          price={"R$ 4.542,85"}
          total={"Total: R$ 31.800,00"}
          bestInstallmentOption={false}
          onSelect={handleCardSelect}
        />
      </Box>
    </Box>
  );
}
