import { useSelector } from "react-redux";
import { getAllMovies } from "../../features/movies/movieSlice";

function MovieList() {

  const movies = useSelector(getAllMovies);
  console.log(movies);

    return (
      <div>MovieList</div>
    );
  };
  
  export default MovieList;