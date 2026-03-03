import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import OrderButton from "./components/OrderButton";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";

import { translations } from "./data";
import { CartProvider } from "./context/CartContext";
import CartSidebar from "./components/CartSidebar";
import CheckoutModal from "./components/CheckoutModal";
function AnimatedRoutes({ t }) {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <main className="flex-1 w-full flex flex-col">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home t={t} />} />
          <Route path="/menu" element={<Menu t={t} />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </AnimatePresence>
  );
}

export default function App() {
  const [lang, setLang] = useState("en");
  const t = translations[lang];

  return (
    <CartProvider>
      <Router>
        <div
          dir={lang === 'ar' ? 'rtl' : 'ltr'}
          className={`bg-fafello-bg text-fafello-text min-h-screen selection:bg-fafello-olive/20 relative flex flex-col ${lang === 'ar' ? 'font-cairo' : 'font-sans'}`}
        >
          <Navbar t={t} lang={lang} setLang={setLang} />
          <AnimatedRoutes t={t} />
          <Footer t={t} />
          <OrderButton t={t} />
          <CartSidebar t={t} lang={lang} />
          <CheckoutModal t={t} lang={lang} />
        </div>
      </Router>
    </CartProvider>
  );
}
