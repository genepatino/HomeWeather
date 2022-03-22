import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

const RequiredAuth = ({ Component, user }) => {
  if (user !== null) {
    return <Component />;
  }
  return <Redirect to="/" />;
};

const mapStateToProps = (state) => {
  return {
    user: state.appReducer.user,
  };
};

export default connect(mapStateToProps, null)(RequiredAuth);
