import { useState } from "react";
import A from "./A";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <A />
    </>
  );
}

export default App;
