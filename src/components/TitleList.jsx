import React, { useEffect, useState } from 'react';
import Movie from './Movie';
import { getPopular } from '../utilities/tmdbAPI';

const TitleList = ({ name, id }) => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    getPopular(id)
    .then(data => setShows(data));
  }, [id]);

  return (
  <div className="titleList">
    <div className="title">
      <h1>{name}</h1>
      <div className="titles-wrapper">
        {shows.map((show, index) => {
          return <Movie item={show} key={index} />;
        })}
      </div>
    </div>
  </div>
  );
}

export default TitleList;
