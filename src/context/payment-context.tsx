import React, { createContext, ReactNode, useState } from "react";
import { InstallmentProps } from "../types";

type IPayment = {
  paymentData: InstallmentProps;
  setPaymentData: React.Dispatch<React.SetStateAction<InstallmentProps>>;
};

export const PaymentContext = createContext<IPayment>({} as IPayment);

export const PaymentProvider = ({ children }: { children: ReactNode }) => {
  const [paymentData, setPaymentData] = useState<InstallmentProps>(
    {} as InstallmentProps
  );

  return (
    <PaymentContext.Provider value={{ paymentData, setPaymentData }}>
      {children}
    </PaymentContext.Provider>
  );
};
