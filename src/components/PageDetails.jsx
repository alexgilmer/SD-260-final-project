import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDetails } from '../utilities/tmdbAPI';
import { getList, setList } from '../utilities/watchListAPI';

const PageDetails = (props) => {
  const { id } = useParams();
  const [show, setShow] = useState({});
  const [favList, setFavList] = useState([]);

  const updateFaves = () => {
    setFavList(getList())
  };

  useEffect(() => {
    updateFaves();
  }, []);

  const changeFav = () => {
    if (isOnList) {
      setList(favList.filter(elem => elem !== id));
    } else {
      setList([...favList, id]);
    }
    updateFaves();
  };

  useEffect(() => {
    getDetails(id)
    .then(data => {
      setShow(data);
    });
  }, [id]);

  const isOnList = favList.includes(id);

  return (
    <div className="show-details">
    <img src={`https://image.tmdb.org/t/p/original${show.backdrop_path}`} alt="" />
    <div className="show-details-inner">
      <h1>{show.name}</h1>
      <div className="description">
        {show.overview}
      </div>
      <button
        className={isOnList ? "remove-to-watchlist" : "add-to-watchlist"}
        onClick={() => changeFav()}
      >
        {isOnList ? '- Remove from' : '+ Add to'} watch list
      </button>
    </div>
  </div>
  );
}
 
export default PageDetails;
