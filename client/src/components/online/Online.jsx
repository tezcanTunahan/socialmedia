import "./online.css";

export default function Online({ username }) {
  return (
    <li className="rightbarFriend">
      <div className="rightbarProfileImgContainer">
        <img
          className="rightbarProfileImg"
          src="https://static1.moviewebimages.com/wordpress/wp-content/uploads/article/kSz1QsuJ9RvtctIaoaGMorwuQFYS0G.jpg"
          alt=""
        />
        <span className="rightbarOnline"></span>
      </div>
      <span className="rightbarUsername">{username}</span>
    </li>
  );
}
