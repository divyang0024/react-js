import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  let incrementCount = () => {
    setCount((prevCount) => prevCount + 10); //handles the previous state.
  };

  let decrementCount = () => {
    setCount(count - 2);
  };

  return (
    <>
      <div className="min-h-screen flex justify-center items-center bg-slate-800">
        <div className="p-20 bg-slate-500 rounded-3xl border-4 border-black">
          <h1 className="text-white text-5xl text-center">Count : {count}</h1>
          <div className="flex gap-12 mt-8 justify-center text-xl text-white">
            <button
              className="p-2 bg-blue-500 rounded-lg border-2 border-black focus:bg-blue-800 transition-all duration-200"
              onClick={incrementCount}
            >
              Increment
            </button>
            <button
              className="p-2 bg-blue-500 rounded-lg border-2 border-black focus:bg-blue-800 transition-all duration-200"
              onClick={decrementCount}
            >
              Decrement
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
