import React from "react";
import styled from "styled-components";
import ProductCard from "../common/utility/ProductCard";
import fury from "../../image/products/reebok/fury.jpg";
import gl300 from "../../image/products/reebok/gl300.jpg";
import slippers from "../../image/products/reebok/slippers.jpg";

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
                productImg={fury}
                name={"INSTAPUMP FURY OG 經典鞋"}
                listPrice={4850}
                salePrice={4365}
            />
            <ProductCard
                productImg={gl300}
                name={"GL 3000 經典鞋"}
                salePrice={2650}
            />
            <ProductCard
                productImg={slippers}
                name={"經典拖鞋"}
                listPrice={950}
                salePrice={459}
            />
            <ProductCard
                productImg={slippers}
                name={"經典拖鞋"}
                listPrice={950}
                salePrice={459}
            />
            <ProductCard
                productImg={fury}
                name={"INSTAPUMP FURY OG 經典鞋"}
                listPrice={4850}
                salePrice={4365}
            />
            <ProductCard
                productImg={gl300}
                name={"GL 3000 經典鞋"}
                salePrice={2650}
            />
            <ProductCard
                productImg={gl300}
                name={"GL 3000 經典鞋"}
                salePrice={2650}
            />
            <ProductCard
                productImg={slippers}
                name={"經典拖鞋"}
                listPrice={950}
                salePrice={459}
            />
            <ProductCard
                productImg={fury}
                name={"INSTAPUMP FURY OG 經典鞋"}
                listPrice={4850}
                salePrice={4365}
            />
            <ProductCard
                productImg={slippers}
                name={"經典拖鞋"}
                listPrice={950}
                salePrice={459}
            />
            <ProductCard
                productImg={fury}
                name={"INSTAPUMP FURY OG 經典鞋"}
                listPrice={4850}
                salePrice={4365}
            />
            <ProductCard
                productImg={gl300}
                name={"GL 3000 經典鞋"}
                salePrice={2650}
            />
            <ProductCard
                productImg={fury}
                name={"INSTAPUMP FURY OG 經典鞋"}
                listPrice={4850}
                salePrice={4365}
            />
            <ProductCard
                productImg={gl300}
                name={"GL 3000 經典鞋"}
                salePrice={2650}
            />
            <ProductCard
                productImg={slippers}
                name={"經典拖鞋"}
                listPrice={950}
                salePrice={459}
            />
        </ProductList>
    );
};

export default Puma;