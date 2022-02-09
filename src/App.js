/* library */
import React from "react";
import styled from "styled-components";
import { BrowserRouter, Routes as Switch , Route, Navigate } from "react-router-dom";
import "antd/dist/antd.min.css";
/* component */
import ScrollToTop from "./components/common/utility/ScrollToTop";
import { BackTop } from 'antd';
/* page */
import HomePage from "./pages/HomePage";
import ProductCollectionPage from "./pages/ProductCollectionPage";
import ProductPage from "./pages/ProductPage";
import LoginPage from "./pages/LoginPage";

const StyleBackTop = styled.div`
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
    <BrowserRouter>
      <ScrollToTop />
      <Switch>
        <Route path="/" element={ <Navigate to = "/sneakers" /> } />
        <Route path="/sneakers" element={ <HomePage /> } />
        <Route path="/sneakers/login" element={ <LoginPage /> } />
        <Route path="/sneakers/:category" element={ <ProductCollectionPage /> } />
        <Route path="/sneakers/:category/:product" element={ <ProductPage /> } />
      </Switch>
      <BackTop>
        <StyleBackTop><i class="fas fa-arrow-alt-to-top"></i></StyleBackTop>
      </BackTop>
    </BrowserRouter>
  );
};

export default App;
