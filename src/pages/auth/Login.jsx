import React from "react";
import { Formik, Form, Field } from "formik";
import { loginValidator } from "../../utils/validators/auth.validators";

export const Login = () => (
  <div>
    <h1>Login</h1>
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={loginValidator}
      onSubmit={(values) => {
        // same shape as initial values
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <Field name="email" type="email" />
          {errors.email && touched.email ? <div>{errors.email}</div> : null}

          <Field name="password" type="password" />
          {errors.password && touched.password ? (
            <div>{errors.password}</div>
          ) : null}
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  </div>
);
