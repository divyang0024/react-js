import React, { Component } from "react";
import PropTypes from "prop-types";
import C1 from "./C1";
export default class App extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   n: "xyz",
    // };
  }

  render() {
    return (
      <>
        <p>{this.props.name}</p>
        <p>{this.props.age}</p>
        <C1 />
      </>
    );
  }
}

App.PropTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
};
App.defaultProps = {
  age: 18,
};
