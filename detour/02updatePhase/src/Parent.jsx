import React, { Component } from "react";
import Child from "./Child";

export default class componentName extends Component {
  constructor() {
    super();
    this.state = {
      name: "divyang",
    };
  }

  changeState = () => {
    this.setState({
      name: "dv",
    });
  };

  render() {
    return (
      <>
        <Child name={this.state.name} />
        <button onClick={this.changeState}>click</button>
      </>
    );
  }
}
