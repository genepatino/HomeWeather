import React, { Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import RegisterForm from "./components/RegisterForm";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={RegisterForm}></Route>
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
