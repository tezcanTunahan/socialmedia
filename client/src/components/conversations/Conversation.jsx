import { useEffect } from "react";
import { useState } from "react";
import "./conversation.css";
import axios from "axios";

export default function Conversation({ conversation, currentUser }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const friendId = conversation.members.find((m) => m !== currentUser._id);
    const getUser = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/users/?userId=${friendId}`
        );
        setUser(res.data);
      } catch (error) {}
    };
    getUser();
  }, [currentUser, conversation]);

  return (
    <div className="conversation">
      <span className="conversationName">{user?.userName}</span>
    </div>
  );
}
