import React, { useState } from "react";
import styled from "styled-components";
import ProductLayout from "../components/layout/ProductLayout"
import Container from "../components/common/Container";
import Hero from "../components/common/Hero";
import QuantityBtn from "../components/common/buttons/QuantityBtn";
import PrimaryBtn from "../components/common/buttons/PrimaryBtn";
import SizeSelector from "../components/common/utility/SizeSelector";
import { Image } from "antd";


import { useSelector, useDispatch } from "react-redux";
import {
    cartItems,
    addToCart
} from "../features/cart/cartSlice";


const ProductWrapper = styled.div`
    display: flex;
    padding-bottom: 100px;

    @media(max-width: 1440px) {
        flex-direction: column;

        div {
            margin-bottom: 10px
        }
    }
`

const ProductInfo = styled.div`
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const ProductName = styled.div`
    font-size: 24px;
    font-weight: 500;
    color: #4a4a4a;
    border-left: 1px solid;
    padding-left: 8px;
`

const Mention = styled.span`
    color: #ADADAD;
`

const ListPriceLabel = styled.div`
    display: inline-block;
    color: #4a4a4a;
    vertical-align: middle;
    font-size: 18px;
    font-weight: 300;
    text-decoration: line-through;
    padding-right: 8px;
`

const SalePriceLabel = styled.div`
    display: inline-block;
    color: #005376;
    vertical-align: middle;
    font-size: 24px;
    font-weight: 500;
`

const ProductInfoTitle = styled.div`
    padding: 0px 10px;
    font-size: 16px;
    color: #4a4a4a;
    font-weight: bold;

    @media(max-width: 1440px) {
        margin-top: 4px !important;
    }
`

const SizeSelectorWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 0px;
    width: 100%;

    @media(max-width: 1440px) {
        align-items: start;
    }
`

const QuantityWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const CartOrBuy = styled.div`
    display: flex;
    justify-content: center;

    button {
        margin: 10px 10px;
    }
`

const ProductImgContainer = styled.div`
    flex: 3;
    text-align: center;
`

const ProductDescribeTitleWrapper = styled.div`
    position: relative;
    width: 140px;
    margin: 0 auto;
    text-align: center;
    padding-bottom: 10px;
`

const ProductDescribeTitle = styled.div`
    color: #4a4a4a;
    font-weight: 500;
    font-size: 20px;

    &:before {
        content: "";
        width: 16px;
        height: 2px;
        background-color: #4a4a4a;
        position: absolute;
        top: 12px;
        left: 0;
    }

    &:after {
        content: "";
        width: 16px;
        height: 2px;
        background-color: #4a4a4a;
        position: absolute;
        top: 12px;
        right: 0;
    }
`

const ProductPage = ({
    productName,
    listPrice,
    salePrice,
    productImg
}) => {
    
    const cart = useSelector(cartItems);
    const dispatch = useDispatch();

    const [ count, setCount ] = useState(1);
    const [ size, setSize ] = useState("UK7");

    return (
        <ProductLayout>
            <Container>
                <Hero>
                    <ProductWrapper>
                        <ProductInfo>
                            <ProductName>{productName}</ProductName>
                            <Mention>
                                出貨提醒：<br />
                                每月1~15號購買之訂單，將於隔月1號出貨；<br />
                                每月16~31號購買之訂單，將於隔月16號出貨。
                            </Mention>
                            <div>
                                {
                                    listPrice ?
                                    <div>
                                        <ListPriceLabel>NT${listPrice}</ListPriceLabel>
                                        <SalePriceLabel>NT${salePrice}</SalePriceLabel>
                                    </div>:
                                    <div>
                                        <SalePriceLabel>NT${salePrice}</SalePriceLabel>
                                    </div>
                                }
                            </div>
                            <SizeSelectorWrapper>
                                <ProductInfoTitle>尺寸</ProductInfoTitle>
                                <SizeSelector setSize={setSize} />
                            </SizeSelectorWrapper>
                            <QuantityWrapper>
                                <QuantityBtn stock={12} count={count} setCount={setCount}/>
                            </QuantityWrapper>
                            <CartOrBuy>
                                <PrimaryBtn 
                                onClick={() => dispatch(addToCart({
                                    product: productName,
                                    size: size,
                                    price: salePrice,
                                    count: count,
                                }))}
                                >加入購物車
                                </PrimaryBtn>
                                <PrimaryBtn>立即購買</PrimaryBtn>
                            </CartOrBuy>
                        </ProductInfo>
                        <ProductImgContainer>
                            <Image 
                            width={400}
                            src={productImg}
                            />
                        </ProductImgContainer>
                    </ProductWrapper>
                    <ProductDescribeTitleWrapper>
                        <ProductDescribeTitle>商品描述</ProductDescribeTitle>
                    </ProductDescribeTitleWrapper>
                    <div style={{ padding: "0 60px"}}>
                        <span>
                        鞋子因何而發生？要想清楚，鞋子，到底是一種怎麽樣的存在。佚名曾經告訴世人，感激每一個新的挑戰，因為它會鍛造你的意志和品格。我希望諸位也能好好地體會這句話。經過上述討論，孔丘曾經告訴世人，三軍可奪帥也，匹夫不可奪志也。這句話語雖然很短，但令我浮想聯翩。為什麼是這樣呢？總結的來說，更多鞋子的意義是這樣的，所謂鞋子，關鍵是鞋子需要如何寫。在這種困難的抉擇下，本人思來想去，寢食難安。
                        <br /><br />
                        而這些並不是完全重要，更加重要的問題是，鞋子的意義其實就隱藏在我們的生活中，一般來說，其實鞋子是非常值得我們深思的。鞋子的發生，到底需要如何做到，不鞋子的發生，又會如何產生。樂府《長歌行》在不經意間這樣說過，少壯不努力，老大徒傷悲。這讓我思索了許久，我們都知道，只要有意義，那麽就必須慎重考慮。問題的關鍵究竟為何？你真的了解鞋子嗎？既然如此，鞋子，發生了會如何，不發生又會如何。
                        </span>
                    </div>    
                </Hero>
            </Container>
        </ProductLayout>
    );
};

export default ProductPage;