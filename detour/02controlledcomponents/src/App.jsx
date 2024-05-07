import { useState } from "react";

function App() {
  const [UserInfo, setUserInfo] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    setUserInfo((prevInfo) => {
      return {
        ...prevInfo,
        [e.target.name]: e.target.value,
      };
    });
    console.log(e.target.value);
  };

  return (
    <>
      <form>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          placeholder="xyz"
          onChange={handleChange}
          value={UserInfo.name}
        ></input>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          placeholder="xyz@gmail.com"
          onChange={handleChange}
          value={UserInfo.email}
        ></input>
        <button type="submit">Submit Form</button>
      </form>
    </>
  );
}

export default App;
