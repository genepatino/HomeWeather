import React from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import AppActions from "../../redux/reducers/appReducer";
import { Link } from "react-router-dom";
import firebaseConfig from "../../firebase/firebaseConfig";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Button } from "../utility/styled";
import { useTranslation } from "react-i18next";
import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import { Store } from "react-notifications-component";
import constants from "../utility/constant/constants.js";

import imageRegister from "../../images/imageRegister.jpg";
import logoGitHub from "../../images/github.svg";
import logoGoogle from "../../images/google.svg";
import logoFacebook from "../../images/facebook.svg";
import classNames from "classnames";
import "./registerForm.scss";
import { ImageLogo } from "../utility/styled";
import animateWeather from "../../images/animateWeather.svg";

const RegisterForm = ({ user, setUser, history }) => {
  const auth = getAuth(firebaseConfig);

  const [t] = useTranslation("global");

  const formSchema = Yup.object({
    email: Yup.string()
      .email(t("labels.require-email"))
      .required(t("labels.require-general")),
    password: Yup.string()
      .min(6, t("labels.require-password-min"))
      .required(t("labels.require-general"))
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        t("labels.require-password")
      ),
    password_confirmation: Yup.string()
      .oneOf([Yup.ref("password"), null], t("labels.confirm-password"))
      .required(t("labels.require-general")),
  });

  return (
    <div className="container">
      <div className="formContainer">
        <div className="image-register">
          <img className="imageRegister" src={imageRegister} alt="" />
        </div>
        <Formik
          initialValues={{
            email: "",
            password: "",
            password_confirmation: "",
          }}
          validationSchema={formSchema}
          onSubmit={(value, { resetForm }) => {
            createUserWithEmailAndPassword(auth, value.email, value.password)
              .then((userCredential) => {
                Store.addNotification({
                  ...constants.notification,
                  title: "Wonderful!!!",
                  message: t("labels.notification-message-succes"),
                  type: "success",
                });

                const userIn = userCredential.user.email;
                console.log("userCredential", userCredential);
                setUser(userIn);

                resetForm();
                history.push("/home");
              })
              .catch((error) => {
                Store.addNotification({
                  ...constants.notification,
                  title: "Oh no!",
                  message: t("labels.notification-message-danger-register"),
                  type: "danger",
                });
              });
          }}
        >
          {({ errors, touched }) => (
            <Form className="form-container">
              <div className="form">
                <div className="title">
                  <h2 className="h2">{t("labels.register")}</h2>
                  <div className="logo-homeweather">
                    <p className="p-logo">HomeWeather</p>
                    <ImageLogo src={animateWeather}></ImageLogo>
                  </div>
                </div>
                <label>{t("labels.label-email")}</label>
                <Field
                  name="email"
                  type="email"
                  className={classNames("field-email", {
                    "field-email-error":
                      errors.email && errors.email && touched.email,
                  })}
                />
                <ErrorMessage name="email" component="div" className="error" />

                <label>{t("labels.label-password")}</label>
                <Field
                  name="password"
                  type="password"
                  className={classNames("field-password", {
                    "field-password-error":
                      errors.password && errors.password && touched.password,
                  })}
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="error"
                />

                <label>{t("labels.label-password-confirmation")}</label>
                <Field
                  name="password_confirmation"
                  type="password"
                  className={classNames("field-password-confirmation", {
                    "field-password-confirmation-error":
                      errors.password_confirmation &&
                      errors.password_confirmation &&
                      touched.password_confirmation,
                  })}
                />
                <ErrorMessage
                  name="password_confirmation"
                  component="div"
                  className="error"
                />

                <Button type="submit">{t("labels.sign-up")}</Button>
                <Link to="/" className="link-login">
                  {t("labels.login-here")}
                </Link>
                <div className="register-social-media">
                  <img className="logoGoogle" src={logoGoogle} alt="" />
                  <img className="logoFacebook" src={logoFacebook} alt="" />
                  <img className="logoGitHub" src={logoGitHub} alt="" />
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.appReducer.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setUser: (user) => dispatch(AppActions.setUser(user)),
  };
};

const RegisterFormWithRouter = withRouter(RegisterForm);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterFormWithRouter);
