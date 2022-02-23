import React, { useContext } from "react";
import styled, { css } from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import Container from "../common/Container";
import Brand from "../../image/Brand.png";
import SearchBox from "../common/utility/SearchBox";
import AuthContext from "../auth/AuthContext";
import Clearfix from "../common/Clearfix";

import { useSelector, useDispatch } from "react-redux";
import { cartItems, cartVisibleState, openCart } from "../../features/cart/cartSlice";
import PopupCart from "../common/utility/PopupCart";

const StyledHeader = styled.header`
    background-color: #4c5870;
    width: 100%;
    padding-top: 8px;
    padding-bottom: 8px;
    color: #ebedec;
    ${(props) => props.fixed && css`
    position: fixed;
    z-index: 999;
    `}
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
    margin: 14px 0px;
`

const NavBar = styled.ul`
    list-style-type: none;
    display: flex;
    padding-inline-start: 0px;

    @media(max-width: 1440px) {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.9);
        z-index: 999;

        display: flex;
        flex-direction: column;
        justify-content: center;

        opacity: 0; /* 透明度 */
        visibility: hidden;
        transition: all 0.3s;

        &:target {
        opacity: 1;
        visibility: visible;
        }

        li {
            text-align: center;
            margin: 12px 0px;
        }

        li a {
            font-size: 30px;
        }

        div {
            text-align: center;
            margin: 12px 0px;
            font-size: 30px;
        }

    }
`

const NavToggle = styled.a`
    display: none;
    position: relative;
    
    @media(max-width: 1440px) {
        display: block;
        margin-left: 36px;
        margin-top: 2px;

        span {
            width: 32px;
            height: 2px;
            background-color: #E0E0E0;

            position: absolute;
            right: 0;
        }

        span:nth-child(1) {
            top: 12px;
        }

        span:nth-child(2) {
            top: 22px;
        }

        span:nth-child(3) {
            top: 32px;
        }
    }
`

const CloseNav = styled.a`
    @media(max-width: 1440px) {

        position: absolute;
        top: 40px;
        right: 40px;
        display: block;
        span {
            width: 40px;
            height: 2px;
            background-color: #f0f0f0;
            position: absolute;
            top: 50%;
            left: 50%;
        }

        span:nth-child(1) {
            transform: translate(-50%, -50%) rotate(45deg);
        }
        
        span:nth-child(2) {
            transform: translate(-50%, -50%) rotate(-45deg);
        }
    }
`

const NavItem = styled.li`
    font-size: 16px;
    margin: 12px 16px 0px 16px;
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

        div {
            color: #a2a9af;
            cursor: pointer;
        }
    }

    a i{
        padding-left: 5px;
        vertical-align: text-top;
    }

    position: relative;
`

const StyledLogout = styled.div`
    font-size: 16px;
    margin: 12px 16px 0px 16px;
    cursor: pointer;

    i {
        padding-left: 5px;
        vertical-align: text-top;
    }
`

const StyledCart = styled.span`
    position: absolute;
    top: -6px;
    right: -16px;
    width: 16px;
    height: 16px;
    background-color: #ebedec;
    color: #4c5870;
    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 10px;
`


const Header = ( { fixed }) => {

    const { isAuthenticated, logout} = useContext(AuthContext);
    const navigate = useNavigate();

    const cart = useSelector(cartItems);
    const cartVisible = useSelector(cartVisibleState);
    const dispatch = useDispatch();

    return (
        <div>
            <StyledHeader fixed = {fixed}>
                <Container width={80}>
                    <HeaderSection>
                        <div>
                            <Link to="/">
                                <img src={Brand} height={40} style={{ marginTop: '6px'}} />
                            </Link>
                        </div>
                        <Navigator>
                            <SearchInput>
                                <SearchBox />
                            </SearchInput>
                            <NavToggle href="#popup-menu">
                                <span></span>
                                <span></span>
                                <span></span>
                            </NavToggle>
                            <NavBar id="popup-menu">
                                <CloseNav a href="#!">
                                    <span></span>
                                    <span></span>
                                </CloseNav>
                                <NavItem>
                                    <Link to="/sneakers/about">
                                        About<i class="fas fa-book-open"></i>                                
                                    </Link>
                                </NavItem>
                                <NavItem>
                                    <a href="/Sneakers/#news">
                                        News<i class="far fa-comment-alt-lines"></i>                       
                                    </a>
                                </NavItem>
                                <NavItem>
                                    <a href="/Sneakers/#location">
                                        Contact<i class="fas fa-map-marker-alt"></i>                               
                                    </a>
                                </NavItem>
                                {
                                    isAuthenticated ? 
                                    <React.Fragment>
                                        <NavItem>
                                            <div onClick={() => dispatch(openCart())}>
                                                <div>Cart</div>
                                                { cart.length ? <StyledCart>{cart.length}</StyledCart> : <div></div>}
                                            </div>
                                        </NavItem>
                                        <StyledLogout onClick={logout}>
                                            Logout<i class="fas fa-sign-out-alt"></i>
                                        </StyledLogout> 
                                    </React.Fragment> : 
                                    <NavItem>
                                        <Link to="/sneakers/login">
                                        Login<i class="fas fa-user"></i>  
                                        </Link>
                                    </NavItem>
                                }
                            </NavBar>
                            <PopupCart cartVisible={cartVisible}></PopupCart>
                        </Navigator>
                    </HeaderSection>
                </Container>
            </StyledHeader>
            {
                fixed && <Clearfix />
            }
        </div>
    );
};

export default Header;