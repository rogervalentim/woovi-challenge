import {
  Box,
  Typography,
  TextField,
  FormControl,
  MenuItem
} from "@mui/material";
import { PaymentDetails } from "../components/payment-details";

const currencies = [
  {
    value: "USD",
    label: "1x de R$ 15.300,00"
  },
  {
    value: "EUR",
    label: "€"
  },
  {
    value: "BTC",
    label: "฿"
  },
  {
    value: "JPY",
    label: "¥"
  }
];

export function PaymentCard() {
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
            João, pague o restante em 1x no
            <br /> cartão
          </Typography>
        </Box>
      </Box>

      <Box
        component={"form"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
        gap={"1.75rem"}
        marginTop={"1.75rem"}
        width="100%"
      >
        <FormControl sx={{ width: "100%" }}>
          <TextField
            label="Nome completo"
            variant="outlined"
            fullWidth
            sx={{
              "& .MuiInputLabel-root.Mui-focused": {
                color: "#03D69D"
              },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "transparent"
                },
                "&:hover fieldset": {
                  borderColor: "transparent"
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#03D69D"
                },
                borderRadius: "0.50rem",
                border: "2px #E5E5E5 solid",
                padding: "1.25rem",
                width: "100%",
                height: "4.06rem"
              }
            }}
          />
        </FormControl>

        <FormControl sx={{ width: "100%" }}>
          <TextField
            label="CPF"
            variant="outlined"
            fullWidth
            sx={{
              "& .MuiInputLabel-root.Mui-focused": {
                color: "#03D69D"
              },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "transparent"
                },
                "&:hover fieldset": {
                  borderColor: "transparent"
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#03D69D"
                },
                borderRadius: "0.50rem",
                border: "2px #E5E5E5 solid",
                padding: "1.25rem",
                width: "100%",
                height: "4.06rem"
              }
            }}
          />
        </FormControl>

        <FormControl sx={{ width: "100%" }}>
          <TextField
            label="Número do cartão"
            variant="outlined"
            fullWidth
            sx={{
              "& .MuiInputLabel-root.Mui-focused": {
                color: "#03D69D"
              },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "transparent"
                },
                "&:hover fieldset": {
                  borderColor: "transparent"
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#03D69D"
                },
                borderRadius: "0.50rem",
                border: "2px #E5E5E5 solid",
                padding: "1.25rem",
                width: "100%",
                height: "4.06rem"
              }
            }}
          />
        </FormControl>

        <Box sx={{ width: "100%", display: " flex", gap: " 1.38rem" }}>
          <FormControl sx={{ width: "100%" }}>
            <TextField
              label="Vencimento"
              variant="outlined"
              fullWidth
              sx={{
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "#03D69D"
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "transparent"
                  },
                  "&:hover fieldset": {
                    borderColor: "transparent"
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#03D69D"
                  },
                  borderRadius: "0.50rem",
                  border: "2px #E5E5E5 solid",
                  padding: "1.25rem",
                  width: "100%",
                  height: "4.06rem"
                }
              }}
            />
          </FormControl>
          <FormControl sx={{ width: "100%" }}>
            <TextField
              label="CVV"
              variant="outlined"
              fullWidth
              sx={{
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "#03D69D"
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "transparent"
                  },
                  "&:hover fieldset": {
                    borderColor: "transparent"
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#03D69D"
                  },
                  borderRadius: "0.50rem",
                  border: "2px #E5E5E5 solid",
                  padding: "1.25rem",
                  width: "100%",
                  height: "4.06rem"
                }
              }}
            />
          </FormControl>
        </Box>

        <FormControl sx={{ width: "100%" }}>
          <TextField
            id="outlined-select-currency"
            select
            label="Parcelas"
            defaultValue="1x de R$ 15.300,00"
            sx={{
              "& .MuiInputLabel-root.Mui-focused": {
                color: "#03D69D"
              },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "transparent"
                },
                "&:hover fieldset": {
                  borderColor: "transparent"
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#03D69D"
                },
                borderRadius: "0.50rem",
                border: "2px #E5E5E5 solid",
                padding: "1.25rem",
                width: "100%",
                height: "4.06rem"
              }
            }}
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </FormControl>

        <FormControl sx={{ width: "100%" }}>
          <Box
            component={"button"}
            bgcolor={"#133A6F"}
            borderRadius={" 0.50rem"}
            padding={" 0.44rem"}
            color={"#FFFFFF"}
            fontWeight={"600"}
            fontSize={"1.13rem"}
            border={"none"}
          >
            Pagar
          </Box>
        </FormControl>
      </Box>

      <PaymentDetails paidOut={true} />
    </Box>
  );
}
