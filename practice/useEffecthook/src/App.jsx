import { useEffect, useState } from "react";

function App({ Color }) {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState(0);

  useEffect(() => {
    console.log("default render"); //will run atleast once the component is mounted.
  }, []);
  //once app component is rendered/mounted on the page use effect is invoked.

  useEffect(() => {
    console.log("run on every render");
  }); //runs on every single changes made into the components.

  useEffect(() => {
    console.log("state is changed");
  }, [color, count]);

  let Inc = () => {
    setCount(count + 1);
  };

  return (
    <>
      <h1 className="text-6xl" onClick={Inc}>
        hello there
      </h1>
    </>
  );
}

export default App;
