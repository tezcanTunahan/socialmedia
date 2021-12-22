import { useRef } from "react";
import "./login.css";
import { loginCall } from "../../apiCalls";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const email = useRef();
  const password = useRef();
  let navigate = useNavigate();
  const { user, isFetching, error, dispatch } = useContext(AuthContext);

  const handleClick = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };
  const redirectRegister = () => {
    navigate("/register");
  };
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
              ref={email}
              required
            />
            <input
              type="password"
              className="loginInput"
              placeholder="password"
              ref={password}
              required
            />
            <button className="loginButton" type="submit">
              {isFetching ? "loading" : "log in"}{" "}
            </button>
            <button
              className="loginRegisterButton"
              type="button"
              onClick={redirectRegister}
            >
              Create new Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
