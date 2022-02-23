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


const DefaultLayout = ( { children }) => {
    return (
        <div>
            <Header fixed = {true}/>
                { children } 
            <Footer />    
        </div>
    );
};

export default DefaultLayout;