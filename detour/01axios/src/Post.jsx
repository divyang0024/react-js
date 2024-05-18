import React, { useState } from "react";
import * as yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
const ApiUri = "https://jsonplaceholder.typicode.com/posts";
const formSchema = yup.object({
  title: yup.string().required(" cannot leave title field empty"),
  body: yup.string().required(" cannot leave body field empty"),
});

function Post() {
  const [message, setMessage] = useState(null);
  return (
    <>
      <Formik
        initialValues={{ title: "", body: "" }}
        validationSchema={formSchema}
        onSubmit={async (values) => {
          try {
            const response = await axios.post(ApiUri, {
              title: values.title,
              body: values.body,
            });
            setMessage(response.status);
          } catch (err) {
            console.log(err);
          }
        }}
      >
        <Form>
          <label htmlFor="titleField">Title : </label>
          <Field type="text" name="title" id="titleField"></Field>
          <span style={{ color: "red" }}>
            <ErrorMessage name="title" />
          </span>
          <br />
          <br />
          <label htmlFor="bodyField">Body : </label>
          <Field type="text" name="body" id="bodyField"></Field>
          <span style={{ color: "red" }}>
            <ErrorMessage name="body" />
          </span>
          <br />
          <br />
          <input type="submit" value="Go" />
        </Form>
      </Formik>
      {message == 201 && (
        <h1 style={{ color: "green" }}>
          Post request succesfully sent : {message}
        </h1>
      )}
    </>
  );
}

export default Post;
