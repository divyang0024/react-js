import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "divyang",
    };
    console.log("indide constructor.");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("inside getDerivedStateFromProps.");
    console.log(state.name);
    console.log(props.city);
    return null;
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("inside shouldComponentUpdate.");
    console.log(nextState);
    console.log(nextProps);
    return false; //return false or true,determines render function should be invoked or not,if the value is false then it intercepts render and componentDidMount function calls.
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("inside getSnapshotBeforeUpdate.");
    console.log(prevState);
    console.log(prevProps);
    return null; //returns either NULL or a component current val.
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("inside componentDidUpdate.");
    console.log(snapshot);
    console.log(prevState);
    console.log(prevProps);
  }

  render() {
    console.log("inside render.");
    return (
      <>
        {this.state.name}
        <button
          onClick={() => {
            this.setState({ name: "dv" });
          }}
        >
          Click
        </button>
      </>
    );
  }
}
