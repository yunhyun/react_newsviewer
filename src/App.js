// 카테고리 값을 useState 로 관리
import React, { useState, useCallback } from 'react';
import axios from 'axios';
import NewsList from './components/NewsList';
import Categories from './components/Categories';

const App = () => {
  const [category, setCategory] = useState('all');
  const onSelect = useCallback(category => setCategory(category), []);
  return (
    <>
    {/* category 작성 후 Categories.js 에서 props 설정 */}
    <Categories category={category} onSelect={onSelect} />
    <NewsList category={category} />
    </>
  );
};

export default App;