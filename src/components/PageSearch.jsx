import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Movie from './Movie';
import { search } from '../utilities/tmdbAPI';

const PageSearch = (props) => {
  const location = useLocation();
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const query = new URLSearchParams(location.search).get('query');
    search(query)
    .then(data => {
      setShows(data);
    });
  }, [location.search]);

  return (
  <div className="titleList">
    <div className="title">
      <h1>Results</h1>
      <div className="titles-wrapper">
        {shows.map((show, index) => {
          return <Movie item={show} key={index}/>;
        })}
      </div>
    </div>
  </div>
  );
}
 
export default PageSearch;
