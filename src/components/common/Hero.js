import styled, { css } from "styled-components";

const Hero = styled.div`
    padding-top: ${props => props.gap || "200px"};
    padding-bottom: ${props => props.gap || "200px"};
`

export default Hero;