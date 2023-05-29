import React from "react";
import { useState } from "react";
import SearchResult from "../components/searchResult";

function ManageAccounts(){
    const [searchTerm, setSearchTerm] = useState("");
    const [showSearchBar, setShowSearchBar] = useState(true);
  
    const handleSearch = (event) => {
      const { value } = event.target;
      setSearchTerm(value);
      
      if (value === "1") {
        setShowSearchBar(false);
      } else {
        setShowSearchBar(true);
      }
    };
    return(
        <div className="manageAccounts">
       {showSearchBar && (
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Enter a search term..."
          className="search-input"
        />
      )}

      {!showSearchBar && (
        <SearchResult />
      )}
        </div>
    );
}
export default ManageAccounts;