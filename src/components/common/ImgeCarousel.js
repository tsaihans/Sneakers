import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Carousel } from "antd";
import c1 from "../../image/carousel/c1.jpg";
import c2 from "../../image/carousel/c2.jpg";
import c3 from "../../image/carousel/c3.jpg";

const CarouselContainer = styled.div`
    width: 100%;
`

const Image = styled.div`
    background-image: ${(props) => `url(${props.url})`};
    background-position: center;
    background-size: cover;
    width: 100%;
    height: ${(props) => props.height}px;
`

const ImageCarousel = () => {
    return (
        <CarouselContainer>
            <Carousel autoplay>
                <Link to="/sneakers/nike/p001">
                    <Image height={400} url={c1} />
                </Link>
                <Link to="/sneakers/nike/p002">
                    <Image height={400} url={c2} />
                </Link>
                <Link to="/sneakers/nike/p003">
                    <Image height={400} url={c3} />
                </Link>
            </Carousel>
        </CarouselContainer>
    );
};

export default ImageCarousel;