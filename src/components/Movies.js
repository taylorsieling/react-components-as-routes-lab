import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {movies.map((movie, i) => (
          <div key={i}>
            <h3>{movie.title}</h3>
            <p>{movie.time} minutes</p>
            <p>
              <ul>
                {movie.genres.map((genre, i) => (
                  <li key={i}>{genre}</li>
                ))}
              </ul>
            </p>
          </div>
        ))}
    </div>
  );
};

export default Movies;
