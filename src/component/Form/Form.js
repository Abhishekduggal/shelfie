import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      description: "",
      price: "",
      url: ""
    };
    this.updateNameInput = this.updateNameInput.bind(this);
    this.updateDescriptionInput = this.updateDescriptionInput.bind(this);
    this.updatePriceInput = this.updatePriceInput.bind(this);
    this.updateUrl = this.updateUrl.bind(this);
  }
  updateNameInput(name) {
    this.setState({ name: name });
  }

  updateDescriptionInput(description) {
    this.setState({ description: description });
  }

  updatePriceInput(price) {
    this.setState({ price: price });
  }

  updateUrl(url) {
    this.setState({ url: url });
  }

  handleClickAddProduct() {
    let { name, description, price, url } = this.state;
    this.props.AddProduct(name, description, price, url);
    // AddProduct Method will be created in App Js and passed along to form

    this.setState({
      name: "",
      description: "",
      price: "",
      url: ""
    });
  }

  handleClickCancelProduct() {
    let { name, description, price, url } = this.state;
    this.setState({
      name: "",
      description: "",
      price: "",
      url: ""
    });
  }

  render() {
    let { name, description, price, url } = this.state;
    return (
      <section>
        <h3>Form</h3>
        <input
          className="Name_Input"
          placeholder="Name of the item"
          value={name}
          onChange={e => this.updateNameInput(e.target.value)}
        />

        <input
          className="Description_Input"
          placeholder="Description of the item"
          value={description}
          onChange={e => this.updateDescriptionInput(e.target.value)}
        />

        <input
          className="Price_Input"
          placeholder="Price of the item"
          value={price}
          onChange={e => this.updatePriceInput(e.target.value)}
        />

        <input
          className="Url"
          placeholder="URL of the item"
          value={url}
          onChange={e => this.updateUrl(e.target.value)}
        />

        <div className="Add_Product">
          <button onClick={this.handleClickAddProduct}>Add Product</button>
        </div>

        <div className="Cancel_Product">
          <button onClick={this.handleClickCancelProduct}>
            Cancel Product
          </button>
        </div>
      </section>
    );
  }
}

export default Form;
