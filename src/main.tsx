import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./app";
import { HashRouter } from "react-router-dom";
import { PaymentProvider } from "./context/payment-context";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PaymentProvider>
      <HashRouter>
        <App />
      </HashRouter>
    </PaymentProvider>
  </React.StrictMode>
);
