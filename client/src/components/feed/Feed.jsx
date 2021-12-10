import { useEffect, useState } from "react";
import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
import axios from "axios";

export default function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      const res = await axios.get("/posts/timeline/61aa6405476a3ccbd49692d3");
      setPosts(res.data);
    };
    fetchPost();
  }, []);

  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {posts.map((post) => {
          return <Post post={post} key={post._id} />;
        })}
      </div>
    </div>
  );
}
