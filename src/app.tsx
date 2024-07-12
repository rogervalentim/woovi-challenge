import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/home";
import { PaymentPix } from "./pages/payment-pix";
import { Header } from "./components/header";
import { Footer } from "./components/footer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/payment-pix",
    element: <PaymentPix />
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
