import React, { Component } from "react";

export default class Child extends Component {
  constructor(prop) {
    super(prop);
    console.log("child comp constructor was invoked");
    this.state = {
      name: "divyang ka beta",
    };
  }
  static getDerivedStateFromProps(props, state) {
    console.log("child comp getDerivedStateFromProp was invoked");
    console.log(props);
    console.log(state);
    return null;
  }

  componentDidMount() {
    console.log("child comp didMount was invoked");
  }

  render() {
    console.log("child comp render was invoked");
    return (
      <>
        {this.props.city} {this.state.name}
      </>
    );
  }
}
