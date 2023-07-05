import React from "react";
import { Formik, Form, Field } from "formik";
import { signupValidator } from "../../utils/validators/auth.validators";

export const Register = () => (
  <div>
    <h1>Signup</h1>
    <Formik
      initialValues={{
        email: "",
        name: "",
        password: "",
        password_confirmation: "",
      }}
      validationSchema={signupValidator}
      onSubmit={(values) => {
        // same shape as initial values
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <Field name="name" />
          {errors.name && touched.name ? <div>{errors.name}</div> : null}

          <Field name="email" type="email" />
          {errors.email && touched.email ? <div>{errors.email}</div> : null}

          <Field name="password" type="password" />
          {errors.password && touched.password ? (
            <div>{errors.password}</div>
          ) : null}

          <Field name="password_confirmation" type="password" />
          {errors.password_confirmation && touched.password_confirmation ? (
            <div>{errors.password_confirmation}</div>
          ) : null}
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  </div>
);
