import React, { Component } from "react";
import Category from "../Components/category";
class Categories extends Component {
  state = {
    categories: [
      "Arts & Crafts",
      "Automotive",
      "Baby",
      "Books",
      "Eletronics",
      "Women's Fashion",
      "Men's Fashion",
      "Health & Household",
      "Home & Kitchen",
      "Military Accessories",
      "Movies & Television",
      "Sports & Outdoors",
      "Tools & Home Improvement",
      "Toys & Games"
    ]
  };
  render() {
    return this.state.categories.map(c => <Category category={c} />);
  }
}
export default Categories;
