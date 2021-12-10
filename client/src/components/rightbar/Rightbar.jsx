import Online from "../online/Online";
import "./rightbar.css";

export default function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <i className="fas fa-gifts"></i>
          <span className="birthdayText">
            <b>tony stark </b> and <b> 3 other friends </b> have a birthday
            today
          </span>
        </div>
        <img
          className="rightbarAd"
          src="https://en.islcollective.com/preview/201702/f/advertising-test-for-high-school-students-tests_95380_2.jpg"
          alt=""
        />
        <h4 className="rightbarTitle">Online friends</h4>
        <ul className="rightbarFriendList">
          <Online />
          <Online />
          <Online />
          <Online />
          <Online />
          <Online />
          <Online />
          <Online />
        </ul>
      </div>
    </div>
  );
}
