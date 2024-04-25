import { useState } from "react";
//how to handle object as state and empty properties in objects as state.
function App() {
  const [person, setPerson] = useState({
    name: "divyang",
    age: 22,
    city: "new delhi",
  });

  return (
    <>
      <h1>
        {person.name}
        <br />
        {person.age}
        <br />
        {person.city}
      </h1>
      <button
        onClick={() => {
          setPerson((prevState) => {
            return {
              ...prevState,
              name: "dv",
            };
          });
        }}
      >
        click
      </button>
    </>
  );
}

export default App;
