import React, { Component } from "react";
import SideNav from "./Sidenav";
import ProductList from "./product-list";
class Home extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <SideNav />
        <ProductList />
      </div>
    );
  }
}

export default Home;
