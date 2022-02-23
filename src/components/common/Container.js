import styled from "styled-components";

const Container = styled.div`
    margin: auto;
    width: ${(props) => props.width || 70}%;
    background-color: transparent;
`

export default Container;