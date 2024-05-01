import React from "react";
import C from "./C";
function B(props) {
  let { age } = props;
  return (
    <>
      <C age={age} />
    </>
  );
}

export default B;
