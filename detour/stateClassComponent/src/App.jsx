import React, { Component } from "react";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "xyz",
      age: 102,
    };
  }

  setInforamtion = () => {
    this.setState({
      name: "abc",
      age: 100,
    });
  };

  render() {
    return (
      <div>
        <p>
          {this.state.name} {this.state.age}
          <input
            type="button"
            value="click"
            onClick={this.setInforamtion}
          ></input>
        </p>
      </div>
    );
  }
}
