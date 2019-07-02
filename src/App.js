import React, { Component } from "react";
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";
import Header from "./Containers/Header";
import Home from "./Containers/Home";
import AddProduct from "./Components/AddProduct";
import ProductDetails from "./Components/ProductDetails";
import "./App.css";
import ProductCockpit from "./Components/Product-cockpit";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">

          {/* <li><NavLink to="/product-details">ProductDetails</NavLink></li> */}
          <Header />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/add-product" component={AddProduct} />
              <Route
                exact
                path="/product-details/:id"
                component={ProductCockpit}
              />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
