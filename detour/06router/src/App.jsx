import { Routes, Route } from "react-router-dom";
import Search from "../components/Search";

function App() {
  return (
    <>
      <Routes>
        <Route path="/search" element={<Search />}></Route>
      </Routes>
    </>
  );
}

export default App;
