import React from "react";
import styled from "styled-components";
import ProductCard from "../common/utility/ProductCard";
import vibram from "../../image/products/timberland/vibram.jpg";
import supaway from "../../image/products/timberland/supaway.jpg";
import ripcord from "../../image/products/timberland/ripcord.jpg";

const ProductList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-top: 10px;
`

const Timberland = () => {
    return (
        <ProductList>
            <ProductCard
                productImg={vibram}
                name={"Timberland 男款黑色Vibram休閒靴|A2M35001"}
                salePrice={6500}
                imgPosition={"bottom"}
            />
            <ProductCard
                productImg={supaway}
                name={"Timberland 男款黑色磨砂革Supaway休閒鞋|A2JW3001"}
                salePrice={3900}
                imgPosition={"bottom"}
            />
            <ProductCard
                productImg={ripcord}
                name={"Timberland 男款橄欖色Ripcord織物健行靴|A2KGTA58"}
                listPrice={3900}
                salePrice={2730}
                imgPosition={"bottom"}
            />
            <ProductCard
                productImg={ripcord}
                name={"Timberland 男款橄欖色Ripcord織物健行靴|A2KGTA58"}
                listPrice={3900}
                salePrice={2730}
                imgPosition={"bottom"}
            />
            <ProductCard
                productImg={vibram}
                name={"Timberland 男款黑色Vibram休閒靴|A2M35001"}
                salePrice={6500}
                imgPosition={"bottom"}
            />
            <ProductCard
                productImg={supaway}
                name={"Timberland 男款黑色磨砂革Supaway休閒鞋|A2JW3001"}
                salePrice={3900}
                imgPosition={"bottom"}
            />
            
            <ProductCard
                productImg={supaway}
                name={"Timberland 男款黑色磨砂革Supaway休閒鞋|A2JW3001"}
                salePrice={3900}
                imgPosition={"bottom"}
            />
            <ProductCard
                productImg={ripcord}
                name={"Timberland 男款橄欖色Ripcord織物健行靴|A2KGTA58"}
                listPrice={3900}
                salePrice={2730}
                imgPosition={"bottom"}
            />
            <ProductCard
                productImg={vibram}
                name={"Timberland 男款黑色Vibram休閒靴|A2M35001"}
                salePrice={6500}
                imgPosition={"bottom"}
            />

            <ProductCard
                productImg={ripcord}
                name={"Timberland 男款橄欖色Ripcord織物健行靴|A2KGTA58"}
                listPrice={3900}
                salePrice={2730}
                imgPosition={"bottom"}
            />
            <ProductCard
                productImg={vibram}
                name={"Timberland 男款黑色Vibram休閒靴|A2M35001"}
                salePrice={6500}
                imgPosition={"bottom"}
            />
            <ProductCard
                productImg={supaway}
                name={"Timberland 男款黑色磨砂革Supaway休閒鞋|A2JW3001"}
                salePrice={3900}
                imgPosition={"bottom"}
            />
            <ProductCard
                productImg={vibram}
                name={"Timberland 男款黑色Vibram休閒靴|A2M35001"}
                salePrice={6500}
                imgPosition={"bottom"}
            />
            <ProductCard
                productImg={supaway}
                name={"Timberland 男款黑色磨砂革Supaway休閒鞋|A2JW3001"}
                salePrice={3900}
                imgPosition={"bottom"}
            />
            <ProductCard
                productImg={ripcord}
                name={"Timberland 男款橄欖色Ripcord織物健行靴|A2KGTA58"}
                listPrice={3900}
                salePrice={2730}
                imgPosition={"bottom"}
            />
        </ProductList>
    );
};

export default Timberland;