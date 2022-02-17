import MovieList from "../MovieList/MovieList";
import movieApi from "../../common/apis/movieApi";
import { APIKey } from "../../common/apis/MovieApiKey";

function Home() {

useEffect(() => {
  const movieText = "Harry";
  const fetchMovies = async() => {
     const response = await movieApi.get(`?apiKey=${APIKey}&s={movieText}&type=movie`);
  }
})

    return (
     <div className="banner-img">
       <MovieList />
     </div>
    );
  };
  
  export default Home;