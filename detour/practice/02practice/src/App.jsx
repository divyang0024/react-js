import { useState } from "react";

function App() {
  const [count, setCount] = useState({
    name: "",
    age: 0,
  });

  const changeStateData = () => {
    setCount({ ["name"]: "dv", ["age"]: 22 });
  };

  return (
    <>
      <h1>{count.name}</h1>
      <h1>{count.age}</h1>
      <button onClick={changeStateData}>Click</button>
    </>
  );
}

export default App;
