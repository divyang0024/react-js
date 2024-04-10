import React, { Component } from "react";
import propType from "prop-types";

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <h1>this is a heading.</h1>
        <p>this is a paragraph.</p>
        {this.props.name}
        {this.props.age}
      </>
    );
  }
}

App.propType = {
  name: propType.string.isRequired,
  age: propType.number,
};
App.defaultProps = {
  age: 18,
};
