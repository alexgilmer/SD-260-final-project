import React, { useState, useEffect } from 'react';
import { getDetails } from '../utilities/tmdbAPI';
import { getList } from '../utilities/watchListAPI';
import TitleList from './TitleList';

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

  return (
    <TitleList
      shows={showList}
      name="My Watch List"
    />
  );
}
 
export default PageWatchList;
