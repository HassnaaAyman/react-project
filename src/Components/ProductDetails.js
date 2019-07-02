import React, { Component } from "react";
import ProductCockpit from "./Product-cockpit";
import ProductTabs from "../Components/ProductTabs";
class ProductDetails extends Component {
  state = {
    relatedProducts: []
  };
  render() {
    return (
      <div className="product-details container">
        <ProductCockpit />
        <ProductTabs />
        <div className="separator" />
      </div>
    );
  }
}

export default ProductDetails;
