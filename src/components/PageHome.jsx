import React, { useEffect, useState } from 'react';
import { getPopular } from '../utilities/tmdbAPI';
import TitleList from './TitleList';

const services = [
  {
    name: 'Netflix',
    id: 8
  }, 
  {
    name: 'Crave',
    id: 230
  }, 
  {
    name: 'Disney',
    id: 337
  }, 
  {
    name: 'Apple Plus',
    id: 350
  }
];

const PageHome = (props) => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    Promise.all(
      services.map(service => {
        return getPopular(service.id);
      })
    ).then(results => {
      setShows(results);
    });
  }, []);

  return (
    <>
      {shows.map((showList, index) => {
        return (
        <TitleList
          name={services[index].name}
          shows={showList}
          key={services[index].id}
        />
        );
      })}
    </>
  );
}
 
export default PageHome;
