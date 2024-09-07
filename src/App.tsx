import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import Catalog from "./pages/Catalog";
import CartPage from "./pages/CartPage";
import { LanguageProvider } from "./contexts";
import { Header } from "./components/Header";
import Footer from "./components/Footer";

const App = () => (
  <LanguageProvider>
    <Router>
      <GlobalStyles />
      <Header />
      <Routes>
        <Route path="/" element={<Catalog />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
      <Footer />
    </Router>
  </LanguageProvider>
);

export default App;
