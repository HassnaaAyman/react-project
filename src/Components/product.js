import React from "react";
import { Link } from "react-router-dom";

const Product = (props) => {
  return (
    <div className="item-medium-1">
      {props.onSale ? <div className="item-medium-1__alert"> Sale</div> : null}
      <div

        className="item-medium-1__image image"
        style={{ backgroundImage: "url(" + props.ProductImg + ")" }}
      >
        <a href="/" className="item-medium-1__action">
          Add to Cart
    </a>
      </div>
      <Link to={"/product-details/" + props.id}>
        <h4>{props.name}</h4>
        <div className="flex-row">
          {props.onSale ?
            <div>
              <del>{props.priceBefore}</del>
              <span className="lable">{props.priceAfter}</span>
            </div> :
            <span className="lable">{props.priceBefore}</span>}
        </div>
      </Link>
      <div className="crud-actions">
        <Link to={"/product-details/" + props.id}>
          <i className="far fa-eye" />
        </Link>
        <a href="/">
          <i className="fas fa-edit" />
        </a>
        <a>
          <i className="fas fa-trash-alt" onClick={(e) => { e.preventDefault(); props.deletedProduct() }} />
        </a>
      </div>
    </div>
  );
}

export default Product;
