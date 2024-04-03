import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  
*{
 margin: 0;
 padding: 0;
 box-sizing: border-box;
}

html, body{
  background-color: #323334;
  color: white;
  width: 1280px;
  margin: auto;
}
`;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyle></GlobalStyle>
    <App />
  </React.StrictMode>
);
