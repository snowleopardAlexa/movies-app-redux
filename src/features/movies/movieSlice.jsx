import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import movieApi from "../../common/api/movieApi";
import { APIKey } from "../../common/api/MovieApiKey";

// api call with async creator
export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', 
    async() => {
    const movieText = "Harry";
       
    const response = await movieApi
    .get(`?apiKey=${APIKey}&s=${movieText}&type=movie`)
   
    return response.data;
})

const initialState = {
    movies: {},
}

const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        addMovies: (state, {payload}) => {
            state.movies = payload;
        },
    },
    extraReducers: {
        [fetchAsyncMovies.pending]: () => {
            console.log("pENDING");
        },
        [fetchAsyncMovies.fulfilled]: (state, {payload}) => {
            console.log("Fetched Successfully!");
            return {...state, movies: payload };
        },
        [fetchAsyncMovies.rejected]: () => {
            console.log("Rejected");
        },
    },
});

export const { addMovies } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export default movieSlice.reducer;



