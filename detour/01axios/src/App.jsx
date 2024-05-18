import React from "react";
import Get from "./Get";
import { NavLink, Routes, Route } from "react-router-dom";
import Post from "./Post";
import "./link.css";

function App() {
  return (
    <>
      <div>
        <NavLink to="/">Get Request</NavLink>
        <NavLink to="/post">Post Request</NavLink>
      </div>
      <br />
      <br />
      <Routes>
        <Route path="/" element={<Get />} />
        <Route path="/post" element={<Post />} />
      </Routes>
    </>
  );
}

export default App;
