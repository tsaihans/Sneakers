import React from "react";
import styled from "styled-components";

const ContactSectionTitle = styled.div`
    margin-bottom: 20px;
    padding-bottom: 4px;
    color: #333;
    border-bottom: 2px solid #333;
    font-size: 48px;
`

const ContactContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
` 

const ContactInfo = styled.div`
    display: flex;
    margin: 10px 20px 20px 20px;
    flex-direction: column;
    justify-content: space-evenly;
    color: #4c5870;
`

const Title = styled.div`
    display: block;
    font-size: 24px;
    margin-bottom: 8px;
`

const Info = styled.div`
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
const MapContainer = styled.div`
    width: 600px;

    @media(max-width: 1440px) {
        width: 100%;
    }
`

const ContactSection = () => {
    return (
        <div>
            <ContactSectionTitle>CONTACT</ContactSectionTitle>
            <ContactContainer>
                <ContactInfo>
                    <Title>PHONE&TEL</Title>
                    <Info>
                        <i class="fas fa-phone"></i>
                        07-123-4567
                    </Info>
                    <Title>LOCATION</Title>
                    <Info>
                        <i class="fas fa-map-marker-alt"></i>
                        ??????????????????????????????
                    </Info>
                    <Title>HOURS</Title>
                    <Info>
                        <i class="fas fa-map-marker-alt"></i>
                        ?????? 11:00 ????????? 6:00???????????????
                    </Info>
                    <Title>SOCIAL NETWORK</Title>
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
                </ContactInfo>
                <MapContainer>
                    <iframe width="100%" height="400" style={{ border: 0 }} loading="lazy" allowfullscreen src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJUxqWpocEbjQRIUwU_iCWP4w&key=AIzaSyAV_xUbg2TtwFyyXOyOVNkzfHqutu8PKzo"></iframe>
                </MapContainer>
            </ContactContainer>    
        </div>
    );
};

export default ContactSection;