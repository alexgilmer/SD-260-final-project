import React from 'react';
import { useParams } from 'react-router-dom';

const PageSearch = (props) => {
  const { query } = useParams();
  console.log(query);

  return (
    <></>
  );
}
 
export default PageSearch;
