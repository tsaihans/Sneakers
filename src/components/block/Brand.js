import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import adidas from "../../image/brand/adidas.png";
import nike from "../../image/brand/nike.png";
import underarmour from "../../image/brand/underarmour.png";
import timberland from "../../image/brand/timberland.png";
import puma from "../../image/brand/puma.png";
import converse from "../../image/brand/converse.png";
import reebok from "../../image/brand/reebok.png";
import newbalance from "../../image/brand/newbalance.png";


const BrandSectionContainer = styled.div`
    border: 1px solid #E0E0E0;
    border-radius: 8px;
    box-shadow: 3px 3px 5px #ccc;
`

const BrandList = styled.div`
    display: flex;
`

const Brand = styled.div`
    flex: 1;
    border: 1px solid #E0E0E0;
    
    &:hover{
        box-shadow: 3px 6px 6px #ccc;
        cursor: pointer;
    }
`

const BrandImgContainer = styled.div`
    padding: 16px 12px 8px 12px;
    border: 1px solid #f3f4f5;
    border-radius: 4px;
`

const BrandImg = styled.div`
    background-image: ${(props) => `url(${props.img})`};
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    padding-top: 50%;
`

const BrandName = styled.div`
    text-align: center;
    color: grey;
    padding: 2px 0px;
    text-transform: uppercase;
    background-color: #f3f4f5;
`


const BrandSection = () => {
    return (
        <BrandSectionContainer>
            <BrandList>
                <Brand>
                    <Link to="/sneakers/nike">
                        <BrandImgContainer>
                            <BrandImg img={nike}></BrandImg>
                        </BrandImgContainer>
                        <BrandName>nike</BrandName>
                    </Link>
                </Brand>
                <Brand>
                    <Link to="/sneakers/adidas">
                        <BrandImgContainer>
                            <BrandImg img={adidas}></BrandImg>
                        </BrandImgContainer>
                        <BrandName>adidas</BrandName>
                    </Link>
                </Brand>
                <Brand>
                    <Link to="/sneakers/puma">
                        <BrandImgContainer>
                            <BrandImg img={puma}></BrandImg>
                        </BrandImgContainer>
                        <BrandName>puma</BrandName>
                    </Link>
                </Brand>
                <Brand>
                    <Link to="/sneakers/underarmour">
                        <BrandImgContainer>
                            <BrandImg img={underarmour}></BrandImg>
                        </BrandImgContainer>
                        <BrandName>under armour</BrandName>
                    </Link>
                </Brand>
                <Brand>
                    <Link to="/sneakers/newbalance">
                        <BrandImgContainer>
                            <BrandImg img={newbalance}></BrandImg>
                        </BrandImgContainer>
                        <BrandName>newbalance</BrandName>
                    </Link>
                </Brand>
                <Brand>
                    <Link to="/sneakers/reebok">
                        <BrandImgContainer>
                            <BrandImg img={reebok}></BrandImg>
                        </BrandImgContainer>
                        <BrandName>reebok</BrandName>
                    </Link>
                </Brand>
                <Brand>
                    <Link to="/sneakers/timberland">
                        <BrandImgContainer>
                            <BrandImg img={timberland}></BrandImg>
                        </BrandImgContainer>
                        <BrandName>timberland</BrandName>
                    </Link>
                </Brand>
                <Brand>
                    <Link to="/sneakers/converse">
                        <BrandImgContainer>
                            <BrandImg img={converse}></BrandImg>
                        </BrandImgContainer>
                        <BrandName>converse</BrandName>
                    </Link>
                </Brand>
            </BrandList>
        </BrandSectionContainer>
    );
};

export default BrandSection;

