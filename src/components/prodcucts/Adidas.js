import React from "react";
import styled from "styled-components";
import ProductCard from "../common/utility/ProductCard";
import superstar from "../../image/products/adidas/superstar.jpg"
import harden from "../../image/products/adidas/harden.jpg";
import young from "../../image/products/adidas/young.jpg";

const ProductList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-top: 10px;
`

const Adidas = () => {
    return (
        <ProductList>
            <ProductCard
                productImg={superstar}
                name={"SuperStar 經典鞋"}
                listPrice={3490}
                salePrice={2399}
            />
            <ProductCard
                productImg={harden}
                name={"HARDEN VOL. 5 FUTURENATURAL 籃球鞋"}
                listPrice={4890}
                salePrice={2399}
            />
            <ProductCard
                productImg={young}
                name={"TRAE YOUNG 1 籃球鞋"}
                listPrice={''}
                salePrice={4090}
            />
            <ProductCard
                productImg={young}
                name={"TRAE YOUNG 1 籃球鞋"}
                listPrice={''}
                salePrice={4090}
            />
            <ProductCard
                productImg={superstar}
                name={"SuperStar 經典鞋"}
                listPrice={3490}
                salePrice={2399}
            />
            <ProductCard
                productImg={harden}
                name={"HARDEN VOL. 5 FUTURENATURAL 籃球鞋"}
                listPrice={4890}
                salePrice={2399}
            />
            <ProductCard
                productImg={harden}
                name={"HARDEN VOL. 5 FUTURENATURAL 籃球鞋"}
                listPrice={4890}
                salePrice={2399}
            />
            <ProductCard
                productImg={young}
                name={"TRAE YOUNG 1 籃球鞋"}
                listPrice={''}
                salePrice={4090}
            />
            <ProductCard
                productImg={superstar}
                name={"SuperStar 經典鞋"}
                listPrice={3490}
                salePrice={2399}
            />
                        <ProductCard
                productImg={young}
                name={"TRAE YOUNG 1 籃球鞋"}
                listPrice={''}
                salePrice={4090}
            />
            <ProductCard
                productImg={superstar}
                name={"SuperStar 經典鞋"}
                listPrice={3490}
                salePrice={2399}
            />
            <ProductCard
                productImg={harden}
                name={"HARDEN VOL. 5 FUTURENATURAL 籃球鞋"}
                listPrice={4890}
                salePrice={2399}
            />
                        <ProductCard
                productImg={superstar}
                name={"SuperStar 經典鞋"}
                listPrice={3490}
                salePrice={2399}
            />
            <ProductCard
                productImg={harden}
                name={"HARDEN VOL. 5 FUTURENATURAL 籃球鞋"}
                listPrice={4890}
                salePrice={2399}
            />
            <ProductCard
                productImg={young}
                name={"TRAE YOUNG 1 籃球鞋"}
                listPrice={''}
                salePrice={4090}
            />
        </ProductList>
    );
};

export default Adidas;