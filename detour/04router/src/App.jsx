import { useNavigate } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import About from "../components/About";
import Products from "../components/Products";
import Contact from "../components/Contact";
import Upper from "../components/Upper";
import Lower from "../components/Lower";
import Shirts from "../components/Shirts";
import Jeans from "../components/Jeans";

function App() {
  const navigateBack = useNavigate();
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />}>
          <Route index element={<Upper />}></Route>
          <Route path="upper" element={<Upper />}>
            <Route path="shirts" element={<Shirts />} />
          </Route>
          <Route path="lower" element={<Lower />}>
            <Route path="jeans" element={<Jeans />} />
          </Route>
        </Route>
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <button onClick={() => navigateBack(-1)}>Go back</button>
    </div>
  );
}

export default App;
