import "./message.css";

export default function Message({ own }) {
  return (
    <div className={own ? "message own" : "message"}>
      <div className="messageTop">
        <p className="messageText">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam
          facilis doloribus
        </p>
      </div>
      <div className="messageBottom"></div>
    </div>
  );
}
