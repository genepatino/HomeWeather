import React from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import firebaseConfig from "../../firebase/firebaseConfig";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { connect } from "react-redux";
import AppActions from "../../redux/reducers/appReducer";
import { Button, ImageLogo } from "../utility/styled";
import { useTranslation } from "react-i18next";
import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import { Store } from "react-notifications-component";
import constants from "../utility/constant/constants.js";
import loginImage from "../../images/login.jpg";
import logoGitHub from "../../images/github.svg";
import logoGoogle from "../../images/google.svg";
import logoFacebook from "../../images/facebook.svg";
import classNames from "classnames";

import "./login.scss";
import animateWeather from "../../images/animateWeather.svg";
import { facebookProvider } from "../../firebase/config/authMedia";
import socialMediaAuth from "../../firebase/service/authentication";

const Login = ({ setUser, history }) => {
  const auth = getAuth(firebaseConfig);

  const [t] = useTranslation("global");

  /*   const handleClickFacebook = async (provider) => {
    await socialMediaAuth(provider);
    console.log(provider);
  }; */

  const formSchema = Yup.object({
    email: Yup.string()
      .email(t("labels.require-email"))
      .required(t("labels.require-general")),
    password: Yup.string()
      .min(6, t("labels.require-password-min"))
      .required(t("labels.require-general")),
  });

  return (
    <div className="container-login">
      <div className="formContainer-login">
        <div className="image-login">
          <img className="imageLogin" src={loginImage} alt="" />
        </div>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={formSchema}
          onSubmit={(value, { resetForm }) => {
            signInWithEmailAndPassword(auth, value.email, value.password)
              .then((userCredential) => {
                // Signed in
                const userIn = userCredential.user.email;
                setUser(userIn);
                resetForm();
                history.push("/home");
              })
              .catch((error) => {
                Store.addNotification({
                  ...constants.notification,
                  title: "Oh no!",
                  message: t("labels.notification-message-danger"),
                  type: "danger",
                });
              });
          }}
        >
          {({ errors, touched }) => (
            <Form className="form-container-login">
              <div className="form-login">
                <div className="title">
                  <h2 className="h2">{t("labels.title-login")}</h2>
                  <div className="logo-homeweather">
                    <p className="p-logo">HomeWeather</p>
                    <ImageLogo src={animateWeather}></ImageLogo>
                  </div>
                </div>

                <div className="input-button">
                  <label>{t("labels.label-email")}</label>
                  <Field
                    name="email"
                    type="email"
                    className={classNames("field-email", {
                      "field-email-error":
                        errors.email && errors.email && touched.email,
                    })}
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="error"
                  />

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

                  <Button type="submit">{t("labels.login")}</Button>
                  <Link to="/register" className="link">
                    {t("labels.register-here")}
                  </Link>
                </div>
                <div className="register-social-media-login">
                  <img className="logoGoogle" src={logoGoogle} alt="" />
                  <img
                    /* onClick={() => handleClickFacebook(facebookProvider)} */
                    className="logoFacebook"
                    src={logoFacebook}
                    alt=""
                  />
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

const mapDispatchToProps = (dispatch) => {
  return {
    setUser: (user) => dispatch(AppActions.setUser(user)),
  };
};
const LoginWithRouter = withRouter(Login);
export default connect(null, mapDispatchToProps)(LoginWithRouter);
