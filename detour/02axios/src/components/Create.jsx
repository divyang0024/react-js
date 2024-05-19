import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { Link } from "react-router-dom";
import axios from "axios";
import RedErrorMessage from "./RedErrorMessage";
import * as yup from "yup";
import "../index.css";

function Create() {
  const [formError, setFormError] = useState({ error: null, msg: null });

  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const formSchema = yup.object({
    name: yup
      .string("must start from a character")
      .min(3)
      .max(20)
      .required("cannot leave name field empty"),
    age: yup.number("must be number").required("cannot leave age field empty"),
    email: yup
      .string()
      .matches(emailRegex, "not a valid email")
      .required("cannot leave email field empty"),
  });

  return (
    <>
      <div className="h-screen bg-green-300 flex justify-center items-center">
        <div className="p-12 bg-white rounded-xl">
          <Formik
            initialValues={{
              name: "",
              age: "",
              email: "",
            }}
            validationSchema={formSchema}
            onSubmit={async (values, action) => {
              try {
                const resp = await axios.post(
                  "https://6648b28c4032b1331bec258b.mockapi.io/crud",
                  { name: values.name, age: values.age, email: values.email }
                );
                setFormError({ error: false, msg: resp.status });
              } catch (err) {
                console.log(err);
                setFormError({ error: true, msg: err.message });
              }
              action.resetForm();
            }}
          >
            <Form className="grid grid-cols-2 gap-6">
              <h1 className="col-span-2 text-center text-4xl text-green-500">
                Create Data
              </h1>
              <label htmlFor="nameField">Name : </label>
              <Field
                className="border-2 text-center"
                type="text"
                id="nameField"
                name="name"
                placeholder="Your Name"
              ></Field>
              <RedErrorMessage name="name" />
              <label htmlFor="ageField">Age : </label>
              <Field
                className="border-2 text-center"
                type="text"
                id="ageField"
                name="age"
                placeholder="Your Age"
              ></Field>
              <RedErrorMessage name="age" />
              <label htmlFor="emailField">Email : </label>
              <Field
                className="border-2 text-center"
                type="email"
                id="emailField"
                name="email"
                placeholder="Your Email"
              ></Field>
              <RedErrorMessage name="email" />
              <input
                className="bg-green-500 p-2 border-transparent rounded-lg text-white hover:bg-blue-500 border-2 hover:border-black"
                type="submit"
                value="Create"
              />
              <Link
                to="/"
                className="bg-green-500 p-2 border-transparent rounded-lg text-white hover:bg-blue-500 border-2 hover:border-black text-center"
              >
                Read Data
              </Link>
              {formError.error == false && (
                <h1 className="text-green-500 text-xl col-span-2 text-center">
                  Post Request Successful {formError.msg}
                </h1>
              )}
              {formError.error == true && (
                <h1 className="text-red-500 text-xl col-span-2 text-center">
                  {formError.msg}
                </h1>
              )}
            </Form>
          </Formik>
        </div>
      </div>
    </>
  );
}

export default Create;
