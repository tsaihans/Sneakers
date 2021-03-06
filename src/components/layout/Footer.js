import React from "react";
import styled from "styled-components";
import Hero from "../common/Hero";
import Container from "../common/Container";
import Brand from "../../image/FooterBrand.png";
import BlackCat from "../../image/delivery/BlackCatDelivery.png";
import Seven from "../../image/delivery/SevenEleven.png";
import FamilyMart from "../../image/delivery/FamilyMart.png";

const StyledFooter = styled.footer`
    box-shadow: 0 -4px 6px rgba(50,50,93,.11), 0 -1px 3px rgba(0,0,0,.08);
`

const Content = styled.div`
    display: flex;
    justify-content: space-between;
    padding-bottom: 8px;
    border-bottom: 1px solid #b2bac4;
    color: #40414f;

    
    @media(max-width: 540px) {
        flex-direction: column;
        flex-wrap: wrap;
    }
`

const NavRow = styled.div`
    display: flex;
    flex-direction: column;
    `

const NavTitle = styled.div`
    font-size: 24px;
    font-weight: 600;
    color: #686c71;
    padding-bottom: 8px;

    @media(max-width: 540px) {
        width: 100%;
    }
    `

const Nav = styled.ul`
    display: flex;
    list-style-type: none;
    padding-inline-start: 0px;
    `

const NavItem = styled.li`
    font-size: 16px;
    padding: 5px 8px;
    cursor: pointer;

    a{
        text-decoration: none ;
        color: #40414f;
        transition: color .3s;
    }

    &:hover{
        a {
            color: #7795f8;
        } 
    }
    `

const Delivery = styled.div`
    margin: 0px 8px;
    background-image: ${(props) => `url(${props.img})`};
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    height: 36px;
    width: 64px;
    cursor: pointer;
    `

const FooterBrand = styled.div`
    background-image: ${`url(${Brand})`};
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    padding-top: 4%;

    @media(max-width: 1440px) {
        padding-top: 10%;
    }
`

const Footer = () => {
    return(
        <StyledFooter>     
            <Hero padding={35}>
                <Container>
                    <Content>
                        <NavRow>
                            <NavTitle>??????</NavTitle>
                            <Nav>
                                <NavItem><a href="#!">??????</a></NavItem>
                                <NavItem><a href="#!">??????</a></NavItem>
                                <NavItem><a href="#!">??????</a></NavItem>
                                <NavItem><a href="#!">??????</a></NavItem>
                            </Nav>
                        </NavRow>
                        <NavRow>
                            <NavTitle>??????</NavTitle>
                            <Nav>
                                <NavItem><a href="#!">??????</a></NavItem>
                                <NavItem><a href="#!">??????</a></NavItem>
                                <NavItem><a href="#!">??????</a></NavItem>
                                <NavItem><a href="#!">??????</a></NavItem>
                            </Nav>
                        </NavRow>
                        <NavRow>
                            <NavTitle>??????</NavTitle>
                            <Nav>
                                <Delivery img={Seven} />
                                <Delivery img={FamilyMart} />
                                <Delivery img={BlackCat} />
                            </Nav>
                        </NavRow>
                    </Content>
                    <div style={{ marginTop: '20px'}}>
                        <FooterBrand />
                    </div>
                </Container>
            </Hero>
        </StyledFooter>
    );
};

export default Footer;