import React from "react";
import Header from "./Header";
import Footer from "./Footer";

// const PageHeader = styled.div`
//     ${(props) => 
//     props.fixed && 
//     css`
//         position: fixed;
//         z-index: 999;
//     `}
// `;


const ProductLayout = ( { children }) => {
    return (
        <div>
            <Header fixed = {false}/>
                { children } 
            <Footer />    
        </div>
    );
};

export default ProductLayout;