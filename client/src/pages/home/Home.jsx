import "./home.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function Home() {
  const user = useContext(AuthContext).user;

  return (
    <>
      <Topbar />
      <div className="homeContainer">
        <Sidebar />
        <Feed />
        <Rightbar user={user} />
      </div>
    </>
  );
}
