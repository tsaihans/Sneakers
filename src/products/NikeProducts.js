import React from "react";
import ProductPage from "../pages/ProductPage";

import airforce from "../image/products/nike/airforce.jpg";
import zion from "../image/products/nike/zion.jpg";
import kyrie from "../image/products/nike/kyrie.jpg";

const Product001 = () => {
    return (
        <ProductPage 
        productName={"【NIKE】不敗經典 AirForce｜白色"}
        listPrice={3600}
        salePrice={3200}
        productImg={airforce}
        />
    );
};

const Product002 = () => {
    return (
        <ProductPage 
        productName={"【NIKE】囧丸特選 Zion 1 PF"}
        listPrice={""}
        salePrice={4000}
        productImg={zion}
        />
    );
};

const Product003 = () => {
    return (
        <ProductPage 
        productName={"【NIKE】急停神器 Kyrie Infinity EP｜紫色"}
        listPrice={5000}
        salePrice={4200}
        productImg={kyrie}
        />
    );
};

const NikeProducts = ({ 
    productID
 }) => {

    const productSwitch = (productID) => {
        switch(productID) {
            case "001":
                return <Product001 />
            case "002":
                return <Product002 />
            case "003":
                return <Product003 />
        }
    }

    return(
        <div>
            {
                productSwitch(productID)
            }
        </div>
    );
};

export default NikeProducts;