import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from './movieSlice.jsx';

const store = configureStore({
  reducer: {
    movies: moviesReducer,
  },
});

export default store;
