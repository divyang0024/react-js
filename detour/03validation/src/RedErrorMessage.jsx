import React from "react";
import { ErrorMessage } from "formik";

function RedErrorMessage({ name }) {
  return (
    <div style={{ color: "red" }}>
      <ErrorMessage name={name} />
    </div>
  );
}

export default RedErrorMessage;
