import styled from "styled-components";

const PrimaryBtn = styled.button`
    display: inline-block;
    vertical-align: center;
    cursor: pointer;
    font-size: 16px;
    line-height: 24px;
    padding: 8px 32px;
    border: 1px solid;
    border-radius: 4px;
    transition: all 0.3s;
    background-color: #4c5870;
    border-color: #4c5870;
    color: ${(props) => props.color || "#fff"};

    &:hover{
        background-color: #3B5381;
        border-color: #3B5381;
    }
`

export default PrimaryBtn;