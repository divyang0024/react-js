import { useState } from "react";

function App() {
  const [country, setCountry] = useState("UK");
  const [isStudent, setIsStudent] = useState(false);
  const [haveDegree, setHaveDegree] = useState(false);
  const [programme, setProgramme] = useState("");

  const chooseProgramme = (e) => {
    {
      setProgramme(e.target.value);
    }
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(country);
          console.log(isStudent);
          console.log(haveDegree);
          console.log(programme);
        }}
      >
        <label>Select Country : </label>
        <select value={country} onChange={(e) => setCountry(e.target.value)}>
          <option value="USA">USA</option>
          <option value="UAE">UAE</option>
          <option value="UK">UK</option>
        </select>
        <br />
        <label>Are you a student : </label>
        <input
          type="checkbox"
          name="student"
          value={isStudent}
          onChange={() => setIsStudent(!isStudent)}
        ></input>
        <br />
        <label>Have a degree : </label>
        <input
          type="checkbox"
          name="degree"
          value={haveDegree}
          onChange={() => setHaveDegree(!haveDegree)}
        ></input>
        <br />

        <input
          type="radio"
          name="programme"
          value="BCA"
          onChange={chooseProgramme}
        />
        <label>BCA</label>
        <input
          type="radio"
          name="programme"
          value="BBA"
          onChange={chooseProgramme}
        />
        <label>BBA</label>
        <input
          type="radio"
          name="programme"
          value="BCOM"
          onChange={chooseProgramme}
        />
        <label>BCOM</label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default App;
