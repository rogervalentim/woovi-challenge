import { createHashRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/home";
import { PaymentPix } from "./pages/payment-pix";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { PaymentCard } from "./pages/payment-card";

const router = createHashRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/payment-pix",
    element: <PaymentPix />
  },
  {
    path: "/payment-card",
    element: <PaymentCard />
  }
]);

export function App() {
  return (
    <>
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </>
  );
}
