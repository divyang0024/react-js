import { useReducer } from "react";

function App() {
  const intialState = 0;
  const reducer = (state, action) => {
    switch (action) {
      case "+": {
        return state + 1;
      }
      case "-": {
        return state - 1;
      }
      case "0": {
        return intialState;
      }
      default: {
        return state;
      }
    }
  };
  const [count, dispatch] = useReducer(reducer, intialState);
  return (
    <>
      <h1>Count : {count}</h1>
      <button onClick={() => dispatch("+")}>+</button>
      <button onClick={() => dispatch("-")}>-</button>
      <button onClick={() => dispatch("0")}>0</button>
    </>
  );
}

export default App;
