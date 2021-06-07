import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Mbti from "./service/Mbti";

const mbti = new Mbti();

ReactDOM.render(
  <React.StrictMode>
    <App mbti={mbti} />
  </React.StrictMode>,
  document.getElementById("root")
);
