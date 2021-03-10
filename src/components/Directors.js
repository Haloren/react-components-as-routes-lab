import React from 'react';
import { directors } from '../data';

const Directors = () => {
  // console.log(directors)
  const listDirectors = directors.map((director, index) => 
    <div key={index}>
      <h1>{director.name}</h1>
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
