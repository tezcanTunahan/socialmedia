import "./profile.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";

export default function Profile() {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src="https://cdn2.unrealengine.com/14br-junior-key-art-newsheader-1920x1080-616278997.jpg"
                alt=""
              />
              <img
                className="profileUserImg"
                src="https://wikiimg.tojsiabtv.com/wikipedia/en/a/a7/Galactus_%282018%29.jpg"
                alt=""
              />
            </div>
            <div className="profiloInfo">
              <h4 className="profileInfoName">Galactus</h4>
              <span className="profileInfoDesc">I am Galactus</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar />
          </div>
        </div>
      </div>
    </>
  );
}
