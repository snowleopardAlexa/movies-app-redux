import { useEffect } from 'react';
import MovieList from "../MovieList/MovieList";
import movieApi from "../../common/api/movieApi";
import { APIKey } from "../../common/api/MovieApiKey";
import { useDispatch } from "react-redux";
import { addMovies } from "../../features/movies/movieSlice";

const Home = () => {

const movieText = "Harry";
const dispatch = useDispatch();

useEffect(() => {
  const fetchMovies = async () => {
     const response = await movieApi
     .get(`?apiKey=${APIKey}&s=${movieText}&type=movie`)
     .catch((err) => {
      console.log("Err :", err);
     });
    
     dispatch(addMovies(response.data))
  };

  fetchMovies();
}, []);

    return (
     <div className="banner-img">
       <MovieList />
     </div>
    );
  };
  
  export default Home;


