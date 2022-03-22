import React, { Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import RequiredAuth from "./components/utility/RequiredAuth";
import Login from "./components/Login";
import RegisterForm from "./components/RegisterForm";
import Home from "./components/Home";
import { ReactNotifications } from "react-notifications-component";

import "react-notifications-component/dist/theme.css";

function App() {
  return (
    <Fragment>
      <ReactNotifications />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/register" component={RegisterForm} />
          <Route
            path="/home"
            component={(props) => <RequiredAuth {...props} Component={Home} />}
          />
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
