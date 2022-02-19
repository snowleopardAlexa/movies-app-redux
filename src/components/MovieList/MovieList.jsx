import { useSelector } from "react-redux";
import { getAllMovies } from "../../features/movies/movieSlice";
import MovieCard from "../MovieCard/MovieCard";

function MovieList() {

  const movies = useSelector(getAllMovies);
  let renderMovies = "";

  renderMovies =
   movies.Response === "True" ? (
    movies.Search.map((movie, index) => {
      <MovieCard key={index} data={movie} />;
    })
  ) : (
    <div className="movies-error">
      <h3>{movies.Error}</h3>
    </div>
    );
    return <div>MovieList</div>;
  };
  
  export default MovieList;