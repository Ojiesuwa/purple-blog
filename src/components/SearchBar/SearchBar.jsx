import React from "react";
import "./SearchBar.css";

const SearchBar = () => {
  return (
    <div className="SearchBar">
      <i className="fa-light fa-search"></i>
      <input type="text" placeholder="Search for blogs..." />
    </div>
  );
};

export default SearchBar;
