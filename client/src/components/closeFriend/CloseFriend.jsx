import "./closeFriend.css";

export default function CloseFriend({ friend }) {
  return (
    <li className="sidebarfriend">
      <span className="sidebarFriendName">{friend.userName}</span>
    </li>
  );
}
