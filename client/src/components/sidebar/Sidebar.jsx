import "./sidebar.css";
import CloseFriend from "../closeFriend/CloseFriend";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import { useState } from "react";

export default function Sidebar() {
  const user = useContext(AuthContext);
  const [userFriends, setUserFriends] = useState([]);

  useEffect(() => {
    const getFriends = async () => {
      const res = await axios.get(
        `http://localhost:5000/api/users/friends/${user.user._id}`
      );
      setUserFriends(res.data);
    };
    getFriends();
  });

  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <span>Friends</span>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          {userFriends.map((friend) => {
            return <CloseFriend friend={friend} />;
          })}
        </ul>
      </div>
    </div>
  );
}
