import React from 'react';
import TitleList from './TitleList';

const PageHome = (props) => {
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
  return (
    <>
      {services.map(service => {
        return (
        <TitleList
          name={service.name}
          id={service.id}
          key={service.id}
        />
        );
      })}
    </>
  );
}
 
export default PageHome;
