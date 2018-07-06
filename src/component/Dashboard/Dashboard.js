import React, { Component } from "react";
import Product from "../Product/Product";

class Dashboard extends Component {
  render() {
    // let { name, description, price, url } = this.props.inventory;
    let inventory = this.props.inventory.map((item, i) => {
      //console.log(item);
      return (
        <div key={i} className="dashboard_inventory">
          <Product inventory={item} />
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
