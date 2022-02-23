import React from "react";
import styled from "styled-components";
import ProductCard from "../common/utility/ProductCard";
import mixmatch from "../../image/products/converse/mixmatch.png";
import taylor from "../../image/products/converse/taylor.png";
import chuck70 from "../../image/products/converse/chuck70.png";

const ProductList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-top: 10px;
`

const Converse = () => {
    return (
        <ProductList>
            <ProductCard
                productImg={mixmatch}
                name={"Converse Mix & Match x Chuck 70"}
                salePrice={2680}
                imgSize={"contain"}
            />
            <ProductCard
                productImg={taylor}
                name={"Chuck Taylor All Star Pro"}
                salePrice={2280}
                imgSize={"contain"}
            />
            <ProductCard
                productImg={chuck70}
                name={"Chuck 70"}
                salePrice={2580}
                imgSize={"contain"}
            />
            <ProductCard
                productImg={chuck70}
                name={"Chuck 70"}
                salePrice={2580}
                imgSize={"contain"}
            />
            <ProductCard
                productImg={mixmatch}
                name={"Converse Mix & Match x Chuck 70"}
                salePrice={2680}
                imgSize={"contain"}
            />
            <ProductCard
                productImg={taylor}
                name={"Chuck Taylor All Star Pro"}
                salePrice={2280}
                imgSize={"contain"}
            />
            
            <ProductCard
                productImg={taylor}
                name={"Chuck Taylor All Star Pro"}
                salePrice={2280}
                imgSize={"contain"}
            />
            <ProductCard
                productImg={chuck70}
                name={"Chuck 70"}
                salePrice={2580}
                imgSize={"contain"}
            />
            <ProductCard
                productImg={mixmatch}
                name={"Converse Mix & Match x Chuck 70"}
                salePrice={2680}
                imgSize={"contain"}
            />

            <ProductCard
                productImg={chuck70}
                name={"Chuck 70"}
                salePrice={2580}
                imgSize={"contain"}
            />
            <ProductCard
                productImg={mixmatch}
                name={"Converse Mix & Match x Chuck 70"}
                salePrice={2680}
                imgSize={"contain"}
            />
            <ProductCard
                productImg={taylor}
                name={"Chuck Taylor All Star Pro"}
                salePrice={2280}
                imgSize={"contain"}
            />
            <ProductCard
                productImg={mixmatch}
                name={"Converse Mix & Match x Chuck 70"}
                salePrice={2680}
                imgSize={"contain"}
            />
            <ProductCard
                productImg={taylor}
                name={"Chuck Taylor All Star Pro"}
                salePrice={2280}
                imgSize={"contain"}
            />
            <ProductCard
                productImg={chuck70}
                name={"Chuck 70"}
                salePrice={2580}
                imgSize={"contain"}
            />
        </ProductList>
    );
};

export default Converse;