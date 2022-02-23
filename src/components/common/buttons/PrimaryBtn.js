import styled from "styled-components";

const PrimaryBtn = styled.button`
    display: inline-block;
    box-sizing: border-box;
    vertical-align: center;
    cursor: pointer;
    font-size: 16px;
    line-height: 24px;
    padding: 16px 48px;
    border: 1px solid;
    border-radius: 20px;
    transition: all 0.3s;
    background-color: #4c5870;
    color: ${(props) => props.color || "#fff"};

    &:hover{
        background-color: rgba(76, 88, 112, 0.8);
    }
`

export default PrimaryBtn;