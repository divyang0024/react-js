import { useState } from "react";
import Counter from "./Counter";

function App() {
  const [renderCounter, setRenderCounter] = useState(true);

  return (
    <>
      {renderCounter == true && <Counter />}
      <button onClick={() => setRenderCounter(!renderCounter)}>
        toggle add and remove
      </button>
    </>
  );
}

export default App;
