import * as Yup from "yup";

export const formSchema = Yup.object({
  name: Yup.string()
    .min(3, "must have more than 3 characters")
    .max(20, "must have less than 20 characters")
    .required("cannot leave name field empty"),
  email: Yup.string()
    .email("not a valid email")
    .required("cannot leave email field empty"),
});
