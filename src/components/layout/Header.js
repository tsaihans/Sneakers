import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Container from "../common/Container";
import Brand from "../../image/Brand.png";
import SearchBox from "../common/SearchBox";

const StyledHeader = styled.header`
    background-color: #4c5870;
    width: 100vw;
    padding-top: 8px;
    padding-bottom: 8px;
    color: #ebedec;
`
const HeaderSection = styled.div`
    display: flex;
    justify-content: space-between;
    padding-top: 6px;
`

const Navigator = styled.div`
    display: flex;
`

const SearchInput = styled.div`
    margin: 16px 0px;
`

const NavBar = styled.ul`
    list-style-type: none;
    display: flex;
    padding-inline-start: 0px;
`

const NavItem = styled.li`
    padding: 0px 16px;
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


const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <HeaderSection>
                    <div>
                        <Link to="/">
                            <img src={Brand} height={40} />
                        </Link>
                    </div>
                    <Navigator>
                        <SearchInput>
                            <SearchBox />
                        </SearchInput>
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
                    </Navigator>
                </HeaderSection>
            </Container>
        </StyledHeader>
    );
};

export default Header;