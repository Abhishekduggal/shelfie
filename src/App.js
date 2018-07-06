import React, { Component } from "react";

import "./App.css";
import Dashboard from "./component/Dashboard/Dashboard";
import Form from "./component/Form/Form";
import Header from "./component/Header/Header";

class App extends Component {
  constructor() {
    super();

    this.state = {
      inventory: [
        {
          name: "puppy",
          description: "cute puppy",
          price: 200,
          url: "google.com"
        },
        {
          name: "dog",
          description: "aggressive dog",
          price: 600,
          url: "google.com"
        }
      ]
    };
  }

  // componentDidMount() {
  //   axios.get("/api/shelfie").then(res => {
  //     console.log(res.data);
  //     this.setState({ inventory: res.data });
  //   });
  // }

  readInventory(name, description, price, url) {}

  render() {
    return (
      <div className="App">
        <Header />
        <Dashboard inventory={this.state.inventory} />
        <Form />
      </div>
    );
  }
}

export default App;
