import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import Catalog from "./pages/Catalog";
import CartPage from "./pages/CartPage";
import { LanguageProvider } from "./contexts";
import { Header } from "./components/Header";
import Footer from "./components/Footer";
import styled from "styled-components";
import { NotFound } from "./pages/NotFound";
import { store, persistor } from "./store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { Audio } from "react-loader-spinner";
const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
const MainContent = styled.main`
  flex: 1;
  padding-bottom: 20px;
`;
const App = () => (
  <AppContainer>
    <Provider store={store}>
      <PersistGate loading={<Audio />} persistor={persistor}>
        <LanguageProvider>
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
        </LanguageProvider>
      </PersistGate>
    </Provider>
  </AppContainer>
);

export default App;
