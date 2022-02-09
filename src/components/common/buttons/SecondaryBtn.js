import styled from "styled-components";

const SecondaryBtn = styled.button`
    display: inline-block;
    vertical-align: center;
    cursor: pointer;
    font-size: 16px;
    line-height: 24px;
    padding: 8px 32px;
    border: 1px solid;
    border-radius: 4px;
    transition: all 0.3s;
    background-color: transparent;
    border-color: #859BC7;
    color: ${(props) => props.color ||  "#859BC7"};

    &:hover{
        background-color: #859BC7;
        color: ${(props) => props.color || "#fff"};
    }
`

export default SecondaryBtn;