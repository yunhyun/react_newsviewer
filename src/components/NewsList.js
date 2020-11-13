// useState : 컴포넌트 상태관리 함수 
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import axios from 'axios';

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const NewsList = () => {
    const [articles, setArticles] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await axios.get('http://newsapi.org/v2/top-headlines?country=kr&apiKey=ed63b771c9d8468f9aa031b1de62f8e8',);
                setArticles(response.data.articles);// 전체 기사 불러오기
            } catch(e) {
                console.log(e);
            }
            setLoading(false);
        };
        fetchData();
    },
    [] );

    // 대기 중일때 
    if(loading) {
        return <NewsListBlock>대기중..</NewsListBlock>;
    }
    if(!articles) {
        return null;
    }

    // 기사가 있을 때 
    return (
        <NewsListBlock>
            {articles.map(article => (
                <NewsItem key={article.url} article={article} />
            ))}
        </NewsListBlock>
    );

};

export default NewsList;