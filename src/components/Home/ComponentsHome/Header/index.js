import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getAuth, signOut } from "firebase/auth";
import firebaseConfig from "../../../../firebase/firebaseConfig";
import { connect } from "react-redux";
import AppActions from "../../../../redux/reducers/appReducer";
import { Button } from "../../../utility/styled";
import { useTranslation } from "react-i18next";
import AddCity from "./AddCity";

import "./header.scss";
import "../../../utility/FontAwesomeIcon/index";

const Header = ({ user, setUser }) => {
  const [t, i18n] = useTranslation("global");
  const [language, setLanguage] = useState(i18n.language);
  const auth = getAuth(firebaseConfig);
  const idUser = user[0];
  const idUserUpperCase = idUser.toUpperCase();

  const handleTranslateClick = () => {
    if (language === "es") {
      setLanguage("en");
      i18n.changeLanguage("en");
    } else {
      setLanguage("es");
      i18n.changeLanguage("es");
    }
  };

  const closeSesion = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="header">
      <div className="search-input">
        <AddCity />
      </div>
      <div className="buttons">
        <Button onClick={handleTranslateClick}>{t("labels.translate")}</Button>
        <div className="icon-container" onClick={closeSesion}>
          <div className="user-icon">{idUserUpperCase}</div>
          <FontAwesomeIcon
            className="close-sesion-icon"
            icon="fa-right-from-bracket"
          />
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Header);
