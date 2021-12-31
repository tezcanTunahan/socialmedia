import "./home.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import Feed from "../../components/feed/Feed";
// import { useContext } from "react";
// import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router";
import { useEffect } from "react";

export default function Home() {
  let navigation = useNavigate();

  // const user = useContext(AuthContext).user;
  useEffect(() => {
    navigation("/");
  }, []);
  return (
    <>
      <Topbar />
      <div className="homeContainer">
        <Sidebar />
        <Feed />
        {/* <Rightbar user={user} /> */}
      </div>
    </>
  );
}
