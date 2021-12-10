import "./sidebar.css";
import CloseFriend from "../closeFriend/CloseFriend";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <i className="fas fa-rss"></i>
          </li>
          <li className="sidebarListItem">
            <i className="far fa-comment-dots"></i>
          </li>
          <li className="sidebarListItem">
            <i className="far fa-play-circle"></i>
          </li>
          <li className="sidebarListItem">
            <i className="fas fa-user-friends"></i>
          </li>
          <li className="sidebarListItem">
            <i className="fas fa-bookmark"></i>
          </li>
          <li className="sidebarListItem">
            <i className="far fa-question-circle"></i>
          </li>
          <li className="sidebarListItem">
            <i className="fas fa-briefcase"></i>
          </li>
          <li className="sidebarListItem">
            <i className="fas fa-calendar-alt"></i>
          </li>
          <li className="sidebarListItem">
            <i className="fab fa-redhat"></i>
          </li>
        </ul>
        <button className="sidebarButton">show more</button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          <CloseFriend />
          <CloseFriend />
          <CloseFriend />
          <CloseFriend />
          <CloseFriend />
        </ul>
      </div>
    </div>
  );
}
