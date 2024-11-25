import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovies, fetchMovieDetails, clearSelectedMovie } from '../store/movieSlice.jsx';

const MovieSearch = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();
  const { movies, selectedMovie } = useSelector((state) => state.movies);

  const handleSearch = () => {
    dispatch(fetchMovies(query));
    dispatch(clearSelectedMovie());
  };

  const handleSelectMovie = (id) => {
    dispatch(fetchMovieDetails(id));
  };
 
  return (
    <div>
      <h1 className='px-5 font-bebas text-primary'>NETFLIX </h1>
      <input
        type="text"
        placeholder="Search for a movie..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {selectedMovie ? (
        <div>
          <h2>{selectedMovie.Title}</h2>
          <p>{selectedMovie.Plot}</p>
          <img src={selectedMovie.Poster} alt={selectedMovie.Title} />
          <button onClick={() => dispatch(clearSelectedMovie())}>Back to Search</button>
        </div>
      ) : (
        <ul>
          {movies.map((movie) => (
            <li key={movie.imdbID} onClick={() => handleSelectMovie(movie.imdbID)}>
              {movie.Title} ({movie.Year})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MovieSearch;
