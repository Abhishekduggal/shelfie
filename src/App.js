import React, { Component } from "react";
import "./App.css";
import { HashRouter, NavLink } from "react-router-dom";
import Dashboard from "./component/Dashboard/Dashboard";
import Form from "./component/Form/Form";
import Header from "./component/Header/Header";
import routes from "./routes";
const axios = require("axios");

class App extends Component {
  constructor() {
    super();

    this.state = {
      inventory: []
    };
    this.getRequest = this.getRequest.bind(this);
  }

  getRequest() {
    axios.get("/api/inventory").then(res => {
      //console.log(res.data);
      this.setState({ inventory: res.data });
    });
  }
  componentDidMount() {
    this.getRequest();
  }

  render() {
    return (
      <HashRouter>
        <div className="App">
          <Header />
          <Dashboard
            inventory={this.state.inventory}
            getRequest={this.getRequest}
          />
          <Form getRequest={this.getRequest} />
        </div>
        {/* {routes} */}
      </HashRouter>
    );
  }
}

export default App;
