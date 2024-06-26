import * as Yup from "yup";

export const formSchema = Yup.object({
  name: Yup.string()
    .min(3, "must have more than 3 characters")
    .max(20, "must have less than 20 characters")
    .required("cannot leave name field empty"),
  email: Yup.string()
    .email("not a valid email")
    .required("cannot leave email field empty"),
  age: Yup.number()
    .min(10, "too young")
    .max(50, "too old")
    .required("cannot leave age field empty"),
  password: Yup.string().matches(
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
    "password too weak"
  ),
  cpassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "re-check password")
    .required("cannot leave confirm password field empty"),
});
