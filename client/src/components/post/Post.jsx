import "./post.css";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { format } from "timeago.js";
import { Link } from "react-router-dom";

export default function Post({ post }) {
  const [user, setUser] = useState({});
  const [like, setLike] = useState(post.likes.length);
  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users/?userId=${post.userId}`);
      setUser(res.data);
    };
    fetchUser();
  }, [post.userId]);

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <Link to={`profile/${user.userName}`}>
              <img
                className="postProfileImg"
                src="https://www.log.com.tr/wp-content/uploads/2019/06/thor.jpg"
                alt=""
              />
            </Link>
            <span className="postUsername">{user.userName}</span>
            <span className="postDate">{format(post.createdAt)} </span>
          </div>
          <div className="postTopRight">
            <i className="fas fa-ellipsis-v"></i>
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post.desc}</span>
          <img
            className="postImg"
            src="https://qph.fs.quoracdn.net/main-qimg-ecedd76e216d35343b682e27d6e76840-c"
            alt=""
          />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <i className="far fa-thumbs-up"></i>
            <i className="fas fa-heart"></i>
            <span className="postLikeCounter">{like} people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">9 comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
