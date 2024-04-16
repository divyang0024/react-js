import React, { Component } from "react";
import Child from "./Child.jsx";

export default class Parent extends Component {
  constructor(prop) {
    super(prop);
    console.log("parent comp constructor was invoked");
    this.state = {
      name: "divyang",
    };
  }
  static getDerivedStateFromProps(props, state) {
    console.log("parent comp getDerivedStateFromProp was invoked");
    console.log(props);
    console.log(state);
    return null;
  }

  componentDidMount() {
    console.log("parent comp didMount was invoked");
  }

  render() {
    console.log("parent comp render was invoked");
    return (
      <>
        <h1>
          {this.props.city} {this.state.name}
          <Child city={"jaha divang rehta hai"} />
        </h1>
      </>
    );
  }
}
