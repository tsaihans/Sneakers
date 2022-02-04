import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Hero from "../common/Hero";
import Container from "../common/Container";
import MaskDark from "../common/MaskDark";
import FooterBG from "../../image/bg/wall.jpg"
import Brand from "../../image/FooterBrand.png";

const StyledFooter = styled.footer`
    position: relative;
    background-image: ${`url(${FooterBG})`};
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed;
`

const FooterBrand = styled.div`
    background-image: ${`url(${Brand})`};
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    height: 100px;
    margin: 0 auto;
`

const NavBar = styled.ul`
    list-style-type: none;
    display: flex;
    padding-inline-start: 0px;
    justify-content: center;
`
const NavItem = styled.li`
    padding: 0px 16px;
    z-index: 999;
    a{
        text-decoration: none ;
        color: #F0F0F0;
        transition: color .3s;
        font-size: 16px;
    }
    &:hover{
        a {
            color: #a2a9af;
        } 
    }
    a i{
        padding-left: 4px;
    }
    
`

const Footer = () => {
    return(
        <StyledFooter>     
            <Hero gap='160px'>
                <MaskDark />
                <Container>
                    <FooterBrand />
                    <NavBar>
                        <NavItem>
                            <a href="#about">
                                關於<i class="fas fa-book-open"></i>                                
                            </a>
                        </NavItem>
                        <NavItem>
                            <a href="#location">
                                據點<i class="fas fa-map-marker-alt"></i>                               
                            </a>
                        </NavItem>
                        <NavItem>
                            <a href="#promotion">
                                活動<i class="fas fa-tag"></i>                            
                            </a>
                        </NavItem>
                        <NavItem>
                            <Link to="/sneakers/login">
                                登入<i class="fas fa-user"></i>                            
                            </Link>
                        </NavItem>
                    </NavBar>
                </Container>
            </Hero>
        </StyledFooter>
    );
};

export default Footer;