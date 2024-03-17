import { useState, useMemo } from "react";

let slowCompute = (num1, num2) => {
  for (let i = 0; i <= 10000n; i++) {}
  return +num1 + +num2;
};

function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  const addNumbers = useMemo(() => {
    return slowCompute(num1, num2);
  }, [num1, num2]);

  return (
    <>
      <div>
        {console.log("div render")}
        <input
          type="text"
          value={num1}
          onChange={(e) => {
            setNum1(e.target.value);
          }}
        />
        {console.log("input 1 render")}
        <input
          type="text"
          value={num2}
          onChange={(e) => {
            setNum2(e.target.value);
          }}
        />
        {console.log("input 2 render")}
        <button>{addNumbers}</button>
        {console.log("button render")}
      </div>
    </>
  );
}

export default App;
