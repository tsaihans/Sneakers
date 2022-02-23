import styled from "styled-components";

const Container = styled.div`
    margin: auto;
    width: ${(props) => props.width || 70}%;
    background-color: transparent;

    @media(max-width: 540px) {
        width: 85%;
    }
`

export default Container;