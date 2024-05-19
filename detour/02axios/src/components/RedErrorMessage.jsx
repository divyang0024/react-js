import React from "react";
import { ErrorMessage } from "formik";

function RedErrorMessage({ name }) {
  return (
    <div className="text-red-500 col-span-2">
      <ErrorMessage name={name} />
    </div>
  );
}

export default RedErrorMessage;
