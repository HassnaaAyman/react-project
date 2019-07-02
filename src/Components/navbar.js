import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <nav className="nav">
        <ul className="nav__items list list--hr">
          <li className="nav__item">
            <Link className="nav__link" to="/">
              Home
            </Link>
          </li>
          <li className="nav__item dropdown ">
            <a className="nav__link dropdown__header" href="/">
              Products
            </a>

            <div className="dropdown__body">
              <ul className=" list">
                <li className="list__item">
                  <Link className="nav__inner-link" to="/">
                    Product Listing
                  </Link>
                </li>
                <li className="list__item">
                  <Link className="nav__inner-link" to="/add-product">
                    Add Product
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav__item">
            <Link className="nav__link" to="/product-details">
              Contact Us
            </Link>
          </li>
          <li className="nav__item">
            <a className="nav__link" href="/">
              About Us
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
