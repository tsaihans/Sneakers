import React from "react";
import styled from "styled-components";
import DefaultLayout from "../components/layout/DefaultLayout";
import Container from "../components/common/Container";
import Hero from "../components/common/Hero";
import Major from "../components/block/Major"
import NewsSection from "../components/block/News";
import ContactSection from "../components/block/Contact";

const BackgroundColor = styled.div`
    background-color: ${ (props) => (props.grey) ? "#ebedec" : "#fbfbfb" } ;
`

const HomePage = () => {
    return (
        <DefaultLayout>
            <BackgroundColor>
                <Container>
                    <Hero>
                        <Major />
                    </Hero>    
                </Container>
            </BackgroundColor>
            <BackgroundColor grey={true}>
                <Container>
                    <Hero>
                        <NewsSection />
                    </Hero>    
                </Container>
            </BackgroundColor>   
            <BackgroundColor>
                <Container>
                    <Hero>
                        <ContactSection />
                    </Hero>    
                </Container>
            </BackgroundColor>   
        </DefaultLayout>
    );
};

export default HomePage;