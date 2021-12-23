import "./messenger.css";
import Topbar from "../../components/topbar/Topbar";
import Conversation from "../conversations/Conversation";
import Message from "../message/Message";

export default function Messenger() {
  return (
    <>
      <Topbar />
      <div className="messenger">
        <div className="chatMenu">
          <div className="charMenuWrapper">
            <input
              name=""
              id=""
              placeholder="search for friends"
              className="chatMenuInput"
            />
            <Conversation />
            <Conversation />
            <Conversation />
            <Conversation />
            <Conversation />
            <Conversation />
          </div>
        </div>
        <div className="chatBox">
          <div className="chatBoxWrapper">
            <div className="chatBoxTop"></div>
            <div className="chatBoxBottom">
              <Message />
              <Message own={true} />
              <Message />
            </div>
          </div>
        </div>
        <div className="chatOnline">
          <div className="chatOnlineWrapper">online</div>
        </div>
      </div>
    </>
  );
}
