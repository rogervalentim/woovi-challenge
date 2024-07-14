import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import { PaymentPix } from "./pages/payment-pix";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { PaymentCard } from "./pages/payment-card";
import { ScrollToTop } from "./components/scroll-top";

export function App() {
  return (
    <>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/payment-pix"} element={<PaymentPix />} />
        <Route path={"/payment-card"} element={<PaymentCard />} />
      </Routes>

      <Footer />
    </>
  );
}
