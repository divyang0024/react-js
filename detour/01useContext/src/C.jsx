import React from "react";
import { useContext } from "react";
import { nameContext } from "./main";

function C() {
  let myName = useContext(nameContext); //can be get inside of component.
  return <h1>my name is {myName}</h1>;
}

export default C;
