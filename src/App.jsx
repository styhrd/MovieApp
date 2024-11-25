import React,{useState} from 'react';

import "bootstrap-icons/font/bootstrap-icons.css";
import Nav from './components/Nav';
import MovieDisplay from './components/MovieDisplay';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovies, fetchMovieDetails, clearSelectedMovie } from './store/movieSlice.jsx'


const App = () => {
  
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();
  const { movies, selectedMovie } = useSelector((state) => state.movies);
  
  const handleSearch = () => {
      dispatch(fetchMovies(query));
      dispatch(clearSelectedMovie());
    };

  return (
    <div className='p-3 bg-[#0f0f0f] h-[100vh] w-full'>
      <Nav query = {query} setQuery = {setQuery} movies={movies} handleSearch={handleSearch} />
      <div className='text-white'>
        <MovieDisplay movies={movies} />
      </div>
      
    </div>
  );
};

export default App;
