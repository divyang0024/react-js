import { useState } from "react";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

function App() {
  const [myData, setMyData] = useState(false);
  const [error, setError] = useState(false);
  const formSchema = yup.object({
    req: yup.number().required(" cannot leave request field empty"),
  });
  return (
    <>
      <Formik
        initialValues={{
          req: "",
        }}
        onSubmit={async (values, action) => {
          try {
            const res = await axios.get(
              `https://dummyjson.com/products/${values.req}`
            );
            setMyData({
              name: res.data.title,
              price: res.data.price,
              description: res.data.description,
            });
            setError(false);
          } catch (err) {
            setError(err.message);
            setMyData(false);
          }
          action.resetForm();
        }}
        validationSchema={formSchema}
      >
        <Form>
          <label htmlFor="reqField">Request : </label>
          <Field type="text" name="req" id="reqField"></Field>
          <ErrorMessage name="req" />
          <br />
          <button type="submit">Go</button>
        </Form>
      </Formik>
      {myData != false && <h1>{myData.name}</h1>}
      {myData != false && <h1>${myData.price}</h1>}
      {myData != false && <h1>{myData.description}</h1>}
      {error != false && <h1 style={{ color: "red" }}>{error}</h1>}
    </>
  );
}

export default App;
