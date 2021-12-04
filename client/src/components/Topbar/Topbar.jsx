import "./topbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="left">
        <div className="logo">SocialT</div>
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
        <i className="fas fa-user-alt user__button"></i>
        <i className="fas fa-comments comments__button"></i>
        <i className="fas fa-bell bell__button"></i>
      </div>
    </nav>
  );
}
