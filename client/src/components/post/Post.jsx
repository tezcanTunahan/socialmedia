import "./post.css";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { format } from "timeago.js";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function Post({ post }) {
  const [user, setUser] = useState({});
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const { user: currentUser } = useContext(AuthContext);

  useEffect(() => {
    setIsLiked(!post.likes.includes(currentUser._id));
  }, [currentUser._id, post.likes]);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users/?userId=${post.userId}`);
      setUser(res.data);
    };
    fetchUser();
  }, [post.userId]);

  const likeHandler = async () => {
    try {
      await axios.put(`http://localhost:5000/api/posts/${post._id}/like`, {
        userId: currentUser._id,
      });
    } catch (error) {}
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <Link to={`profile/${user.userName}`}>
              <span className="postUsername">{user.userName}</span>
            </Link>
            <span className="postDate">{format(post.createdAt)} </span>
          </div>
          <div className="postTopRight"></div>
        </div>
        <div className="postCenter">
          <span className="postText">{post.desc}</span>
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <i onClick={likeHandler} className="fas fa-heart"></i>
            <span className="postLikeCounter">{like} people like it</span>
          </div>
          <div className="postBottomRight"></div>
        </div>
      </div>
    </div>
  );
}
