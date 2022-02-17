import { useEffect } from 'react';
import MovieList from "../MovieList/MovieList";
import movieApi from "../../common/apis/movieApi";
import { APIKey } from "../../common/apis/MovieApiKey";

const Home = () => {

useEffect(() => {
  const movieText = "Harry";

  const fetchMovies = async () => {
     const response = await movieApi
     .get(`?apiKey=${APIKey}&s={movieText}&type=movie`)
     .catch((err) => {
      console.log("Err :", err);
     });
    
     console.log("the response from api", response)
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


