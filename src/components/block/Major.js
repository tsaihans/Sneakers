import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ImageCarousel from "../../components/common/ImgeCarousel";
import c1 from "../../image/carousel/c1.jpg";
import c2 from "../../image/carousel/c2.jpg";
import BrandSection from "./Brand";

const BannerContainer = styled.div`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: space-between;
`
const BannerCarouselSection = styled.div`
    width: 66.35%;
    height: 408px;
    margin-right: 0.35%;
`

const BannerSection = styled.div`
    display: flex;
    flex-direction: column;
    width: 33.3%;
`

const Banner = styled.div`
    background-image: ${(props) => `url(${props.url})`};
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 198px;
    margin-bottom: 4px;
`

const Major = () => {
    return (
        <div>
            <BannerContainer>
                <BannerCarouselSection>
                    <ImageCarousel />
                </BannerCarouselSection>
                <BannerSection>
                    <Link to="/sneakers/nike/p001">
                        <Banner url={c1} />
                    </Link>
                    <Link to="/sneakers/nike/p002">
                        <Banner url={c2} />
                    </Link>
                </BannerSection>
            </BannerContainer>        
            <BrandSection />
        </div>
    );
};

export default Major;