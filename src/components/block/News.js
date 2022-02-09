import React from "react";
import styled from "styled-components";
import NewsBox from "../common/NewsBoxjs";
import news1 from "../../image/news/news1.jpg";
import news2 from "../../image/news/news2.jpeg";
import news3 from "../../image/news/news3.jpg";
import news4 from "../../image/news/news4.jpg";
import news5 from "../../image/news/news5.jpg";
import news6 from "../../image/news/news6.jpg";

const NewContainer = styled.div`
`

const NewsContainerTitle = styled.div`
    margin: 0px 20px 0px 20px;
    padding-bottom: 4px;
    border-bottom: 2px solid #4c5870;
    font-size: 48px;
    color: #4c5870;
`

const Row = styled.div`
    display: flex;
    flex-direction: row;
    flex: 1;
    justify-content: space-between;
`


const NewsSection = () => {
    return (
        <NewContainer>
            <NewsContainerTitle>NEWS</NewsContainerTitle>
            <Row>
                <NewsBox 
                title={"官方新聞 / 把麥塊穿上身 PUMA X MINECRAFT 聯名系列 2 月 8 日開賣"} 
                newsImg={news1} 
                tags={["CITY RIDER", "MINCRAFT", "PUMA"]}
                author={"Hans Tsai"}
                date={"Jan 07, 2022"}
                views={797}
                />
                <NewsBox 
                title={"新聞分享 / Nike PG 6 正式發表 Paul George 球隊活動上實著曝光新配色"} 
                newsImg={news2}
                tags={["BASKETBALL","NIKE","PAUL GEOOGE"]}
                author={"Mark Chou"}
                date={"Feb 02, 2022"}
                views={399}
                />
            </Row>
            <Row>
                <NewsBox 
                title={"新聞分享 / 當經典遇上史詩英雄 DC 正義聯盟 X PUMA Suede 登場"} 
                newsImg={news3}
                tags={["DC","JUSTICE LEAGUE","PUMA"]}
                author={"Dr.J"}
                date={"DEC 27, 2021"}
                views={1023}
                />
                <NewsBox 
                title={"上市速報 / 361° AG2 「太空藍」、「圖騰」臺灣販售資訊整理"} 
                newsImg={news4}
                tags={["361","AARON GORDON","AG2"]}
                author={"The Goat"}
                date={"Nov 07, 2021"}
                views={16788}
                />
            </Row>
            <Row>
                <NewsBox 
                title={"上市速報 / UA Storm 系列 HOVR Infinite 3、HOVR Sonic 4 白色款臺灣販售資訊整理"} 
                newsImg={news5}
                tags={["HOVR INFINITE 3 STORM","HOVR SONIC 4 STORM","UNDER ARMOUR"]}
                author={"Steph"}
                date={"Nov 25, 2021"}
                views={677}
                />
                <NewsBox 
                title={"新聞分享 / Sacai X Nike 最新合作阿甘鞋 下一雙熱門女款保證？"} 
                newsImg={news6}
                tags={["CORTEZ","NIKE","NIKE X SACAI"]}
                author={"Sheep"}
                date={"Nov 01, 2021"}
                views={12501}
                />
            </Row>
        </NewContainer>
    );
};

export default NewsSection;