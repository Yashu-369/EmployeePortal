import React from "react";
import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom";

import LoginPage from "../components/pages/LoginPage";
import HomePage from "../components/pages/HomePage";
import SignUpPage from "../components/pages/SignUpPage";


export default () => {
  return (
    <BrowserRouter>
      <Switch>
      <Route path="/" exact component={HomePage}/>
    <Route path="/login" exact component={LoginPage}/>
    <Route path="/signup" exact component={SignUpPage}/>
    <Route path="/home" exact component={HomePage}/>
        <Redirect to="/login" />
      </Switch>
    </BrowserRouter>
  );
};
