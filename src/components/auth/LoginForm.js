import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import loginImg from "../../image/login.jpg";
import MaskBlue from "../common/MaskBlue";

import { Input, message } from "antd";
import { EyeTwoTone, EyeInvisibleOutlined } from "@ant-design/icons";

import AuthContext from "./AuthContext";
import { useNavigate } from "react-router-dom";



const Account = styled.div`
    width: 40%;
    height: 70%;
    position: absolute;
    top: 15%;
    left: 30%;
    display: flex;
    text-align: center;
    box-shadow: 0 3px 30px rgb(0 0 0 / 30%);
    border-radius: 8px;

    @media(max-width: 1440px) {
        flex-direction: column;
    }
`

const CreateAccount = styled.div`
    display: flex;
    flex: 2;
    background-image: url(${loginImg});
    background-size: cover;
    background-position: center;
    z-index: 500;
    align-items: center;
    justify-content: center;
    
    h3 {
        font-size: 28px;
        color: #fefefe;
    }

    p {
        font-size: 20px;
        color: #fefefe;
    }
    
    @media(max-width: 1440px) {
        padding: 20px 0;
    }
`

const SignUpButton = styled.a`
    display: inline-block;
    font-size: 16px;
    line-height: 24px;
    padding: 12px 50px;
    margin-bottom: 10px;
    border: 1px solid #fefefe;
    border-radius: 26px;
    background: transparent;
    color: #fefefe;
    cursor: pointer;
    transition: all 0.3;
    text-decoration: none;

    &:hover {
        transform: scale(1.05);
        color: #fefefe;
        border: 1px solid #fefefe;
    }
`

const ConnectAccount = styled.a`
    border: 1px solid #ccc;
    display: inline-block;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    text-align: center;
    position: relative;
    margin-right: 12px;

    i {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: #fefefe;
    }

    &:hover {
        border: 1px solid #46A3FF;
        i {
            color: #46A3FF;
        }
    }

`

const LoginAccount = styled.div`
    flex: 3;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0px 20px;
    z-index: 500;
    background-color: #ebedec;

    h3 {
        font-size: 28px;
        color: #4c5870;
    }

    
    @media(max-width: 1440px) {
        padding: 20px 0;
    }
`

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 24px;
`

const StyledInputGroup = styled.div`
    display: flex;
    margin-bottom: 20px;
    width: 60%;
    margin-left: 20%;

    i {
    font-size: 16px;
    color: #aaa;
    padding-right: 4px;
    }
`

const LoginButton = styled.button`
    display: inline-block;
    width: 40%;
    margin: auto;
    font-size: 16px;
    line-height: 24px;
    padding: 12px 10px;
    border: 1px solid #4c5870;
    border-radius: 26px;
    background-color: #4c5870;
    color: #fefefe;
    cursor: pointer;
    transition: all 0.3;
    text-decoration: none;

    &:hover {
        transform: scale(1.05);
        color: #fefefe;
        border: 1px solid #4c5870;
    }
`

const LoginForm = () => {
    const { login, isAuthenticated } = useContext(AuthContext);
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');

    const navigate = useNavigate();

    const handleLogin = () => {
        login(username, password).then(( { token, error }) => {
            if (!token) {
                message.error(error)
            }
        });
    };

    useEffect(() => {
        isAuthenticated && navigate("/")
    }, [isAuthenticated]);


    return (
        <Account>
            <CreateAccount>
                <MaskBlue />
                <div>
                    <h3>Create Account</h3>
                    <SignUpButton>
                        SIGN UP
                    </SignUpButton>
                    <p>or connect with:</p>
                    <ConnectAccount>
                        <i class="fab fa-facebook-f"></i>
                    </ConnectAccount>
                    <ConnectAccount>
                        <i class="fab fa-google"></i>
                    </ConnectAccount>
                    <ConnectAccount>
                        <i class="fab fa-linkedin-in"></i>
                    </ConnectAccount>
                </div>
            </CreateAccount>
            <LoginAccount>
                <h3>Welcome Back!</h3>
                <p>To keep connected with us please
                login with your personal info.</p>
                <StyledForm>
                    <StyledInputGroup>
                        <Input 
                        size="large" 
                        placeholder="User" 
                        prefix={<i class="far fa-user"></i>}
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                        />
                    </StyledInputGroup>
                    <StyledInputGroup>
                        <Input.Password
                        prefix={<i class="fas fa-unlock-alt"></i>}
                        size="large"
                        placeholder="Passoword"
                        iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        />
                    </StyledInputGroup>
                    <LoginButton
                    onClick = {() => handleLogin()}
                    >
                    SIGN IN
                    </LoginButton>
                </StyledForm>
            </LoginAccount>
        </Account>
    );
};

export default LoginForm;