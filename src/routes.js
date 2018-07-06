import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Form from "./component/Form/Form";
import Dashboard from "./component/Dashboard/Dashboard";

export default (
  <Switch>
    <Route exact path="/" component={Dashboard} />
    <Route path="/add" component={Form} />
    <Route path="/edit/:id" component={Form} />;
  </Switch>
);
