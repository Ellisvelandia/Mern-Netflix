import {
  configureStore,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import { TMDB_BASE_URL, API_KEY } from "../utils/constants";
import axios from "axios";

const initialState = {
  movies: [],
  genresLoaded: false,
  genres: [],
};

export const getGenres = createAsyncThunk("netflix/genres", async () => {
  const {
    data: { genres },
  } = await axios.get(`${TMDB_BASE_URL}/genre/movie/list?api_key=${API_KEY}`);
  console.log(genres);
  return genres;
});

const NetflixSlice = createSlice({
  name: "Netflix",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getGenres.fulfilled, (state, action) => {
      state.genres = action.payload;
      state.genresLoaded = true;
    });
    // builder.addCase(fetchMovies.fulfilled, (state, action) => {
    //   state.movies = action.payload;
    // });
    // builder.addCase(fetchDataByGenre.fulfilled, (state, action) => {
    //   state.movies = action.payload;
    // });
    // builder.addCase(getUsersLikedMovies.fulfilled, (state, action) => {
    //   state.movies = action.payload;
    // });
    // builder.addCase(removeMovieFromLiked.fulfilled, (state, action) => {
    //   state.movies = action.payload;
    // });
  },
});

export const store = configureStore({
  reducer: {
    netflix: NetflixSlice.reducer,
  },
});
