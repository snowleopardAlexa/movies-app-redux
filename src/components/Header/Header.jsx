import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../../features/movies/movieSlice";
import { FaUserCircle, FaSearch} from 'react-icons/fa';
import "./Header.scss";

function Header() {

const [term, setTerm] = useState("");
const dispatch = useDispatch();

const submitHandler = (e) => {
  e.preventDefault();
  if (term === "") return alert("Please, enter earch term")
  dispatch(fetchAsyncMovies(term));
  dispatch(fetchAsyncShows(term));
}

    return (
     <div className="header">
         <div className="logo">
           <Link to="/">Movie App</Link>
         </div>   
       <div className="search-bar">
         <form onSubmit={submitHandler}>
           <input 
             type="text" 
             value={term} 
             placeholder="Search Movies or Shows" 
             onChange={(e) => setTerm(e.target.value)} />
           <button type="submit"><FaSearch /></button>
         </form>
       </div>  
       <div className="user-image">
         <FaUserCircle />
       </div>
     </div>
    );
  };
  
  export default Header;