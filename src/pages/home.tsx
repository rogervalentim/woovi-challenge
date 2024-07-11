import { Box, Badge, Checkbox } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Card } from "../components/card";
import { Circle, CircleCheck } from "lucide-react";
import { ChangeEvent, useState } from "react";

export function Home() {
  const [isChecked, setIsChecked] = useState(false);
  const [isCheckedInstallmentPix, setIsCheckedInstallmentPix] = useState(false);

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  const handleCheckboxChangeInstallmentPix = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setIsCheckedInstallmentPix(event.target.checked);
  };

  return (
    <Box
      component={"section"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={"column"}
      maxWidth={"100%"}
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
          anchorOrigin={{
            vertical: "top",
            horizontal: "left"
          }}
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
              border: `2px solid ${isChecked ? "#03D69D" : "#E5E5E5"}`
            }}
            padding={"1.25rem"}
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
                />
              </Box>
            </Box>
            <Box
              component={"div"}
              bgcolor={"#133A6F"}
              padding={"0.5rem"}
              marginTop={"0.25rem"}
              borderRadius={"0.25rem"}
              sx={{
                clipPath:
                  "polygon(0% 0%, 100% 0%, 95.1% 47%, 100% 100%, 50.2% 100%, 0% 100%)"
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
          anchorOrigin={{
            vertical: "top",
            horizontal: "left"
          }}
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
              border: `2px solid ${isCheckedInstallmentPix ? "#03D69D" : "#E5E5E5"}`
            }}
            padding={"1.25rem"}
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
                />
              </Box>
            </Box>
          </Box>
        </Badge>
      </Box>

      <Box>
        <Card
          numberInstallment={"3x"}
          price={"R$ 10.196,66"}
          total={"Total: R$ 30.620,00"}
          bestInstallmentOption={false}
        />
        <Card
          numberInstallment={"4x"}
          price={"R$ 7.725,00"}
          total={"Total: R$ 30.900,00"}
          bestInstallmentOption={true}
        />
        <Card
          numberInstallment={"5x"}
          price={"R$ 6.300,00"}
          total={"Total: R$ 31.500,00"}
          bestInstallmentOption={false}
        />
        <Card
          numberInstallment={"6x"}
          price={"R$ 5.283,33"}
          total={"Total: R$ 31.699,98"}
          bestInstallmentOption={false}
        />
        <Card
          numberInstallment={"7x"}
          price={"R$ 4.542,85"}
          total={"Total: R$ 31.800,00"}
          bestInstallmentOption={false}
        />
      </Box>
    </Box>
  );
}
