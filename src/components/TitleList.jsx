import React, { useEffect, useState } from 'react';
import Movie from './Movie';
import { getList, setList } from '../utilities/watchListAPI';

const TitleList = ({ name, shows }) => {
  const [favList, setFavList] = useState([]);

  const updateFaves = () => {
    setFavList(getList())
  };

  useEffect(() => {
    updateFaves();
  }, []);

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
