import { useState, useRef, useEffect } from "react";

function App() {
  const nameRef = useRef();
  const emailRef = useRef();

  useEffect(() => {
    console.log("Component Mounted.");
    console.log(nameRef);
    nameRef.current.focus();
  }, []);

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          nameRef.current.style.color = "yellow";
          nameRef.current.style.backgroundColor = "red";
          emailRef.current.style.color = "yellow";
          emailRef.current.style.backgroundColor = "red";
          console.log("your name is : ", e.target[0].value);
          console.log("your email is : ", e.target[1].value);
        }}
      >
        <label htmlFor="name">Name : </label>
        <input
          id="name"
          type="text"
          ref={nameRef}
          placeholder="Enter you name"
        ></input>
        <br />
        <label htmlFor="email">Email : </label>
        <input
          id="email"
          type="email"
          ref={emailRef}
          placeholder="Enter you email"
        ></input>
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default App;
