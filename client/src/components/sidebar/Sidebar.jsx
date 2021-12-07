import "./sidebar.css";
import CloseFriend from "../closeFriend/CloseFriend";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <i class="fas fa-rss"></i>
          </li>
          <li className="sidebarListItem">
            <i class="far fa-comment-dots"></i>
          </li>
          <li className="sidebarListItem">
            <i class="far fa-play-circle"></i>
          </li>
          <li className="sidebarListItem">
            <i class="fas fa-user-friends"></i>
          </li>
          <li className="sidebarListItem">
            <i class="fas fa-bookmark"></i>
          </li>
          <li className="sidebarListItem">
            <i class="far fa-question-circle"></i>
          </li>
          <li className="sidebarListItem">
            <i class="fas fa-briefcase"></i>
          </li>
          <li className="sidebarListItem">
            <i class="fas fa-calendar-alt"></i>
          </li>
          <li className="sidebarListItem">
            <i class="fab fa-redhat"></i>
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
