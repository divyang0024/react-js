import React, { Component } from "react";
import Child from "./Child";

export default class Parent extends Component {
  render() {
    let students = [
      {
        name: "student1",
        age: 100,
      },
      {
        name: "student2",
        age: 100,
      },
      {
        name: "student3",
        age: 100,
      },
      {
        name: "student4",
        age: 100,
      },
      {
        name: "student5",
        age: 100,
      },
    ];
    return (
      <>
        {students.map((details) => (
          <Child student={details}></Child>
        ))}
      </>
    );
  }
}
