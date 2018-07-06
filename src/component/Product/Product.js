import React from "react";

const Product = props => {
  //   console.log(props.inventory);
  let { name, description, price, url } = props.inventory;
  return (
    <div>
      <div>Product</div>
      {name}
      {description}
      {price}
      {url}
    </div>
  );
};

export default Product;
