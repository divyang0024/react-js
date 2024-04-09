import { useState } from "react";
import propTypes from "prop-types";

function App(props) {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>
        {props.greet} {props.age} {props.children}
      </p>
    </>
  );
}

App.propTypes = {
  greet: propTypes.string.isRequired,
  age: propTypes.number,
};

App.defaultProps = {
  age: 0,
};
export default App;
