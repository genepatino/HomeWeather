import React from "react";
import { useTranslation } from "react-i18next";
/* import { useFirebaseApp } from "reactfire";*/
import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";

import classNames from "classnames";
import "./registerForm.scss";

const RegisterForm = () => {
  const [t] = useTranslation("global");

  const formSchema = Yup.object({
    name: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("campo requerido"),
    email: Yup.string().email("invalid email").required("campo requerido"),
    password: Yup.string()
      .min(6, "Password has to be longer than 6 characters!")
      .required("Password is required"),
    password_confirmation: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Passwords must match"
    ),
  });

  return (
    <div className="container">
      <div className="formContainer">
        <div className="image-register">HOLA</div>
        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
            password_confirmation: "",
          }}
          validationSchema={formSchema}
          onSubmit={(value) => {
            console.log(value);
          }}
        >
          {({ errors, touched }) => (
            <Form className="form-container">
              <div className="form">
                <h2>Registro</h2>
                <label>First Name</label>
                <Field
                  name="name"
                  type="text"
                  className={classNames("field-name", {
                    "field-name-error":
                      errors.name && errors.name && touched.name,
                  })}
                />
                <ErrorMessage name="name" />

                <label>Email Address</label>
                <Field name="email" type="email" className="field-email" />
                <ErrorMessage name="email" />

                <label>password</label>
                <Field
                  name="password"
                  type="password"
                  className="field-password"
                />
                <ErrorMessage name="password" />

                <label>password_confirmation</label>
                <Field
                  name="password_confirmation"
                  type="password"
                  className="field-password_confirmation"
                />
                <ErrorMessage name="password_confirmation" />

                <button type="submit" className="button-submit">
                  Submit
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
export default RegisterForm;
