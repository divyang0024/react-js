import { useState } from "react";

function App() {
  const [data, setData] = useState("form");

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(e.target[0].value);
        }}
      >
        <label>Name : </label>
        <input
          value={data}
          onChange={(e) => {
            console.log(e.target.value);
            setData(e.target.value);
          }}
        ></input>
        <br />
        <button type="submit" value="submit">
          Submit
        </button>
      </form>
      <h1>{data}</h1>
    </>
  );
}

export default App;
