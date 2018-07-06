import React, { Component } from "react";
import "./App.css";
import Dashboard from "./component/Dashboard/Dashboard";
import Form from "./component/Form/Form";
import Header from "./component/Header/Header";
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
      <div className="App">
        <Header />
        <Dashboard inventory={this.state.inventory} />
        <Form getRequest={this.getRequest} />
      </div>
    );
  }
}

export default App;
