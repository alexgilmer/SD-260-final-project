import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { search } from '../utilities/tmdbAPI';
import TitleList from './TitleList';

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
    <TitleList
      shows={shows}
      name="Results"
    />
  );
}
 
export default PageSearch;
