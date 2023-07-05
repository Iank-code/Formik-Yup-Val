import * as yup from "yup";

export const loginValidator = yup.object({
  email: yup.string().required(),
  password: yup.string().required(),
});

export const signupValidator = yup.object({
  firstName: yup
    .string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: yup
    .string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: yup.string().email("Invalid email").required("Required"),
  //   name: yup
  //     .string()
  //     .min(4, "Name must be at least 4 characters")
  //     .max(50, "Name must be less than 50 characters")
  //     .required(),
  //   email: yup.string().email().required(),
  //   password: yup.string().min(4).required(),
  //   password_confirmation: yup
  //     .string()
  //     .min(6, "Password confirmation must be at least 4 characters")
  //     .required("Password confirmation is required")
  //     .oneOf([
  //       yup.ref("password"),
  //       "Password confirmation does not match with your password",
  //     ]),
});
