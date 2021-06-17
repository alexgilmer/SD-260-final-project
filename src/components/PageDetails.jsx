import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDetails } from '../utilities/tmdbAPI';


const PageDetails = (props) => {
  const { id } = useParams();
  const [show, setShow] = useState({});

  useEffect(() => {
    getDetails(id)
    .then(data => {
      setShow(data);
    });
  }, [id]);

  return (
    <div className="show-details">
    <img src={`https://image.tmdb.org/t/p/original${show.backdrop_path}`} alt="" />
    <div className="show-details-inner">
      <h1>{show.name}</h1>
      <div className="description">
        {show.overview}
      </div>
      <button className="remove-to-watchlist">- Remove from watch list</button>
    </div>
  </div>
  );
}
 
export default PageDetails;
