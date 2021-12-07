import "./register.css";

export default function Register() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">SocialT</h3>
          <span className="loginDesc">
            Connect with people and share it in SocialT
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input type="text" className="loginInput" placeholder="username" />
            <input type="text" className="loginInput" placeholder="email" />
            <input type="text" className="loginInput" placeholder="password" />
            <input
              type="text"
              className="loginInput"
              placeholder="password Again"
            />

            <button className="loginButton">Sign up</button>
            <span className="forgotPassword">forgot password ?</span>
            <button className="loginRegisterButton">Log into account</button>
          </div>
        </div>
      </div>
    </div>
  );
}
