import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App greet="hey there">
      <p>user</p>
    </App>
  </React.StrictMode>
);
