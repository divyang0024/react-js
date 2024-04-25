import { useState } from "react";

function App() {
  const [name, setName] = useState("divyang");
  // basics of useState hook.
  return (
    <>
      <div>
        <h1>{name}</h1>
        <button
          onClick={() => {
            setName("dv");
          }}
        >
          click
        </button>
      </div>
    </>
  );
}

export default App;
