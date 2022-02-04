/* library */
import React from "react";
import { BrowserRouter, Routes as Switch , Route, Navigate } from "react-router-dom";
/* component */
import ScrollToTop from "./components/common/ScrollToTop";
/* page */
import HomePage from "./pages/HomePage";
import ProductCollectionPage from "./pages/ProductCollectionPage";
import ProductPage from "./pages/ProductPage";
import LoginPage from "./pages/LoginPage";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Switch>
        <Route path="/" element={ <Navigate to = "/sneakers" /> } />
        <Route path="/sneakers" element={ <HomePage /> } />
        <Route path="/sneakers/login" element={ <LoginPage /> } />
        <Route path="/sneakers/:category" element={ <ProductCollectionPage /> } />
        <Route path="/sneakers/:category/:product" element={ <ProductPage /> } />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
