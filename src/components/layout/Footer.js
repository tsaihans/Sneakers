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
    padding-bottom: 25px;
    border-bottom: 1px solid #b2bac4;
    color: #40414f;
`

const NavBar = styled.div`
    display: flex;
    justify-content: space-between;
    `

const NavRow = styled.div`
    padding: 0px 80px;
    
    &:last-child{
        padding-right: 0px;
    }
    `

const NavTitle = styled.div`
    font-size: 24px;
    font-weight: 600;
    color: #686c71;
    `

const Nav = styled.ul`
    list-style-type: none;
    padding-inline-start: 0px;
    `

const NavItem = styled.li`
    padding-bottom: 16px;
    font-size: 16px;

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

    i{
        padding-right: 8px;
    }
    `

const SocialBtnGroup = styled.div`
    display: flex;
`

const SocialBtn = styled.a`
    border: 1px solid #3d3d3b;
    color: #3d3d3b;
    width: 40px;
    height: 40px;
    text-align: center;
    border-radius: 50%;
    margin-right: 8px;
    position: relative;
    transition: color 0.3s;

    i {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 18px;
    }

    &:hover {
        color: #7795f8;
        border-color: #7795f8;
    }
`

const FooterBrand = styled.div`
    background-image: ${`url(${Brand})`};
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    height: 60px;
    padding: 20px;
`

const Delivery = styled.div`
    background-image: ${(props) => `url(${props.img})`};
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    height: 36px;
    width: 64px;
    cursor: pointer;
`

const Footer = () => {
    return(
        <StyledFooter>     
            <Hero space='40px'>
                <Container>
                    <Content>
                        <div>
                            <NavTitle>聯絡資訊</NavTitle>
                            <Nav>
                                <NavItem>
                                    <i class="fas fa-map-marker-alt"></i>
                                    <a href="#!">高雄市前金區中山一路</a>
                                </NavItem>
                                <NavItem>
                                    <i class="fas fa-phone"></i>
                                    <a href="#!">07-123-4567</a>
                                </NavItem>
                            </Nav>
                            <SocialBtnGroup>
                                <SocialBtn href="#!">
                                    <i class="fab fa-facebook-f"></i>
                                </SocialBtn>
                                <SocialBtn href="#!">
                                    <i class="fab fa-google-plus-g"></i>
                                </SocialBtn>
                                <SocialBtn href="#!">
                                    <i class="fab fa-twitter"></i>
                                </SocialBtn>
                                <SocialBtn href="#!">
                                    <i class="fab fa-dribbble"></i>
                                </SocialBtn>
                                <SocialBtn href="#!">
                                    <i class="fab fa-behance"></i>
                                </SocialBtn>
                            </SocialBtnGroup>
                        </div>
                        <NavBar>
                            <NavRow>
                                <NavTitle>關於</NavTitle>
                                <Nav>
                                    <NavItem><a href="#!">故事</a></NavItem>
                                    <NavItem><a href="#!">事紀</a></NavItem>
                                    <NavItem><a href="#!">理念</a></NavItem>
                                    <NavItem><a href="#!">創始</a></NavItem>
                                </Nav>
                            </NavRow>
                            <NavRow>
                                <NavTitle>服務</NavTitle>
                                <Nav>
                                    <NavItem><a href="#!">退貨</a></NavItem>
                                    <NavItem><a href="#!">換貨</a></NavItem>
                                    <NavItem><a href="#!">客服</a></NavItem>
                                    <NavItem><a href="#!">流程</a></NavItem>
                                </Nav>
                            </NavRow>
                            <NavRow>
                                <NavTitle>物流</NavTitle>
                                <Nav>
                                    <Delivery img={Seven} />
                                    <Delivery img={FamilyMart} />
                                    <Delivery img={BlackCat} />
                                </Nav>
                            </NavRow>
                        </NavBar>
                    </Content>
                    <div style={{ marginTop: '30px'}}>
                        <FooterBrand />
                    </div>
                </Container>
            </Hero>
        </StyledFooter>
    );
};

export default Footer;