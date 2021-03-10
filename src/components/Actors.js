import React from 'react';
import { actors } from '../data';

const Actors = () => {
  // console.log(actors)
  const listActors = actors.map((actor, index) =>
    <div key={index}>
      <h3>{actor.name}</h3>
      <ul>
        {actor.movies.map((movie, index) => <li key={index}>{movie}</li>)}
      </ul>
    </div>
  )

  return (
    <div>
      <h1 style={{textAlign:'center'}}>Actors Page</h1>
      {listActors}
    </div>
  );
};

export default Actors;
