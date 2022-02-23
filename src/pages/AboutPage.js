import React from  "react";
import styled from "styled-components";
import Container from "../components/common/Container";
import Hero from "../components/common/Hero";
import DefaultLayout from "../components/layout/DefaultLayout";

import author from "../image/hans.png";

const AuthorWrapper = styled.div`
    display: flex;
    background-color: #fbfbfb;
    padding: 40px 20px;
    border-radius: 80px;
    position: relative;
`

const ImageContainer = styled.div`
    width: 25%;
    text-align: center;
    margin-left: 40px;
    margin-right: 80px;

    span {
        font-size: 20px;
    }
`

const AuthorImage = styled.div`
    background-image: url(${author});
    width: 100%;
    border: 1px solid #b2bac4;
    border-radius: 50%;
    box-sizing: border-box;
    overflow: hidden;
    margin-bottom: 20px;

    &:before {
        content: "";
        display: block;
        padding-top: 100%;
    }
`

const DescriptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const DescriptionColumn = styled.div`
    padding-left: 14px;
    padding-bottom: 10px;
    font-size: 16px;
    position: relative;

    &:before {
        content: "";
        position: absolute;
        top: 8px;
        left: 0;
        width: 6px;
        height: 6px;
        border: 1px solid black;
        border-radius: 50%;
        background-color: black;
    }
`

const SkillList = styled.div`
    padding-left: 20px;
    padding-bottom: 6px;
`

const Statement = styled.div`
    color: #BEBEBE;
    position: absolute;
    bottom: 0;
    right: 80px;
`

const AboutPage = () => {
    return(
        <DefaultLayout>
            <Container>
                <Hero>
                    <AuthorWrapper>
                        <ImageContainer>
                            <AuthorImage />
                            <span>Hans Tsai</span>
                        </ImageContainer>
                        <DescriptionContainer>
                            <DescriptionColumn>國立高雄大學 運動健康與休閒學系</DescriptionColumn>
                            <DescriptionColumn>國立中正大學 資訊管理學系研究所</DescriptionColumn>
                            <DescriptionColumn>Birth: 1996/11</DescriptionColumn>
                            <DescriptionColumn>Skill in This Project</DescriptionColumn>
                            <SkillList>(1) HTML/CSS</SkillList>
                            <SkillList>(2) React.js</SkillList>
                            <SkillList>(3) Redux</SkillList>
                            <SkillList>(4) Git</SkillList>
                            <SkillList>(5) npm/yarn</SkillList>
                        </DescriptionContainer>
                        <Statement>此作品為無涉及任何商業行為</Statement>
                    </AuthorWrapper>
                </Hero>
            </Container>
        </DefaultLayout>
    );
};

export default AboutPage;