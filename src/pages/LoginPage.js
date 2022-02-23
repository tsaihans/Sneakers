import React from "react";
import styled from "styled-components";
import LoginForm from "../components/auth/LoginForm";
import DefaultLayout from "../components/layout/DefaultLayout";
import Background from "../image/bg/climbing.jpg";
import MaskDark from "../components/common/MaskDark";

const LoginFormContainer = styled.div`
    position: relative;
    height: 800px;
    background-image: ${`url(${Background})`};
    background-size: cover;
    background-position: center;
    text-align: center;

`

const LoginPage = () => {
    return (
        <DefaultLayout>
            <LoginFormContainer>
            <MaskDark />
                <LoginForm></LoginForm>
            </LoginFormContainer>
        </DefaultLayout>
    );
};

export default LoginPage;