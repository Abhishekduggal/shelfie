import React, { Component } from "react";
import Product from "../Product/Product";
const axios = require("axios");

class Dashboard extends Component {
  constructor() {
    super();

    this.deleteProduct = this.deleteProduct.bind(this);
  }
  deleteProduct(id) {
    axios.delete(`/api/product/${id}`, { id }).then(res => {
      this.props.getRequest();
    });
  }

  render() {
    // let { name, description, price, url } = this.props.inventory;
    let inventory = this.props.inventory.map((item, i) => {
      //console.log(item);
      return (
        <div key={i} className="dashboard_inventory">
          <Product
            inventory={item}
            deleteProduct={this.deleteProduct}
            selectedProduct={this.props.selectedProduct}
          />
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
