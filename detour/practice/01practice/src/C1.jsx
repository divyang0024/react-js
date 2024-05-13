import React, { Component } from "react";

export default class componentName extends Component {
  constructor() {
    super();
    this.state = {
      name: "abc",
    };
  }
  render() {
    return <>{this.state.name}</>;
  }
}
