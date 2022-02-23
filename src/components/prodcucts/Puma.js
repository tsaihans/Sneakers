import React from "react";
import styled from "styled-components";
import ProductCard from "../common/utility/ProductCard";
import xray from "../../image/products/puma/xray.jpg"
import rider from "../../image/products/puma/rider.jpg"
import lamelo from "../../image/products/puma/lamelo.jpg"

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
                productImg={xray}
                name={"PUMA X-Ray 2 Square SD 慢跑運動鞋"}
                listPrice={""}
                salePrice={2680}
            />
            <ProductCard
                productImg={rider}
                name={"PUMA Court Rider Twofold 籃球運動鞋"}
                listPrice={4080}
                salePrice={2490}
            />
            <ProductCard
                productImg={lamelo}
                name={"PUMA MB.01 x Rick and Morty 籃球運動鞋"}
                listPrice={""}
                salePrice={4680}
            />
            <ProductCard
                productImg={lamelo}
                name={"PUMA MB.01 x Rick and Morty 籃球運動鞋"}
                listPrice={""}
                salePrice={4680}
            />
            <ProductCard
                productImg={xray}
                name={"PUMA X-Ray 2 Square SD 慢跑運動鞋"}
                listPrice={""}
                salePrice={2680}
            />
            <ProductCard
                productImg={rider}
                name={"PUMA Court Rider Twofold 籃球運動鞋"}
                listPrice={4080}
                salePrice={2490}
            />
            <ProductCard
                productImg={rider}
                name={"PUMA Court Rider Twofold 籃球運動鞋"}
                listPrice={4080}
                salePrice={2490}
            />
            <ProductCard
                productImg={lamelo}
                name={"PUMA MB.01 x Rick and Morty 籃球運動鞋"}
                listPrice={""}
                salePrice={4680}
            />
            <ProductCard
                productImg={xray}
                name={"PUMA X-Ray 2 Square SD 慢跑運動鞋"}
                listPrice={""}
                salePrice={2680}
            />
            <ProductCard
                productImg={lamelo}
                name={"PUMA MB.01 x Rick and Morty 籃球運動鞋"}
                listPrice={""}
                salePrice={4680}
            />
            <ProductCard
                productImg={xray}
                name={"PUMA X-Ray 2 Square SD 慢跑運動鞋"}
                listPrice={""}
                salePrice={2680}
            />
            <ProductCard
                productImg={rider}
                name={"PUMA Court Rider Twofold 籃球運動鞋"}
                listPrice={4080}
                salePrice={2490}
            />
            <ProductCard
                productImg={xray}
                name={"PUMA X-Ray 2 Square SD 慢跑運動鞋"}
                listPrice={""}
                salePrice={2680}
            />
            <ProductCard
                productImg={rider}
                name={"PUMA Court Rider Twofold 籃球運動鞋"}
                listPrice={4080}
                salePrice={2490}
            />
            <ProductCard
                productImg={lamelo}
                name={"PUMA MB.01 x Rick and Morty 籃球運動鞋"}
                listPrice={""}
                salePrice={4680}
            />
        </ProductList>
    );
};

export default Puma;