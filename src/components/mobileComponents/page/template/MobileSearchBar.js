import { Link } from "react-router-dom";
import { useState } from "react";

import { SearchSuggestionBar } from "../../../advancedSearchBar/HeaderSearchSuggestion";

import { EMPTY_OBJECT } from "../../../../assets/constants";
import "./mobileSearchBar.css";

const MobileSearchBar = () => {
  const [searchBarValue, setSearchedBarValue] = useState(EMPTY_OBJECT);
  return (
    <div className="mobSearchBar">
      <SearchSuggestionBar
        placeHolder="Search for locality"
        getSearchedValue={setSearchedBarValue}
      />
      <button className="btn1">
        <Link
          to={"/search"}
          state={{ searchBarValue }}
          className="searchBtn_1 text-white text-decoration-none"
        >
          Search
        </Link>
      </button>
    </div>
  );
};

export default MobileSearchBar;
