import React, { Component } from "react";

export default class Child extends Component {
  componentWillUnmount() {
    console.log("child component will unmount invoked.");
  }
  render() {
    console.log("inside child render");
    return (
      <>
        <h1>this is child component</h1>
      </>
    );
  }
}
