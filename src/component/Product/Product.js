import React from "react";

const Product = props => {
  //   console.log(props.inventory);
  let { product_id, name, description, price, url } = props.inventory;

  return (
    <div>
      <div>Product</div>
      {name}
      {description}
      {price}
      {url}
      <button onClick={() => props.deleteProduct(product_id)}>
        Delete Product
      </button>
    </div>
  );
};

export default Product;
