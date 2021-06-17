import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Movie from './Movie';

const PageSearch = (props) => {
  const location = useLocation();

  useEffect(() => {
    const query = new URLSearchParams(location.search).get('query');
    console.log(query);
  }, [])

  return (
  <div className="titleList">
    <div className="title">
      <h1>Results</h1>
      <div className="titles-wrapper">
        <Movie />
        <Movie />
      </div>
    </div>
  </div>
  );
}
 
export default PageSearch;
