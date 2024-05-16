import { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import RedErrorMessage from "./RedErrorMessage";

function App() {
  const [formData, setFormData] = useState({});
  const formSchema = yup.object({
    name: yup.string().min(3).max(20).required("empty field not allowed"),
    age: yup.string().required("empty field not allowed"),
    password: yup
      .string()
      .matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)
      .required("empty field not allowed"),
    gender: yup.string().required("empty field not allowed"),
    hobbies: yup.array().min(1),
    country: yup.string().required("empty field not allowed"),
    comment: yup.string().max(500).required("empty field not allowed"),
  });
  return (
    <>
      <Formik
        validationSchema={formSchema}
        initialValues={{
          name: "",
          age: "",
          password: "",
          gender: "",
          hobbies: [],
          country: "",
          comment: "",
        }}
        onSubmit={(values) => {
          console.log(values);
          setFormData(values);
        }}
      >
        <Form>
          <label htmlFor="nameField">Name </label>
          <Field type="text" name="name" id="nameField"></Field>
          <RedErrorMessage name="name" />
          <br />
          <label htmlFor="ageField">Age </label>
          <Field type="text" name="age" id="ageField"></Field>
          <RedErrorMessage name="age" />
          <br />
          <label htmlFor="passwordField">Password </label>
          <Field type="password" name="password" id="passwordField"></Field>
          <RedErrorMessage name="password" />
          <br />
          <label htmlFor="">Gender</label>
          <br />
          <label htmlFor="">Male</label>
          <Field type="radio" name="gender" value="male"></Field>
          <label htmlFor="">Female</label>
          <Field type="radio" name="gender" value="female"></Field>
          <RedErrorMessage name="gender" />
          <br />
          <label htmlFor="">Hobbies</label>
          <br />
          <label htmlFor="">Music</label>
          <Field type="checkbox" name="hobbies" value="music"></Field>
          <br />
          <label htmlFor="">Games</label>
          <Field type="checkbox" name="hobbies" value="games"></Field>
          <RedErrorMessage name="hobbies" />
          <br />
          <label htmlFor="">Country</label>
          <br />
          <Field as="select" name="country">
            <option value="">Select</option>
            <option value="US">US</option>
            <option value="UK">UK</option>
            <option value="UAE">UAE</option>
          </Field>
          <RedErrorMessage name="country" />
          <br />
          <label htmlFor="">Comments</label>
          <Field as="textarea" name="comment"></Field>
          <RedErrorMessage name="comment" />
          <br />
          <button type="submit">Go</button>
        </Form>
      </Formik>
      <h1>{formData.name}</h1>
      <h1>{formData.age}</h1>
      <h1>{formData.password}</h1>
      <h1>{formData.gender}</h1>
      <h1>{formData.country}</h1>
      <h1>{formData.hobbies}</h1>
      <h1>{formData.comment}</h1>
    </>
  );
}

export default App;
