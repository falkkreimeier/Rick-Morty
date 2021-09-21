import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";
import reportWebVitals from "./reportWebVitals";
import data from "../src/data.json";
import GlobalStyle from "./components/Card/GlobalStyles";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App data={data} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
