import { useContext } from "react";
import { PaymentContext } from "./payment-context";

export const usePayment = () => useContext(PaymentContext);
