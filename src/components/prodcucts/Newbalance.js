import React from "react";
import styled from "styled-components";
import ProductCard from "../common/utility/ProductCard";
import N237 from "../../image/products/newbalance/N237.webp"
import N5740 from "../../image/products/newbalance/N5740.webp";
import prism from "../../image/products/newbalance/prism.webp";

const ProductList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-top: 10px;
`

const Puma = () => {
    return (
        <ProductList>
            <ProductCard
                productImg={N237}
                name={"237"}
                listPrice={""}
                salePrice={2680}
            />
            <ProductCard
                productImg={N5740}
                name={"57/40"}
                listPrice={3880}
                salePrice={2716}
            />
            <ProductCard
                productImg={prism}
                name={"FuelCell Prism"}
                listPrice={3680}
                salePrice={2576}
            />
            <ProductCard
                productImg={prism}
                name={"FuelCell Prism"}
                listPrice={3680}
                salePrice={2576}
            />
            <ProductCard
                productImg={N237}
                name={"237"}
                listPrice={""}
                salePrice={2680}
            />            
            <ProductCard
                productImg={N5740}
                name={"57/40"}
                listPrice={3880}
                salePrice={2716}
            />

            <ProductCard
                productImg={N5740}
                name={"57/40"}
                listPrice={3880}
                salePrice={2716}
            />
            <ProductCard
                productImg={prism}
                name={"FuelCell Prism"}
                listPrice={3680}
                salePrice={2576}
            />
            <ProductCard
                productImg={N237}
                name={"237"}
                listPrice={""}
                salePrice={2680}
            />             
            <ProductCard
                productImg={prism}
                name={"FuelCell Prism"}
                listPrice={3680}
                salePrice={2576}
            />
            <ProductCard
                productImg={N237}
                name={"237"}
                listPrice={""}
                salePrice={2680}
            />            
            <ProductCard
                productImg={N5740}
                name={"57/40"}
                listPrice={3880}
                salePrice={2716}
            />

            <ProductCard
                productImg={N237}
                name={"237"}
                listPrice={""}
                salePrice={2680}
            />
            <ProductCard
                productImg={N5740}
                name={"57/40"}
                listPrice={3880}
                salePrice={2716}
            />
            <ProductCard
                productImg={prism}
                name={"FuelCell Prism"}
                listPrice={3680}
                salePrice={2576}
            />
        </ProductList>
    );
};

export default Puma;