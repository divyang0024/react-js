import React, { useEffect, useState } from "react";
import ColorList from "./ColorList";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products/")
      .then((res) => res.json())
      .then((jsonData) => {
        setItems(jsonData.products);
      });
  }, []);

  return (
    <div>
      <>
        <ul>
          {items.map((product, key) => (
            <ColorList key={key} name={product.title} />
          ))}
        </ul>
      </>
    </div>
  );
}

export default App;
