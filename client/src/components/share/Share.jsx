import { useContext, useRef } from "react";
import "./share.css";
import { AuthContext } from "../../context/AuthContext";
import { useState } from "react";
import axios from "axios";

export default function Share() {
  const { user } = useContext(AuthContext);
  const desc = useRef();
  const [file, setFile] = useState(null);

  const submitHandler = async (e) => {
    e.preventDefault();
    const newPost = {
      userId: user._id,
      desc: desc.current.value,
    };
    try {
      await axios.post("http://localhost:5000/api/posts/", newPost);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            className="shareProfileImg"
            src="https://images.immediate.co.uk/production/volatile/sites/3/2021/09/evil_doctor_strange_what_if_no_way_home-0d9bd68.jpg?quality=90&resize=620,413"
            alt=""
          />
          <input
            placeholder={`What's in your mind ${user.userName}`}
            type="text"
            className="shareInput"
            ref={desc}
          />
        </div>
        <hr className="shareHr" />
        <form className="shareBottom" onSubmit={submitHandler}>
          <div className="shareOptions">
            <label htmlFor="file" className="shareOption">
              <i className="fas fa-photo-video shareIcon"></i>
              <span className="shareOptionText">Photo or video</span>
              <input
                type="file"
                name="file"
                id="file"
                accept=".png,.jpeg,"
                onChange={(e) => setFile(e.target.files[0])}
                style={{ display: "none" }}
              />
            </label>
            <div className="shareOption">
              <i className="fas fa-tags shareIcon"></i>
              <span className="shareOptionText">Tag</span>
            </div>
            <div className="shareOption">
              <i className="fas fa-map-marker-alt shareIcon"></i>
              <span className="shareOptionText">Location</span>
            </div>
            <div className="shareOption">
              <i className="fas fa-smile-beam shareIcon"></i>
              <span className="shareOptionText">Feelings</span>
            </div>
          </div>
          <button className="shareButton" type="submit">
            Share
          </button>
        </form>
      </div>
    </div>
  );
}
