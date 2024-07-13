import { Box, Checkbox, Typography } from "@mui/material";
import { ChangeEvent, useState } from "react";
import { Circle, CircleCheck } from "lucide-react";
import { InstallmentProps } from "../types";

interface CardProps {
  numberInstallment: number;
  price: string;
  total: string;
  bestInstallmentOption: boolean;
  onSelect: (data: InstallmentProps) => void;
}

export function Card({
  numberInstallment,
  price,
  total,
  bestInstallmentOption,
  onSelect
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
        border: `2px solid ${isChecked ? "#03D69D" : "#E5E5E5"}`,
        "@media (max-width: 420px)": {
          width: "21.88rem",
          paddingX: "0.63rem"
        }
      }}
      height={"auto"}
      paddingTop={" 1.25rem"}
      paddingX={"1.25rem"}
      paddingBottom={"1.25rem"}
      margin={"-1px"}
    >
      <Box component={"div"} display={"flex"} justifyContent={"space-between"}>
        <Box component={"div"}>
          <Typography
            color={"#4d4d4d"}
            fontSize={"1.5rem"}
            fontWeight={"800"}
            variant={"h2"}
          >
            {numberInstallment}x{" "}
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
            onClick={() => onSelect({ numberInstallment, price, total })}
          />
        </Box>
      </Box>
      {bestInstallmentOption && (
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
            "@media (max-width: 420px)": {
              paddingLeft: "0",
              fontSize: "5px"
            },
            paddingLeft: "0.63rem"
          }}
        >
          <Box
            component={"p"}
            color={"#ffffff"}
            fontSize={"1rem"}
            fontWeight={800}
            sx={{
              "@media (max-width:420px)": {
                fontSize: "0.88rem",
                paddingLeft: "1.00rem"
              }
            }}
          >
            -3% de juros:{" "}
            <Box
              component="span"
              color={"#FFFFFF"}
              fontSize={"1rem"}
              fontWeight={600}
              sx={{
                "@media (max-width:420px)": {
                  fontSize: "0.88rem"
                }
              }}
            >
              Melhor opção de parcelamento
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
}
