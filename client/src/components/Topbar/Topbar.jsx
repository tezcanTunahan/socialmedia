import "./topbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function Navbar() {
  const { user } = useContext(AuthContext);

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
        <i className="fas fa-home home__button"></i>
        <i className="fas fa-stream stream__button"></i>
        <Link to={`/profile/${user.userName}`}>
          <i className="fas fa-user-alt user__button"></i>
        </Link>
        <i className="fas fa-comments comments__button"></i>
        <i className="fas fa-bell bell__button"></i>
      </div>
    </nav>
  );
}
