import { Link } from 'react-router-dom';
import { FaUserCircle} from 'react-icons/fa';
import "./Header.scss";

function Header() {
    return (
     <div className="header">
       <Link to="/">
         <div className="logo">Movie App</div>   
       </Link>
       <div className="user-image">
         <FaUserCircle />
       </div>
     </div>
    );
  };
  
  export default Header;