import { FaSearch } from "react-icons/fa";
import "./search.css";
import React, { useState } from "react";

const Search = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchValue);
  };

  return (
    <div className="search-container">
      <div className="searchBox">
        <form onSubmit={handleSubmit}>
          <input
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            type="text"
            placeholder="Search Projects...."
          />
          <button type="submit" className="srch-btn">
            <FaSearch size={14} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Search;
