import { useState } from "react";

function App() {
  const [count, setCount] = useState([11, 22, 33, 44, 55]);
  console.log(count);
  return (
    <>
      <ul>
        {count.map((val, index) => (
          <li key={index}>{val}</li>
        ))}
      </ul>
      <button
        onClick={() => {
          setCount((prevState) => [
            ...prevState,
            prevState[prevState.length - 1] + 11,
          ]);
        }}
      >
        click
      </button>
    </>
  );
}

export default App;
