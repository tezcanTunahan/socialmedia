import { useRef } from "react";
import "./login.css";
import { loginCall } from "../../apiCalls";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function Login() {
  const email = useRef();
  const password = useRef();
  const { user, isfetching, error, dispatch } = useContext(AuthContext);

  const handleClick = (e) => {
    e.preventDefault();
    loginCall({ email, password }, dispatch);
  };
  console.log(user);
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
          <form className="loginBox" onSubmit={handleClick}>
            <input
              type="email"
              className="loginInput"
              placeholder="email"
              ref={password}
              required
            />
            <input
              type="password"
              className="loginInput"
              placeholder="password"
              ref={email}
              required
            />
            <button className="loginButton">Log ın</button>
            <span className="forgotPassword">forgot password ?</span>
            <button className="loginRegisterButton">Create new Account</button>
          </form>
        </div>
      </div>
    </div>
  );
}
