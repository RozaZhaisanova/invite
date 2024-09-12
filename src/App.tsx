import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import Catalog from "./pages/Catalog";
import CartPage from "./pages/CartPage";
import { LanguageProvider } from "./contexts";
import { Header } from "./components/Header";
import Footer from "./components/Footer";
import styled from "styled-components";
import { CartProvider } from "./contexts/CartContext";
import { NotFound } from "./pages/NotFound";
const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
const MainContent = styled.main`
  flex: 1;
`;
const App = () => (
  <AppContainer>
    <LanguageProvider>
      <CartProvider>
        <Router>
          <MainContent>
            <GlobalStyles />
            <Header />
            <Routes>
              <Route path="/" element={<Catalog />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </MainContent>
          <Footer />
        </Router>
      </CartProvider>
    </LanguageProvider>
  </AppContainer>
);

export default App;
