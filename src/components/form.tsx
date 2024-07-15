import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Box, FormControl, MenuItem, TextField } from "@mui/material";
import { ChangeEvent, useState } from "react";
import { usePayment } from "../context/use-payment";
import { useNavigate } from "react-router-dom";
import { CardPaid } from "./card-paid";

interface FormData {
  fullName: string;
  cpf: string;
  cardNumber: string;
  expiry: string;
  cvv: string;
  installments: string;
}

export function Form() {
  const [alert, setAlert] = useState(false);

  const navigate = useNavigate();
  const { paymentData } = usePayment();

  const schema = yup.object().shape({
    fullName: yup.string().required("Nome completo é obrigatório"),
    cpf: yup.string().required("CPF é obrigatório"),
    cardNumber: yup.string().required("Número do cartão é obrigatório"),
    expiry: yup.string().required("Vencimento é obrigatório"),
    cvv: yup.string().required("CVV é obrigatório"),
    installments: yup.string().required("Parcelas é obrigatório")
  });

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = async (data: FormData) => {
    try {
      const selectedInstallments = parseInt(data.installments);
      const paymentPromises = [];

      for (let i = 0; i < selectedInstallments; i++) {
        paymentPromises.push(fakePaymentAPI());
        setAlert(true);
      }

      await Promise.all(paymentPromises);

      navigate("/");
      console.log(data);
    } catch (error) {
      console.error("Erro ao processar pagamento:", error);
    }
  };

  const fakePaymentAPI = async () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const random = Math.random();
        if (random < 0.8) {
          resolve("Pagamento aprovado");
        } else {
          reject("Erro ao processar o pagamento");
        }
      }, 3500);
    });
  };

  const handleCpfChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const value = event.target.value.replace(/\D/g, "").slice(0, 11);
    const formattedValue = value
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})/, "$1-$2")
      .replace(/(-\d{2})\d+?$/, "$1");
    event.target.value = formattedValue;
  };

  const handleCardNumberChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const value = event.target.value.replace(/\D/g, "").slice(0, 16);
    const formattedValue = value
      .replace(/(\d{4})(\d)/, "$1 $2")
      .replace(/(\d{4})(\d)/, "$1 $2")
      .replace(/(\d{4})(\d)/, "$1 $2")
      .replace(/(\d{4})(\d{1,4})/, "$1 $2");
    event.target.value = formattedValue;
  };

  const installmentOptions = [
    {
      value: `${paymentData.numberInstallment - 1}`,
      label: `${paymentData.numberInstallment - 1}x de R$ ${paymentData.price}`
    }
  ];

  return (
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
              onChange={(e) => {
                handleCpfChange(e);
                field.onChange(e);
              }}
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
              onChange={(e) => {
                handleCardNumberChange(e);
                field.onChange(e);
              }}
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
                inputProps={{
                  maxLength: 3
                }}
                onChange={(e) => {
                  handleCardNumberChange(e);
                  field.onChange(e);
                }}
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
              defaultValue={`${paymentData.numberInstallment}x de R$ ${paymentData.price}`}
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
              <MenuItem
                key={installmentOptions[0].value}
                value={installmentOptions[0].value}
              >
                {installmentOptions[0].label}
              </MenuItem>
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
          onClick={handleSubmit(onSubmit)}
          sx={{
            "&:hover": {
              bgcolor: "#114e97"
            }
          }}
        >
          Pagar
        </Box>
      </FormControl>
      {alert && <CardPaid />}
    </Box>
  );
}
