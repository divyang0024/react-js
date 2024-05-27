import { useSelector, useDispatch } from "react-redux";
import { increase, decrease } from "./action/index";
function App() {
  const dispatch = useDispatch();
  const myState = useSelector((state) => state.inc_dec);
  return (
    <>
      <h1>{myState}</h1>
      <button onClick={() => dispatch(increase())}>Increment</button>
      <button onClick={() => dispatch(decrease())}>Decrement</button>
    </>
  );
}

export default App;
