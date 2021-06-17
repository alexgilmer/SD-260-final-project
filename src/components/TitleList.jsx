import React, { useEffect, useState } from 'react';
import Movie from './Movie';
import { getPopular } from '../utilities/tmdbAPI';
import { getList, setList } from '../utilities/watchListAPI';

const TitleList = ({ name, id }) => {
  const [shows, setShows] = useState([]);
  const [favList, setFavList] = useState([]);

  const updateFaves = () => {
    setFavList(getList())
  };

  useEffect(() => {
    updateFaves();
  }, []);

  useEffect(() => {
    getPopular(id)
    .then(data => setShows(data));
  }, [id]);

  const changeFav = (id) => {
    const isOnList = favList.includes(id);
    if (isOnList) {
      setList(favList.filter(elem => elem !== id));
    } else {
      setList([...favList, id]);
    }
    updateFaves();
  }

  return (
  <div className="titleList">
    <div className="title">
      <h1>{name}</h1>
      <div className="titles-wrapper">
        {shows.map((show, index) => {
          return (
          <Movie
            item={show}
            isOnList={favList.includes(show.id)}
            changeFavCB={changeFav}
            key={index}
          />);
        })}
      </div>
    </div>
  </div>
  );
}

export default TitleList;
