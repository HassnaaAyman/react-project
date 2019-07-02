import React, { Component } from "react";
import Search from "../Components/search";
import Categories from "./Categories";
class SideNav extends Component {
  state = {};
  render() {
    return (
      <section className="filters">
        <Search />

        <div>
          <h5>Categories</h5>

          <ul className="list list--vr-separator">
            <Categories />
          </ul>
        </div>

        <div>
          <h5 />

          <div>
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
        </div>

        <div>
          <h5 />

          <div />
          <div />
          <div />
        </div>
      </section>
    );
  }
}

export default SideNav;
