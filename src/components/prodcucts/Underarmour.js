import React from "react";
import styled from "styled-components";
import ProductCard from "../common/utility/ProductCard";
import forge from "../../image/products/underarmour/forge.webp"
import curry from "../../image/products/underarmour/curry.webp"
import curry8 from "../../image/products/underarmour/curry8.webp"

const ProductList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-top: 10px;
`

const Underarmour = () => {
    return (
        <ProductList>
            <ProductCard
                productImg={forge}
                name={"中性UA Forge 96 CLRSHFT運動休閒鞋"}
                listPrice={3680}
                salePrice={1840}
            />
            <ProductCard
                productImg={curry}
                name={"中性柯瑞Curry 1 Dub Nation籃球鞋"}
                listPrice={""}
                salePrice={5280}
            />
            <ProductCard
                productImg={curry8}
                name={"柯瑞Curry 8籃球鞋"}
                listPrice={5280}
                salePrice={4224}
            />
            <ProductCard
                productImg={curry8}
                name={"柯瑞Curry 8籃球鞋"}
                listPrice={5280}
                salePrice={4224}
            />
            <ProductCard
                productImg={forge}
                name={"中性UA Forge 96 CLRSHFT運動休閒鞋"}
                listPrice={3680}
                salePrice={1840}
            />
            <ProductCard
                productImg={curry}
                name={"中性柯瑞Curry 1 Dub Nation籃球鞋"}
                listPrice={""}
                salePrice={5280}
            />
            <ProductCard
                productImg={curry}
                name={"中性柯瑞Curry 1 Dub Nation籃球鞋"}
                listPrice={""}
                salePrice={5280}
            />
            <ProductCard
                productImg={curry8}
                name={"柯瑞Curry 8籃球鞋"}
                listPrice={5280}
                salePrice={4224}
            />
            <ProductCard
                productImg={forge}
                name={"中性UA Forge 96 CLRSHFT運動休閒鞋"}
                listPrice={3680}
                salePrice={1840}
            />
            <ProductCard
                productImg={curry8}
                name={"柯瑞Curry 8籃球鞋"}
                listPrice={5280}
                salePrice={4224}
            />
            <ProductCard
                productImg={forge}
                name={"中性UA Forge 96 CLRSHFT運動休閒鞋"}
                listPrice={3680}
                salePrice={1840}
            />
            <ProductCard
                productImg={curry}
                name={"中性柯瑞Curry 1 Dub Nation籃球鞋"}
                listPrice={""}
                salePrice={5280}
            />
            <ProductCard
                productImg={forge}
                name={"中性UA Forge 96 CLRSHFT運動休閒鞋"}
                listPrice={3680}
                salePrice={1840}
            />
            <ProductCard
                productImg={curry}
                name={"中性柯瑞Curry 1 Dub Nation籃球鞋"}
                listPrice={""}
                salePrice={5280}
            />
            <ProductCard
                productImg={curry8}
                name={"柯瑞Curry 8籃球鞋"}
                listPrice={5280}
                salePrice={4224}
            />
        </ProductList>
    );
};

export default Underarmour;