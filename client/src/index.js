import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { AuthContextProvider } from "./context/AuthContext";

ReactDOM.render(
  <AuthContextProvider chlidren={<App />}></AuthContextProvider>,
  document.getElementById("root")
);
