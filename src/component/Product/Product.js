import React from "react";
import { Link } from "react-router-dom";

const Product = props => {
  console.log(props);
  let { product_id, name, description, price, url } = props.inventory;
  return (
    <div>
      <div>Product</div>
      {name}
      {description}
      {price}
      <img src={url} alt={url} />

      <Link to={`/edit/${product_id}`}>
        <button onClick={() => product_id}> Edit </button>
      </Link>

      <button onClick={() => props.deleteProduct(product_id)}>
        Delete Product
      </button>
    </div>
  );
};

export default Product;
