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
      inventory: [],
      selectedID: null
    };
    this.getRequest = this.getRequest.bind(this);
    this.selectedProduct = this.selectedProduct.bind(this);
  }

  selectedProduct(selectedID) {
    this.setState({ selectedID: selectedID });
    console.log(selectedID);
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
            selectedProduct={this.selectedProduct}
          />
          <Form
            getRequest={this.getRequest}
            selectedID={this.state.selectedID}
          />
          {/* {routes} */}
        </div>
      </HashRouter>
    );
  }
}

export default App;
