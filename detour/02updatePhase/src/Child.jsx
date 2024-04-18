import React, { Component } from "react";

export default class Child extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
    };
  }
  static getDerivedStateFromProps(props, state) {
    if (props.name != state.name) {
      return { name: props.name };
    }
  }
  render() {
    return (
      <>
        <p>{this.state.name}</p>
      </>
    );
  }
}
