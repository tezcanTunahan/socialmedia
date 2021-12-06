import "./share.css";

export default function Share() {
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
            placeholder="What's in your mind"
            type="text"
            className="shareInput"
          />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <i class="fas fa-photo-video shareIcon"></i>
              <span className="shareOptionText">Photo or video</span>
            </div>
            <div className="shareOption">
              <i class="fas fa-tags shareIcon"></i>
              <span className="shareOptionText">Tag</span>
            </div>{" "}
            <div className="shareOption">
              <i class="fas fa-map-marker-alt shareIcon"></i>
              <span className="shareOptionText">Location</span>
            </div>{" "}
            <div className="shareOption">
              <i class="fas fa-smile-beam shareIcon"></i>
              <span className="shareOptionText">Feelings</span>
            </div>
          </div>
          <button className="shareButton">Share</button>
        </div>
      </div>
    </div>
  );
}
