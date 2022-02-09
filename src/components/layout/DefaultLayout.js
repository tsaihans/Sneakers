import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";


const DefaultLayout = ( { children }) => {
    return (
        <div>
            <Header> this is header </Header>
                { children } 
            <Footer />    
        </div>
    );
};

export default DefaultLayout;