import { useEffect } from "react";
import "./MovieDetail.scss";
import { BsFillCalendarWeekFill, BsFillHandThumbsUpFill } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai"
import { FiFilm } from "react-icons/fi";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAsyncMovieOrShowDetail, getSelectedMovieOrShow } from "../../features/movies/movieSlice";

function MovieDetail() {

  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const data = useSelector(getSelectedMovieOrShow);
  // console.log(data);

  useEffect(() => {
    dispatch(fetchAsyncMovieOrShowDetail(imdbID));
  }, [dispatch, imdbID]);
  return (
    <div className="movie-section">
      <div className="section-left">
        <div className="movie-title">{data.Title}</div>
        <div className="movie-rating">
          <span>
            IMDB Rating <AiFillStar /> : {data.imdbRating}
          </span>
          <span>
            IMDB Votes <BsFillHandThumbsUpFill /> : {data.imdbVotes}
          </span>
          <span>
            Runtime <FiFilm /> : {data.Runtime}
          </span>
          <span>
            Year <BsFillCalendarWeekFill /> : {data.Year}
          </span>
        </div>
        <div className="movie-plot">
          {data.Plot}
        </div>
        <div className="movie-info">
          <div>
            <span>Director</span>
            <span>{data.Director}</span>
          </div>
          <div>
            <span>Stars</span>
            <span>{data.Actors}</span>
          </div>
          <div>
            <span>Genres</span>
            <span>{data.Genre}</span>
          </div>
          <div>
            <span>Languages</span>
            <span>{data.Language}</span>
          </div>
          <div>
            <span>Awards</span>
            <span>{data.Awards}</span>
          </div>
        </div>
      </div>
      <div className="section-right">
        <img src={data.Poster} alt={data.Title} />
      </div>
    </div>
  );
};

export default MovieDetail;