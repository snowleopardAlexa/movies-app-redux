import { useEffect } from 'react';
import MovieList from "../MovieList/MovieList";
import { useDispatch } from "react-redux";
import { addMovies } from "../../features/movies/movieSlice";

const Home = () => {
  
const dispatch = useDispatch();

useEffect(() => {
  const fetchMovies = async () => {
 
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


