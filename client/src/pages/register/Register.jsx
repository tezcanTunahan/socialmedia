import { useRef } from "react";
import "./register.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      passwordAgain.current.setCustomValidity("Password dont match");
    } else {
      const user = {
        userName: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        await axios.post("http://localhost:5000/api/auth/register", user);
        navigate("/login");
      } catch (error) {
        console.log(error);
      }
    }
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
          <form className="loginBox" onSubmit={handleSubmit}>
            <input
              type="text"
              className="loginInput"
              placeholder="username"
              ref={username}
              required
            />
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
              min="6"
            />
            <input
              type="password"
              className="loginInput"
              placeholder="password Again"
              ref={passwordAgain}
              required
            />

            <button className="loginButton" type="submit">
              Sign up
            </button>
            <span className="forgotPassword">forgot password ?</span>
            <button className="loginRegisterButton">Log into account</button>
          </form>
        </div>
      </div>
    </div>
  );
}
