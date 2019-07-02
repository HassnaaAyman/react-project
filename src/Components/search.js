import React from "react";
const Search = () => {
  return (
    <div className="search-box">
      <input
        className="search-box__input"
        placeholder="Search..."
        type="text"
        name="txt_search"
        id=""
      />
      <button type="submit" className="search-box__btn">
        <i className="fas fa-search" />
      </button>
    </div>
  );
};

export default Search;
