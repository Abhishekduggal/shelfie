import React, { Component } from "react";
const axios = require("axios");

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedID: this.props.match.params.id || null,
      name: "",
      description: "",
      price: "",
      url: ""
    };
    this.updateNameInput = this.updateNameInput.bind(this);
    this.updateDescriptionInput = this.updateDescriptionInput.bind(this);
    this.updatePriceInput = this.updatePriceInput.bind(this);
    this.updateUrl = this.updateUrl.bind(this);
    this.handleClickAddProduct = this.handleClickAddProduct.bind(this);
    this.handleClickCancelProduct = this.handleClickCancelProduct.bind(this);
    this.handleClickEditProduct = this.handleClickEditProduct.bind(this);
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

  createProduct(name, description, price, url) {
    //let { name, description, price, url } = this.state;

    axios.post("/api/product", { name, description, price, url }).then(res => {
      console.log(res.data);
      this.props.getRequest();
      // this.setState({ : res.data });
    });
  }

  handleClickAddProduct() {
    let { name, description, price, url } = this.state;
    // console.log(name, description, price, url);
    //this.props.AddProduct(name, description, price, url);
    // AddProduct Method will be created in App Js and passed along to form
    this.createProduct(name, description, price, url);

    this.setState({
      name: "",
      description: "",
      price: "",
      url: ""
    });
  }

  handleClickCancelProduct() {
    //let { name, description, price, url } = this.state;
    this.setState({
      name: "",
      description: "",
      price: "",
      url: ""
    });
  }

  handleClickEditProduct() {
    let { name, description, price } = this.state;
    let image_url = this.state.url;
    // console.log(name, description, price, image_url);

    axios
      .put(`/api/product/${this.props.match.params.id}`, {
        name,
        description,
        price,
        image_url
      })
      .then(res => {
        console.log(res.data);
        // this.props.getRequest();
      });
  }

  async componentDidMount() {
    let res = await axios.get(`/api/product/${this.props.match.params.id}`);
    let { name, description, price, url } = res.data[0];
    this.setState({ name, description, price, url });
  }

  componentDidUpdate(prevProps) {
    console.log(prevProps);
    if (prevProps.match.params.id !== this.props.match.params.id) {
      //   console.log("Yoo");
      this.setState({ selectedID: this.props.match.params.id });
    }
  }
  render() {
    let { name, description, price, url } = this.state;
    console.log(this.props);
    let submitButton =
      this.state.selectedID === null ? (
        <div className="Add_Product">
          <button onClick={this.handleClickAddProduct}>Add Product</button>
        </div>
      ) : (
        <div className="Save_Product">
          <button onClick={this.handleClickEditProduct}>Save Changes</button>
        </div>
      );

    console.log(this.props);
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

        {submitButton}

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
