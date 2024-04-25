import React, { Component } from "react";
import Child from "./Child";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      childRender: true,
    };
    console.log("inside parent constructor.");
  }

  render() {
    console.log("indside parent render.");
    return (
      <div>
        {this.state.childRender ? <Child /> : <h1>child component unount.</h1>}
        <button
          onClick={() => {
            this.setState({ childRender: false });
          }}
        >
          disable child render
        </button>
      </div>
    );
  }
}
