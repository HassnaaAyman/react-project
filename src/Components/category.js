import React from "react";
const Category = props => {
  const { category } = props;
  return (
    <li className="link list__item">
      <i className="link__icon fas fa-angle-right" />
      {category}
    </li>
  );
};

export default Category;
