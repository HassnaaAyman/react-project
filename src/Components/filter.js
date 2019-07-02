import React from "react";
import { Link } from "react-router-dom";
const Filter = () => {
  return (
    <div className="item-listing__tools">
      <select className="form-control" name="" id="">
        <option value="1">Featured</option>
        <option value="2">Price low to high</option>
        <option value="3">Price high to low</option>
        <option value="4">Name</option>
      </select>
      <Link className="action-btn" to="/add-product">
        <i className="fas fa-plus" />
      </Link>
    </div>
  );
};

export default Filter;
