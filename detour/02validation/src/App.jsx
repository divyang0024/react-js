import { useFormik } from "formik";
import { formSchema } from "./FormSchema";

function App() {
  const initData = {
    name: "",
    email: "",
  };
  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: initData,
    onSubmit: (values) => {
      console.log(values.name);
      console.log(values.email);
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
          value={values.name}
        />
        <span style={{ color: "red" }}>{errors.name}</span>
        <br />
        <label htmlFor="emailField">Email : </label>
        <input
          type="text"
          name="email"
          id="emailField"
          onChange={handleChange}
          value={values.email}
        />
        <span style={{ color: "red" }}>{errors.email}</span>
        <button type="submit">Go</button>
      </form>
    </>
  );
}

export default App;
