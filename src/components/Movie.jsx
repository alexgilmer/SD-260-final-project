import React from 'react';
import { Link } from 'react-router-dom';

const Movie = ({ item, isOnList, changeFavCB }) => {
  return (
  <div className="movie">
    <Link to={`/details/${item.id}`}>
      <img src={item.poster_path ? `https://image.tmdb.org/t/p/w500${item.poster_path}` : 'image-not-available.jpg'} alt="Movie poster" />
      <div className="overlay">
        <div className="title">{item.name}</div>
        <div className="rating">{item.vote_average}/10</div>
        <div className="plot">
          {item.overview}
        </div>
      </div>
    </Link>
    <div
      data-toggled={isOnList}
      className="listToggle"
      onClick={() => changeFavCB(item.id)}
    >
      <div><i className="fa fa-fw fa-plus"></i><i className="fa fa-fw fa-check"></i></div>
    </div>
  </div>
  );
}

export default Movie;
