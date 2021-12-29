import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import "./chatOnline.css";

export default function ChatOnline({ onlineUsers, currentId, setCurrentChat }) {
  const [friends, setFriends] = useState([]);
  const [onlineFriends, setOnlineFriends] = useState([]);

  useEffect(() => {
    const getFriend = async () => {
      const res = await axios.get(
        `http://localhost:5000/api/users/friends/${currentId}`
      );
      setFriends(res.data);
    };
    getFriend();
  }, []);

  const handleClick = async (user) => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/conversation/find/${currentId}/${user._id}`
      );
      setCurrentChat(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setOnlineFriends(friends?.filter((f) => onlineUsers.includes(f._id)));
  }, [friends, onlineUsers]);

  return (
    <div className="chatOnline">
      <div className="chatOnlineFriend">
        {onlineFriends.map((o) => {
          return (
            <span
              className="chatOnlineName"
              onClick={() => {
                handleClick(o);
              }}
            >
              {o.userName}
            </span>
          );
        })}
      </div>
    </div>
  );
}
