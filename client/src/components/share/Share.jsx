import { useContext, useRef } from "react";
import "./share.css";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

export default function Share({ setRefresh }) {
  const { user } = useContext(AuthContext);
  const desc = useRef();

  const submitHandler = async (e) => {
    e.preventDefault();
    const newPost = {
      userId: user._id,
      desc: desc.current.value,
    };
    try {
      await axios.post("http://localhost:5000/api/posts/", newPost);
      setRefresh(true);
      desc.current.value = "";
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <input
            placeholder={`What's in your mind ${user.userName}`}
            type="text"
            className="shareInput"
            ref={desc}
          />
        </div>
        <hr className="shareHr" />
        <form className="shareBottom" onSubmit={submitHandler}>
          <div className="shareOptions"></div>
          <button className="shareButton" type="submit">
            Share
          </button>
        </form>
      </div>
    </div>
  );
}
