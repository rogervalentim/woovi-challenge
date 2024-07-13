import {
  Box,
  Typography,
  TextField,
  FormControl,
  MenuItem
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { PaymentDetails } from "../components/payment-details";
import { InstallmentProps } from "../types";

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

const schema = yup.object().shape({
  fullName: yup.string().required("Nome completo é obrigatório"),
  cpf: yup.string().required("CPF é obrigatório"),
  cardNumber: yup.string().required("Número do cartão é obrigatório"),
  expiry: yup.string().required("Vencimento é obrigatório"),
  cvv: yup.string().required("CVV é obrigatório"),
  installments: yup.string().required("Parcelas é obrigatório")
});

export function PaymentCard() {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data: InstallmentProps) => {
    console.log(data);
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
        onSubmit={handleSubmit(onSubmit)}
      >
        <FormControl sx={{ width: "100%" }}>
          <Controller
            name="fullName"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Nome completo"
                variant="outlined"
                fullWidth
                error={!!errors.fullName}
                helperText={errors.fullName ? errors.fullName.message : ""}
                sx={{
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#03D69D"
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      border: "2px #E5E5E5 solid"
                    },
                    "&:hover fieldset": {
                      borderColor: "transparent"
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#03D69D"
                    },
                    borderRadius: "0.50rem",
                    padding: "1.25rem",
                    width: "100%",
                    height: "4.06rem"
                  }
                }}
              />
            )}
          />
        </FormControl>

        <FormControl sx={{ width: "100%" }}>
          <Controller
            name="cpf"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="CPF"
                variant="outlined"
                fullWidth
                error={!!errors.cpf}
                helperText={errors.cpf ? errors.cpf.message : ""}
                sx={{
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#03D69D"
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      border: "2px #E5E5E5 solid"
                    },
                    "&:hover fieldset": {
                      borderColor: "transparent"
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#03D69D"
                    },
                    borderRadius: "0.50rem",
                    padding: "1.25rem",
                    width: "100%",
                    height: "4.06rem"
                  }
                }}
              />
            )}
          />
        </FormControl>

        <FormControl sx={{ width: "100%" }}>
          <Controller
            name="cardNumber"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Número do cartão"
                variant="outlined"
                fullWidth
                error={!!errors.cardNumber}
                helperText={errors.cardNumber ? errors.cardNumber.message : ""}
                sx={{
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#03D69D"
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      border: "2px #E5E5E5 solid"
                    },
                    "&:hover fieldset": {
                      borderColor: "transparent"
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#03D69D"
                    },
                    borderRadius: "0.50rem",
                    padding: "1.25rem",
                    width: "100%",
                    height: "4.06rem"
                  }
                }}
              />
            )}
          />
        </FormControl>

        <Box sx={{ width: "100%", display: " flex", gap: " 1.38rem" }}>
          <FormControl sx={{ width: "100%" }}>
            <Controller
              name="expiry"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Vencimento"
                  variant="outlined"
                  fullWidth
                  error={!!errors.expiry}
                  helperText={errors.expiry ? errors.expiry.message : ""}
                  sx={{
                    "& .MuiInputLabel-root.Mui-focused": {
                      color: "#03D69D"
                    },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        border: "2px #E5E5E5 solid"
                      },
                      "&:hover fieldset": {
                        borderColor: "transparent"
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#03D69D"
                      },
                      borderRadius: "0.50rem",
                      padding: "1.25rem",
                      width: "100%",
                      height: "4.06rem"
                    }
                  }}
                />
              )}
            />
          </FormControl>
          <FormControl sx={{ width: "100%" }}>
            <Controller
              name="cvv"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="CVV"
                  variant="outlined"
                  fullWidth
                  error={!!errors.cvv}
                  helperText={errors.cvv ? errors.cvv.message : ""}
                  sx={{
                    "& .MuiInputLabel-root.Mui-focused": {
                      color: "#03D69D"
                    },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        border: "2px #E5E5E5 solid"
                      },
                      "&:hover fieldset": {
                        borderColor: "transparent"
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#03D69D"
                      },
                      borderRadius: "0.50rem",
                      padding: "1.25rem",
                      width: "100%",
                      height: "4.06rem"
                    }
                  }}
                />
              )}
            />
          </FormControl>
        </Box>

        <FormControl sx={{ width: "100%" }}>
          <Controller
            name="installments"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                id="outlined-select-currency"
                select
                label="Parcelas"
                defaultValue="1x de R$ 15.300,00"
                error={!!errors.installments}
                helperText={
                  errors.installments ? errors.installments.message : ""
                }
                sx={{
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#03D69D"
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      border: "2px #E5E5E5 solid"
                    },
                    "&:hover fieldset": {
                      borderColor: "transparent"
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#03D69D"
                    },
                    borderRadius: "0.50rem",
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
            )}
          />
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
            type="submit"
            sx={{
              "&:hover": {
                bgcolor: "#114e97"
              }
            }}
          >
            Pagar
          </Box>
        </FormControl>
      </Box>

      <PaymentDetails paidOut={true} />
    </Box>
  );
}
