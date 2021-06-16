import React from 'react';
import Movie from './Movie';

const TitleList = (props) => {
  return (
  <div class="titleList">
    <div class="title">
      <h1>Netflix</h1>
      <div class="titles-wrapper">
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
      </div>
    </div>
  </div>
  );
}

export default TitleList;
