import { async } from "@firebase/util";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../common/apis/movieApi";
import { APIkey } from "../common/apis/tmdbApiKey";

export const fetchAsyncTrendingMovies = createAsyncThunk(
  "movies/fetchAsyncTrendingMovies",
  async (term) => {
    const response = await movieApi.get(
      `/trending/movie/day?api_key=${APIkey}`
    );
    return response.data;
  }
);

const initialState = {
  trendingMovies: {},
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovies: (state, { payload }) => {
      state.movies = payload;
    },
  },
  extraReducers: {
    [fetchAsyncTrendingMovies.pending]: () => {
      console.log("Pending");
    },

    [fetchAsyncTrendingMovies.fulfilled]: (state, { payload }) => {
      console.log("Fetched succesfully");
      return { ...state, movies: payload };
    },
  },
});

export const { addMovies } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export default movieSlice.reducer;
