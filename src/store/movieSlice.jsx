import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const api_key = '528b33d5'
const BASE_URL = 'https://www.omdbapi.com/';


export const fetchMovies = createAsyncThunk('movies/fetchMovies', async (query) => {
    const response = await axios.get(BASE_URL, {
        params: {
            apikey: api_key,
            s: query,
        }
    })

    return response.data.Search || []
})

export const fetchMovieDetails = createAsyncThunk('movies/fetchMovieDetails', async (id) => {
  const response = await axios.get(BASE_URL, {
    params: {
      apikey: api_key,
      i: id,
    },
  });
  return response.data;
});


const movieSlice = createSlice({
    name: 'movies',
    initialState: {
        movies: [],
        selectedMovie: null,
        status: 'idle'
        
    },
    reducers: {
        clearSelectedMovie: (state) => {
            state.selectedMovie = null
        }
    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchMovies.fulfilled, (state, action) => {
                state.movies = action.payload
            })
            .addCase(fetchMovieDetails.fulfilled, (state, action) => {
                state.selectedMovie = action.payload
            })
    }
})

export const { clearSelectedMovie } = movieSlice.actions;
export default movieSlice.reducer;