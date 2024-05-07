import { useRef } from "react";
import { useState, useEffect } from "react";
function App() {
  const count = useRef(0);
  const [move, setMove] = useState(0);

  useEffect(() => {
    console.log("invoked");
    count.current += 1;
    console.log(count.current);
  });

  return (
    <>
      <input
        type="range"
        value={move}
        onChange={(e) => setMove(e.target.value)}
        min={0}
        max={5}
      />
      {count.current}
    </>
  );
}

export default App;
