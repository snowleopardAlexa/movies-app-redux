import { Link } from 'react-router-dom';
import { FaUser, FaUserAlt } from 'react-icons/fa';
import "./Header.scss";

function Header() {
    return (
     <div className="header">
       <Link to="/">
         <div className="logo">Movie App</div>   
       </Link>
       <div className="user-image">
         <FaUserAlt />
       </div>
     </div>
    );
  };
  
  export default Header;