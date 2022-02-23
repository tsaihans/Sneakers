import React from "react";
import styled from "styled-components";
import ProductCard from "../common/utility/ProductCard";
import airforce from "../../image/products/nike/airforce.jpg"
import zion from "../../image/products/nike/zion.jpg"
import kyrie from "../../image/products/nike/kyrie.jpg"

const ProductList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-top: 10px;
`

const Nike = () => {
    return (
        <ProductList>
            <ProductCard
                productImg={airforce}
                name={"Airforce"}
                listPrice={3600}
                salePrice={3200}
                direct={"/sneakers/nike/001"}
            />
            <ProductCard
                productImg={zion}
                name={"Zion 1 PF"}
                salePrice={4000}
                direct={"/sneakers/nike/002"}
            />
            <ProductCard
                productImg={kyrie}
                name={"Kyrie Infinity EP"}
                listPrice={5000}
                salePrice={4200}
                direct={"/sneakers/nike/003"}
            />
            <ProductCard
                productImg={kyrie}
                name={"Kyrie Infinity EP"}
                listPrice={5000}
                salePrice={4200}
                direct={"/sneakers/nike/003"}
            />
            <ProductCard
                productImg={airforce}
                name={"Airforce"}
                listPrice={3600}
                salePrice={3200}
                direct={"/sneakers/nike/001"}
            />
            <ProductCard
                productImg={zion}
                name={"Zion 1 PF"}
                salePrice={4000}
                direct={"/sneakers/nike/002"}
            />
            <ProductCard
                productImg={zion}
                name={"Zion 1 PF"}
                salePrice={4000}
                direct={"/sneakers/nike/002"}
            />
            <ProductCard
                productImg={kyrie}
                name={"Kyrie Infinity EP"}
                listPrice={5000}
                salePrice={4200}
                direct={"/sneakers/nike/003"}
            />
            <ProductCard
                productImg={airforce}
                name={"Airforce"}
                listPrice={3600}
                salePrice={3200}
                direct={"/sneakers/nike/001"}
            />
            <ProductCard
                productImg={kyrie}
                name={"Kyrie Infinity EP"}
                listPrice={5000}
                salePrice={4200}
                direct={"/sneakers/nike/003"}
            />
            <ProductCard
                productImg={airforce}
                name={"Airforce"}
                listPrice={3600}
                salePrice={3200}
                direct={"/sneakers/nike/001"}
            />
            <ProductCard
                productImg={zion}
                name={"Zion 1 PF"}
                salePrice={4000}
                direct={"/sneakers/nike/002"}
            />
            <ProductCard
                productImg={airforce}
                name={"Airforce"}
                listPrice={3600}
                salePrice={3200}
                direct={"/sneakers/nike/001"}
            />
            <ProductCard
                productImg={zion}
                name={"Zion 1 PF"}
                salePrice={4000}
                direct={"/sneakers/nike/002"}
            />
            <ProductCard
                productImg={kyrie}
                name={"Kyrie Infinity EP"}
                listPrice={5000}
                salePrice={4200}
                direct={"/sneakers/nike/003"}
            />
        </ProductList>
    );
};

export default Nike;