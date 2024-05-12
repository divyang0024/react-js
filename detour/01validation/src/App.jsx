import { useState } from "react";

function App() {
  console.log("invoked");
  const regex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const [UserInfo, setUserInfo] = useState({
    name: "-",
    email: "-",
  });
  const [FormError, setFormError] = useState({
    nameError: false,
    emailError: false,
  });

  const handleInfo = (e) => {
    console.log("handle info.");
    setUserInfo((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
    console.log(UserInfo);
    if (e.target.name == "name") {
      if (e.target.value.length < 3) {
        setFormError((prev) => {
          return { ...prev, [e.target.name + "Error"]: true };
        });
      } else {
        setFormError((prev) => {
          return { ...prev, [e.target.name + "Error"]: false };
        });
      }
    }

    if (e.target.name == "email") {
      if (!e.target.value.match(regex)) {
        setFormError((prev) => {
          return { ...prev, [e.target.name + "Error"]: true };
        });
      } else {
        setFormError((prev) => {
          return { ...prev, [e.target.name + "Error"]: false };
        });
      }
    }
    console.log("end");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(FormError);
    if (FormError.nameError == false && FormError.emailError == false) {
      alert(`name : ${UserInfo.name} and email : ${UserInfo.email}.`);
    } else {
      alert("not a valid data.");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nameField">Name : </label>
        <input type="text" name="name" id="nameField" onChange={handleInfo} />
        {FormError.nameError && (
          <span style={{ color: "red" }}>
            name can not be less than size of 3.
          </span>
        )}
        <br />
        <label htmlFor="emailField">Email : </label>
        <input type="text" name="email" id="emailField" onChange={handleInfo} />
        {FormError.emailError && (
          <span style={{ color: "red" }}>not a valid email.</span>
        )}
        <br />
        <button type="submit">Go</button>
      </form>
    </>
  );
}

export default App;
