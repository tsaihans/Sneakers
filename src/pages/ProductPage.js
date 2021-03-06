import React, { useContext, useState } from "react";
import styled from "styled-components";
import ProductLayout from "../components/layout/ProductLayout"
import Container from "../components/common/Container";
import Hero from "../components/common/Hero";
import QuantityBtn from "../components/common/buttons/QuantityBtn";
import PrimaryBtn from "../components/common/buttons/PrimaryBtn";
import SizeSelector from "../components/common/utility/SizeSelector";
import { Image } from "antd";


import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import AuthContext from "../components/auth/AuthContext";
import { useNavigate } from "react-router-dom";


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
    
    @media(max-width: 540px) {
        width: 100%;
    }
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
    
    const dispatch = useDispatch();
    const { isAuthenticated } = useContext(AuthContext);
    const navigate = useNavigate();

    const [ count, setCount ] = useState(1);
    const [ size, setSize ] = useState("UK7");

    const handleCheckoutNow = () => {
        alert(`??????????????????????????????${salePrice*count}???`)
    };


    return (
        <ProductLayout>
            <Container>
                <Hero>
                    <ProductWrapper>
                        <ProductInfo>
                            <ProductName>{productName}</ProductName>
                            <Mention>
                                ???????????????<br />
                                ??????1~15?????????????????????????????????1????????????<br />
                                ??????16~31?????????????????????????????????16????????????
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
                                <ProductInfoTitle>??????</ProductInfoTitle>
                                <SizeSelector setSize={setSize} />
                            </SizeSelectorWrapper>
                            <QuantityWrapper>
                                <QuantityBtn stock={12} count={count} setCount={setCount}/>
                            </QuantityWrapper>
                            <CartOrBuy>
                                <PrimaryBtn 
                                onClick={isAuthenticated ? 
                                    () => dispatch(addToCart({
                                    product: productName,
                                    size: size,
                                    price: salePrice,
                                    count: count,
                                    })):
                                    () => navigate("/sneakers/login")
                                    } 
                                >???????????????
                                </PrimaryBtn>
                                <PrimaryBtn onClick={isAuthenticated ? () => handleCheckoutNow() : () => navigate("/sneakers/login")}>????????????</PrimaryBtn>
                            </CartOrBuy>
                        </ProductInfo>
                        <ProductImgContainer>
                            <Image 
                            width={"70%"}
                            src={productImg}
                            />
                        </ProductImgContainer>
                    </ProductWrapper>
                    <ProductDescribeTitleWrapper>
                        <ProductDescribeTitle>????????????</ProductDescribeTitle>
                    </ProductDescribeTitleWrapper>
                    <div style={{ padding: "0 60px"}}>
                        <span>
                        ???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
                        <br /><br />
                        ???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
                        </span>
                    </div>    
                </Hero>
            </Container>
        </ProductLayout>
    );
};

export default ProductPage;