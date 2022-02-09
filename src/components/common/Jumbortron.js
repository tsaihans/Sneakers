import styled from "styled-components";

const Jumbortron = styled.div`
    padding-top: 160px;
    padding-bottom: 160px;
    background-image: ${props => `url(${props.bg})`};
    background-size: cover;
    background-attachment: fixed;
    background-position: center;
    position: relative;
`

export default Jumbortron;