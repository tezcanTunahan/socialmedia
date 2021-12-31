import "./sidebar.css";
import CloseFriend from "../closeFriend/CloseFriend";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Sidebar() {
  const user = useContext(AuthContext);
  const [userFriends, setUserFriends] = useState([{ userName: "loading" }]);

  useEffect(() => {
    const getFriends = async () => {
      const res = await axios.get(
        `http://localhost:5000/api/users/friends/${user.user._id}`
      );
      setUserFriends([...res.data]);
    };
    getFriends();
  }, [user]);

  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <span>Friends</span>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          {userFriends.map((friend) => {
            return (
              <Link
                to={`/profile/${friend.userName}`}
                key={friend._id}
                className="friendLink"
              >
                <CloseFriend friend={friend} />
              </Link>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
