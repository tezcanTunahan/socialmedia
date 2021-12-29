import "./topbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
// import { useNavigate } from "react-router-dom";

export default function Topbar() {
  const { user } = useContext(AuthContext);
  // let navigation = useNavigate;

  return (
    <nav className="navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="logo">SocialT</div>
        </Link>
      </div>
      <div className="middle">
        <form action="">
          <input
            className="search__button"
            type="search"
            name=""
            id=""
            placeholder="Search"
          />
        </form>
      </div>
      <div className="right">
        <Link to={`/profile/${user.userName}`}>
          <i className="fas fa-user-alt user__button"></i>
        </Link>
        <Link to="/messenger">
          <i className="fas fa-comments comments__button"></i>
        </Link>
      </div>
    </nav>
  );
}
