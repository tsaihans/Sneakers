import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Card = styled.div`
    /* border: 1px solid; */
    flex: 0 0 33%;

    @media (max-width: 1440px) {
        flex: 0 0 50%;
    }
`

const ProductContainer = styled.div`
    padding: 10px;
`

const ImageContainer = styled.div`
    width: 100%;
    position: relative;

    &:before {
        content: "";
        display: block;
        width: 100%;
        padding-top: 75%;
    }

    &:hover span{
        transform: scale(1.1);
    }
`

const Image = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    
    background-image: ${(props) => `url(${props.img})`};
    background-size: ${(props) => props.size || "cover"};
    background-repeat: no-repeat;
    background-position: ${(props) => props.position || "center"};

    &:hover {
        transform: scale(1.1);
    }
`

const Info = styled.div`
    padding-top: 10px;
    text-align: center;
`

const ProductName = styled.h5`
    text-align: center;
    font-size: 16px;
`

const ListPriceLabel = styled.span`
    text-decoration: line-through;
    font-size: 14px;
    margin-right: 4px;
    color: #4a4a4a;
`

const SalePriceLabel = styled.span`
    font-size: 18px;
    color: ${(props) => props.onSale ? "#f00" : "rgba(0,0,0,.85)"};
    font-weight: 600;
`

const DiscountLabel = styled.span`
    background-color: #f69113;
    padding: 2px 5px;
    color: white;
    position: absolute;
    top: 8px;
    right: 0;
`


const ProductCard = ({
    productImg,
    name,
    listPrice,
    salePrice,
    imgPosition,
    imgSize,
    direct
}) => {
    return (
        <Card>
            <Link to={direct || "#!"}>
                <ProductContainer>
                    <ImageContainer>
                        <Image img={productImg} position={imgPosition} size={imgSize} />
                        {
                            listPrice && 
                            <DiscountLabel>現省{ parseInt(100 - ((salePrice/listPrice) * 100)) }%</DiscountLabel>
                        }
                    </ImageContainer>
                    <Info>
                        <ProductName>
                            {name}
                        </ProductName>
                        {
                            listPrice && 
                            <ListPriceLabel>NT${listPrice}</ListPriceLabel>
                        }
                        <SalePriceLabel onSale={listPrice ? true : false}>NT${salePrice}</SalePriceLabel>
                    </Info>
                </ProductContainer>
            </Link>
        </Card>
    );
};

export default ProductCard;