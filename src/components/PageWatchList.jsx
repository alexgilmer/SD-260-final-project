import React, { useState, useEffect } from 'react';
import { getDetails } from '../utilities/tmdbAPI';
import Movie from './Movie';
import { getList, setList } from '../utilities/watchListAPI';

const PageWatchList = () => {
  const [showList, setShowList] = useState([]);
  const [favList, setFavList] = useState([]);

  const updateFaves = () => {
    setFavList(getList())
  };

  useEffect(() => {
    updateFaves();
  }, []);

  useEffect(() => {
    Promise.all(favList.map(id => {
      return getDetails(id);
    }))
    .then(list => {
      setShowList(list);
    });
  }, [favList])

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
        <h1>My Watch List</h1>
        <div className="titles-wrapper">
          {showList.map((show) => {
            return (
              <Movie
                item={show}
                key={show.id}
                isOnList={true}
                changeFavCB={changeFav}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
 
export default PageWatchList;
