import styled from "styled-components";

const Hero = styled.div`
    padding-top: ${props => props.padding || "60"}px;
    padding-bottom: ${props => props.padding || "60"}px;
    background-color: ${props => props.color || "transparent"};
`

export default Hero;