import React, { Component } from "react";
import Child from "./Child";

export default class App extends Component {
  render() {
    return (
      <Child
        call={(name) => {
          console.log("parent method called by", name, "component.");
        }}
      ></Child>
    );
  }
}
