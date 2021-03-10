import React from 'react';
import { directors } from '../data';

const Directors = () => {
  // console.log(directors)
  const listDirectors = directors.map((director, index) => 
    <div key={index}>
      <h3>{director.name}</h3>
      <ul>
        {director.movies.map((movie, index) => <li key={index}>{movie}</li>)}
      </ul>
    </div>
  )

  return (
    <div>
      <h1 style={{textAlign:'center'}}>Directors Page</h1>
      {listDirectors}
    </div>
  );
}

export default Directors
