import React from "react";
import styled from "styled-components";

const Article = styled.div`
    flex: 1;
    margin: 20px;
`

const NewsImgContainer = styled.a`
    color: #40414f;
    font-size: 16px;
`

const NewsImage = styled.div`
    background-image: ${(props) => `url(${props.img})`};
    background-size: cover;
    background-position: center;
    padding-top: 60%;
    margin-bottom: 8px;
    position: relative;
` 

const NewsInfo = styled.div`
    display: flex;
    padding-top: 2px;
    padding-left: 2px;
    font-size: 14px;
`

const TagSection = styled.div`
    display: flex;
    position: absolute;
    bottom: 0;
    left: 0;
`

const StyledTag = styled.span`
    font-size: 14px;
    margin-right: 5px;
    background-color: #1e73be;
    color: #ffffff;
    padding: 2px 6px;
    text-transform: uppercase;
    border-radius: 2px;
`

const StyleAuthor = styled.div`
    color: #40414f;
    margin-right: 8px;
`

const StyledDate = styled.div`
    margin-right: 8px;

    i {
        font-size: 12px;
        margin-right: 4px;
    }
`

const StyledViews = styled.div`
    color: ${(props) => props.views > 10000 ? "#FF1F1F" : (props.views > 500) ? "#EA7500" : "#40414f"};

    i {
        font-size: 14px;
        margin-right: 4px;
    }
`

const NewsBox = ({
    title,
    newsImg,
    author,
    date,
    views,
    tags
}) => {
    return (
        <Article>
            <NewsImgContainer href="#!">
                <NewsImage img={newsImg}>
                    <TagSection>
                        {
                            tags &&
                            tags.map((item, index) => <StyledTag left={item.length}>{item}</StyledTag>)
                        }
                    </TagSection>
                </NewsImage> 
                {title}    
            </NewsImgContainer>
            <NewsInfo>
                <StyleAuthor>{author}</StyleAuthor>
                <StyledDate>
                    <i class="fas fa-circle"></i>
                    {date}
                </StyledDate>
                <StyledViews views={views}>
                    <i class="far fa-fire-alt"></i>
                    {views}
                </StyledViews>
            </NewsInfo>
        </Article>
    );
};

export default NewsBox;