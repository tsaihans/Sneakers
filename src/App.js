/* library */
import React from "react";
import styled from "styled-components";
import { BrowserRouter, Routes as Switch , Route, Navigate } from "react-router-dom";
import "antd/dist/antd.min.css";
/* component */
import ScrollToTop from "./components/common/ScrollToTop";
import { BackTop } from 'antd';
/* page */
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage"
import ProductCollectionPage from "./pages/ProductCollectionPage";
import ProductPage from "./pages/ProductPage";
import LoginPage from "./pages/LoginPage";

import { AuthProvider } from "./components/auth/AuthContext";
import NikeProducts from "./products/NikeProducts";

const StyleBackToTop = styled.div`
  font-size: 25px;
  text-align: center;
  background-color: rgb(158, 158, 158, 0.5);
  border-radius: 4px;
  color: rgba(0, 0, 0, 0.3);

  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
    color: rgba(0, 0, 0, 0.6);
  }
`

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Switch>
          <Route path="/" element={ <Navigate to = "/sneakers" /> } />
          <Route path="/sneakers" element={ <HomePage /> } />
          <Route path="/sneakers/about" element={ <AboutPage /> } />
          <Route path="/sneakers/login" element={ <LoginPage /> } />
          <Route path="/sneakers/nike" element={ <ProductCollectionPage currentPage={"nike"} /> } />
            <Route path="/sneakers/nike/001" element={ <NikeProducts productID={"001"} /> } />
            <Route path="/sneakers/nike/002" element={ <NikeProducts productID={"002"} /> } />
            <Route path="/sneakers/nike/003" element={ <NikeProducts productID={"003"} /> } />
          <Route path="/sneakers/adidas" element={ <ProductCollectionPage currentPage={"adidas"} /> } />
          <Route path="/sneakers/puma" element={ <ProductCollectionPage currentPage={"puma"} /> } />
          <Route path="/sneakers/underarmour" element={ <ProductCollectionPage currentPage={"underarmour"} /> } />
          <Route path="/sneakers/newbalance" element={ <ProductCollectionPage currentPage={"newbalance"} /> } />
          <Route path="/sneakers/reebok" element={ <ProductCollectionPage currentPage={"reebok"} /> } />
          <Route path="/sneakers/timberland" element={ <ProductCollectionPage currentPage={"timberland"} /> } />
          <Route path="/sneakers/converse" element={ <ProductCollectionPage currentPage={"converse"} /> } />
          <Route path="/sneakers/:category/:product" element={ <ProductPage /> } />
        </Switch>
        <BackTop>
          <StyleBackToTop><i class="fas fa-arrow-alt-to-top"></i></StyleBackToTop>
        </BackTop>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
