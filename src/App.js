import React, { Component } from "react";
import "./App.css";
import { HashRouter, NavLink } from "react-router-dom";
import Dashboard from "./component/Dashboard/Dashboard";
import Form from "./component/Form/Form";
import Header from "./component/Header/Header";
import routes from "./routes";
const axios = require("axios");

class App extends Component {
  render() {
    console.log(this.props);
    return (
      <HashRouter>
        <div className="App">
          <Header />
          {routes}
        </div>
      </HashRouter>
    );
  }
}

export default App;
