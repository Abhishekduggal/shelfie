import React, { Component } from "react";
import Product from "../Product/Product";
import { Link } from "react-router-dom";

const axios = require("axios");

class Dashboard extends Component {
  constructor() {
    super();

    this.state = {
      inventory: [],
      selectedID: null
    };
    this.getRequest = this.getRequest.bind(this);
    this.selectedProduct = this.selectedProduct.bind(this);
    this.deleteProduct = this.deleteProduct.bind(this);
  }

  componentDidMount(getRequest) {
    //   console.log(this.props);
    this.getRequest();
  }

  selectedProduct(selectedID) {
    this.setState({ selectedID: selectedID });
    console.log(selectedID);
  }

  getRequest() {
    axios.get("/api/inventory").then(res => {
      // console.log(res.data);
      this.setState({ inventory: res.data });
    });
  }

  deleteProduct(id) {
    axios.delete(`/api/product/${id}`, { id }).then(res => {
      this.props.getRequest();
    });
  }

  render() {
    // let { name, description, price, url } = this.props.inventory;
    // console.log(this.state.inventory);
    let inventory = this.state.inventory.map((item, i) => {
      // console.log(item);
      return (
        <div key={i} className="dashboard_inventory">
          {/* <Link to={`/edit/${item.product_id}`}> */}
          <Product
            inventory={item}
            deleteProduct={this.deleteProduct}
            // selectedProduct={this.props.selectedProduct}
          />
          {/* </Link> */}
        </div>
      );
    });
    return (
      <div>
        <div>Dashboard</div>
        {inventory}
        {/* <Product /> */}
      </div>
    );
  }
}

export default Dashboard;
