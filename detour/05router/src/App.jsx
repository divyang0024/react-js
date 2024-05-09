import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Users from "../components/Users";
import UserDetail from "../components/UserDetail";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/users" element={<Users />}>
          <Route path=":id" element={<UserDetail />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
