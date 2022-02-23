import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import DefaultLayout from "../components/layout/DefaultLayout";
import Container from "../components/common/Container";
import Clearfix from "../components/common/Clearfix";
import Nike from "../components/prodcucts/Nike";
import Adidas from "../components/prodcucts/Adidas";
import Puma from "../components/prodcucts/Puma";
import Underarmour from "../components/prodcucts/Underarmour";
import Newbalance from "../components/prodcucts/Newbalance";
import Reebok from "../components/prodcucts/Reebok";
import Timberland from "../components/prodcucts/Timberland";
import Converse from "../components/prodcucts/Converse";

const ProductListWrapper = styled.div`
    display: flex;
    padding: 10px 0px 20px 0px;

    @media(max-width: 1440px) {
        flex-direction: column;
    }
`

const BrandMenuSection = styled.div`
    flex: 2;
`

const Title = styled.div`
    padding-bottom: 6px;
    border-bottom: 1px solid black;
    font-size: 20px;
`

const BrandMenu = styled.ul`
    list-style-type: none;
    padding-inline-start: 0px;
    padding-top: 6px;
    display: flex;
    flex-direction: column;

    li {
        padding: 0px 0px 4px 0px;
        font-size: 16px;
    }

    li a {
        color: rgba(0,0,0,.85);
        transition: color 0.2s;
    }

    @media(max-width: 1440px) {
        flex-wrap: wrap;
        flex-direction: row;
    }
`

const BrandTitle = styled.li`
    &:hover a {
        color: #1890ff;
    }

    @media(max-width: 1440px) {
        flex: 50%;
    }
`

const Branch =  styled.div`
    width: 100%;
    background-color: rgba(233,233,233,0.2);
    text-transform: uppercase;
    color: #4a4a4a;
    font-size: 12px;
    margin-top: 2px;
`

const ClearfixRow = styled.div`
    flex: 1;
`

const ProductMenuSection = styled.div`
    flex: 8;
`

const ProductCollectionPage = ({ currentPage }) => {

    const [ brandPage, setBrandPage ] = useState(currentPage);
    
    const brandSwitch = (brandPage) => {
        switch (brandPage) {
            case 'nike':
                return <Nike />
            case 'adidas':
                return <Adidas />
            case 'puma':
                return <Puma />
            case 'underarmour':
                return <Underarmour />
            case 'newbalance':
                return <Newbalance />
            case 'reebok':
                return <Reebok />
            case 'timberland':
                return <Timberland />
            case 'converse':
                return <Converse />
        }
    }


    return (
        <DefaultLayout>
            <Container>
                <Clearfix height={"30px"} />
                <ProductListWrapper>
                    <BrandMenuSection>
                        <Title>品牌</Title>
                        <BrandMenu>
                            <BrandTitle>
                                <Link to="/sneakers/nike" onClick={() => setBrandPage("nike")}>
                                    NIKE
                                </Link>
                            </BrandTitle>
                            <BrandTitle>
                                <Link to="/sneakers/adidas" onClick={() => setBrandPage("adidas")}>
                                    ADIDAS
                                </Link>
                            </BrandTitle>
                            <BrandTitle>
                                <Link to="/sneakers/puma" onClick={() => setBrandPage("puma")}>
                                    PUMA
                                </Link>
                            </BrandTitle>
                            <BrandTitle>
                                <Link to="/sneakers/underarmour" onClick={() => setBrandPage("underarmour")}>
                                    UNDER ARMOUR
                                </Link>
                            </BrandTitle>
                            <BrandTitle>
                                <Link to="/sneakers/newbalance" onClick={() => setBrandPage("newbalance")}>
                                    NEWBALENCE
                                </Link>
                            </BrandTitle>
                            <BrandTitle>
                                <Link to="/sneakers/reebok" onClick={() => setBrandPage("reebok")}>
                                    REEBOK
                                </Link>
                            </BrandTitle>
                            <BrandTitle>
                                <Link to="/sneakers/timberland" onClick={() => setBrandPage("timberland")}>
                                    TIMBERLAND
                                </Link>
                            </BrandTitle>
                            <BrandTitle>
                                <Link to="/sneakers/converse" onClick={() => setBrandPage("converse")}>
                                    CONVERSE
                                </Link>
                            </BrandTitle>
                        </BrandMenu>
                    </BrandMenuSection>
                    <ClearfixRow />
                    <ProductMenuSection>
                        <Title>品項</Title>
                        <Branch>全部商品/鞋類/{brandPage}</Branch>
                        {
                            brandSwitch(brandPage)
                        }
                    </ProductMenuSection>
                </ProductListWrapper>
            </Container>
        </DefaultLayout>
    );
};

export default ProductCollectionPage;