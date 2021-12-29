import { useEffect, useState } from "react";
import Online from "../online/Online";
import "./rightbar.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function Rightbar({ user }) {
  const [friends, setFriends] = useState([]);
  const { user: currentUser, dispatch } = useContext(AuthContext);
  const [followed, setFollowed] = useState(
    currentUser.followings.includes(user?._id)
  );

  useEffect(() => {
    setFollowed(currentUser.followings.includes(user?._id));
  }, [currentUser, user]);

  useEffect(() => {
    const getFriends = async () => {
      try {
        const friendList = await axios.get(
          `http://localhost:5000/api/users/friends/${user._id}`
        );
        setFriends(friendList.data);
      } catch (error) {
        console.log(error);
      }
    };
    getFriends();
  }, [user]);

  const followHandler = async () => {
    try {
      if (followed) {
        await axios.put(
          `http://localhost:5000/api/users/${user._id}/unfollow`,
          {
            userId: currentUser._id,
          }
        );
        dispatch({ type: "UNFOLLOW", payload: user._id });
      } else {
        await axios.put(`http://localhost:5000/api/users/${user._id}/follow`, {
          userId: currentUser._id,
        });
        dispatch({ type: "FOLLOW", payload: user._id });
      }
    } catch (error) {
      console.log(error);
    }
    setFollowed(!followed);
  };

  return (
    <div className="rightbar">
      {user.userName !== currentUser.userName && (
        <button className="rightbarFollowButton" onClick={followHandler}>
          {followed ? "Unfollow" : "follow"}
        </button>
      )}
      <div className="rightbarWrapper">
        <h4 className="rightbarTitle">Online friends</h4>
        <ul className="rightbarFriendList">
          {friends.map((friend) => {
            return (
              <Link to={`/profile/${friend.userName}`}>
                <Online username={friend.userName} key={friend._id} />
              </Link>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
