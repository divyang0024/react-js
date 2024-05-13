import { useFormik } from "formik";
import { formSchema } from "./FormSchema";

function App() {
  const initData = {
    name: "",
    email: "",
    age: "",
    password: "",
    cpassword: "",
  };
  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: initData,
      onSubmit: (values, action) => {
        console.log(values.name);
        console.log(values.email);
        console.log(values.age);
        console.log(values.password);
        action.resetForm();
      },
      validationSchema: formSchema,
    });
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nameField">Name : </label>
        <input
          type="text"
          name="name"
          id="nameField"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.name}
        />
        {touched.name && errors.name ? (
          <span style={{ color: "red" }}>{errors.name}</span>
        ) : null}
        <br />
        <label htmlFor="emailField">Email : </label>
        <input
          type="text"
          name="email"
          id="emailField"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
        />
        {touched.email && errors.email ? (
          <span style={{ color: "red" }}>{errors.email}</span>
        ) : null}
        <br />
        <label htmlFor="ageField">Age : </label>
        <input
          type="text"
          name="age"
          id="ageField"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.age}
        />
        {touched.age && errors.age ? (
          <span style={{ color: "red" }}>{errors.age}</span>
        ) : null}
        <br />
        <label htmlFor="passwordField">password : </label>
        <input
          type="password"
          name="password"
          id="passwordField"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.password}
        />
        {touched.password && errors.password ? (
          <span style={{ color: "red" }}>{errors.password}</span>
        ) : null}
        <br />
        <label htmlFor="cpasswordField">Confirm Password : </label>
        <input
          type="password"
          name="cpassword"
          id="cpasswordField"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.cpassword}
        />
        {touched.cpassword && errors.cpassword ? (
          <span style={{ color: "red" }}>{errors.cpassword}</span>
        ) : null}
        <br />
        <button type="submit">Go</button>
      </form>
    </>
  );
}

export default App;
