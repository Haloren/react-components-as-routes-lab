import React from 'react';
import { movies } from '../data';

const Movies = () => {
  // console.log(movies)
  const listMovies = movies.map((movie, index) => 
    <div key={index}>
      <h3 style={{margin:'0'}}>{movie.title} <small>({movie.time} mins)</small></h3>
      <ul>
        {movie.genres.map((genre, index) => <li key={index} style={{display:"inline"}}>{genre} </li>)}
      </ul>
      <hr></hr>
    </div>
  )
  return (
    <div>
        <h1 style={{textAlign:'center'}}>Movies Page</h1>
        {listMovies}
    </div>
  );
};

export default Movies;
