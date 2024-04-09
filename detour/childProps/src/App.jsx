import { useState } from "react";

function App(props) {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>
        {props.greet} {props.children}
        // //if children prop is not shown it will not appear despite being
        //inside of the render tag.
      </p>
    </>
  );
}

export default App;
