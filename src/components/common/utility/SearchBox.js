import React, { useState } from "react";
import styled, { css } from "styled-components";

const Search = styled.div`
    display: flex;
`

const StyledSearch = styled.div`
    cursor: pointer;
    border: none;
    background-color: transparent;
    padding: 0px 10px;
    font-size: 16px;
    text-align: center;
    &:hover{
        i {
            color: #a2a9af;
        } 
    }
`

const SearchInput = styled.input`
    border: none;
    outline: none;
    transition: width 0.5s;
    ${(props) =>
    props.open ?
    css`
        width: 200px;
        padding: 0px 10px;
        
    ` :
    css`
        width: 0px;
        height: 0px;
        padding: 0px;
    `
    }
`


const SearchBox = () => {
    const [ searchStart, setSearchStart ] = useState(false)
    return (
        <Search>
            <StyledSearch onClick={() => setSearchStart(!searchStart)}>
                <i className="fas fa-search" ></i>
            </StyledSearch>
            <SearchInput open={searchStart} />
        </Search>
    );
};

export default SearchBox;