import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./toolkitRedux/counterSlice";
function App() {
  const dispatch = useDispatch();
  const myState = useSelector((state) => state.counter.count);
  return (
    <>
      <h1>{myState}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </>
  );
}

export default App;
