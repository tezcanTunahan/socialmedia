import "./online.css";

export default function Online({ username }) {
  return (
    <li className="rightbarFriend">
      <div className="rightbarProfileImgContainer">
        <span className="rightbarOnline"></span>
      </div>
      <span className="rightbarUsername">{username}</span>
    </li>
  );
}
