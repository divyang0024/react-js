import React from "react";
import Create from "./components/Create";
import Read from "./components/Read";
import Edit from "./components/Edit";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Read />} />
        <Route exact path="/create" element={<Create />} />
        <Route exact path="/edit" element={<Edit />} />
      </Routes>
    </>
  );
}

export default App;
