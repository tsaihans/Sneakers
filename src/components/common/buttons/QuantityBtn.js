import React from "react";
import styled from "styled-components";

const QuantityBtnContainer = styled.div`
    display: flex;
    align-items: center;
    width: 150px;
    justify-content: space-between;
`

const StyledBtn = styled.button`
    width: 36px;
    height: 36px;
    font-size: 24px;
    text-align: center;
    line-height: 1;
    border: 2px solid #4c5870;
    border-radius: 50%;
    background-color: transparent; 
    cursor: pointer;
`

const Quantity = styled.div`
    padding: 0 20px;
    font-size: 24px;
`

const QuantityBtn = ({
    stock,
    count,
    setCount
}) => {
    return (
        <QuantityBtnContainer>
            <StyledBtn onClick={() => count === 1 ? count : setCount(count-1)}>-</StyledBtn>
            <Quantity>{count}</Quantity>
            <StyledBtn onClick={() => count === stock ? count : setCount(count+1)}>+</StyledBtn>
        </QuantityBtnContainer>
    );
};

export default QuantityBtn;