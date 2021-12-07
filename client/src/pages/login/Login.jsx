import "./login.css";

export default function Login() {
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
            <input type="text" className="loginInput" placeholder="email" />
            <input type="text" className="loginInput" placeholder="password" />
            <button className="loginButton">Log ın</button>
            <span className="forgotPassword">forgot password ?</span>
            <button className="loginRegisterButton">Create new Account</button>
          </div>
        </div>
      </div>
    </div>
  );
}
