import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
export const nameContext = createContext();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <nameContext.Provider value={"divyang"}>
      <App />
    </nameContext.Provider>
  </React.StrictMode>
);
