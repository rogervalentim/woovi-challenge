import { Box, Checkbox, Typography } from "@mui/material";
import { ChangeEvent, useState } from "react";
import { Circle, CircleCheck } from "lucide-react";

interface CardProps {
  numberInstallment: string;
  price: string;
  total: string;
  bestInstallmentOption: boolean;
}

export function Card({
  numberInstallment,
  price,
  total,
  bestInstallmentOption
}: CardProps) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
    console.log(event);
  };

  return (
    <Box
      component={"div"}
      width={"26.81rem"}
      sx={{
        borderWidth: `${isChecked ? "2px 2px 2px 2px" : "0 2px 2px 2px"}`,
        borderStyle: "solid",
        borderColor: `${isChecked ? "#03D69D" : "#E5E5E5"}`
      }}
      padding={"1.25rem"}
    >
      <Box component={"div"} display={"flex"} justifyContent={"space-between"}>
        <Box component={"div"}>
          <Typography
            color={"#4d4d4d"}
            fontSize={"1.5rem"}
            fontWeight={"800"}
            variant={"h2"}
          >
            {numberInstallment}{" "}
            <Box
              component="span"
              fontWeight={"600"}
              fontSize={"1.5rem"}
              color={"#4d4d4d"}
            >
              {price}
            </Box>
          </Typography>
          <Box
            component="p"
            color={"#AFAFAF"}
            fontSize={"1rem"}
            fontWeight={"600"}
          >
            {total}
          </Box>
        </Box>
        <Box component={"div"}>
          <Checkbox
            icon={<Circle color="#E5E5E5" size={" 1.625rem"} />}
            checkedIcon={
              <CircleCheck color="#FFFFFF" fill="#03D69D" size={" 1.625rem"} />
            }
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
        </Box>
      </Box>
      {bestInstallmentOption && (
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
            -3% de juros:{" "}
            <Box
              component="span"
              color={"#FFFFFF"}
              fontSize={"1rem"}
              fontWeight={600}
            >
              Melhor opção de parcelamento
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
}
