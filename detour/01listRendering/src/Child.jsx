import React, { Component } from "react";

export default class Child extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        student name is {this.props.student.name} and age is
        {this.props.student.age}
      </div>
    );
  }
}
