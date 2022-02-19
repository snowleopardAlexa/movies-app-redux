import { createSlice } from '@reduxjs/toolkit';

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
    }
});

export const { addMovies } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movieSlice;
export default movieSlice.reducer;



