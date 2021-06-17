import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Movie from './Movie';
import { search } from '../utilities/tmdbAPI';
import { setList, getList } from '../utilities/watchListAPI';

const PageSearch = (props) => {
  const location = useLocation();
  const [shows, setShows] = useState([]);
  const [favList, setFavList] = useState([]);

  const updateFaves = () => {
    setFavList(getList())
  };

  useEffect(() => {
    updateFaves();
  }, []);

  useEffect(() => {
    const query = new URLSearchParams(location.search).get('query');
    search(query)
    .then(data => {
      setShows(data);
    });
  }, [location.search]);

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
      <h1>Results</h1>
      <div className="titles-wrapper">
        {shows.map((show, index) => {
          return (
            <Movie
              item={show}
              isOnList={favList.includes(show.id)}
              changeFavCB={changeFav}
              key={index}
            />
          );
        })}
      </div>
    </div>
  </div>
  );
}
 
export default PageSearch;
