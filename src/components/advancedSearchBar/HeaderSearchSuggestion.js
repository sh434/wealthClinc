import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import useApiFetcher from "./../../hooks/useApiFetcher";
import { EMPTY_OBJECT } from "./../../assets/constants/index";
import "./HeaderSearchSuggestion.css";

const AdvancedSearchBar = ({ isOpen, onClose }) => {
  const [searchBarValue, setSearchedBarValue] = useState(EMPTY_OBJECT);

  return (
    <>
      {isOpen && (
        <div class="input-box searchHead_1" onMouseLeave={onClose}>
          <i class="uil uil-search"></i>
          <SearchSuggestionBar getSearchedValue={setSearchedBarValue} />
          <button class="button">
            <Link
              to={"/search"}
              state={{ searchBarValue }}
              className="searchBtn_1 text-white text-decoration-none"
            >
              Search
            </Link>
          </button>
        </div>
      )}
    </>
  );
};

export default AdvancedSearchBar;

export function SearchSuggestionBar({ placeHolder, getSearchedValue }) {
  const url = "https://bold-approval-c005df0fb8.strapiapp.com/api/projects?";
  const [isSuggestionOpen, setIsSuggestionOpen] = useState(false);
  const [value, setValue] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);

  const handleInput = (event) => {
    setValue(event.target.value);
  };

  const handleOpenSearchSuggestion = () => setIsSuggestionOpen(true);
  const handleCloseSearchSuggestion = () =>
    setTimeout(() => setIsSuggestionOpen(false), 300);

  const [searchSuggestions, isLoading, error] = useApiFetcher(url);

  useEffect(() => {
    if (value) {
      const filterData = searchSuggestions?.filter((item) => {
        const { Project_Name, Project_Configuration, Address } =
          item?.attributes || EMPTY_OBJECT;
        return (
          Project_Name.toLowerCase().includes(value.toLowerCase()) ||
          Project_Configuration.toLowerCase().includes(value.toLowerCase()) ||
          Address.toLowerCase().includes(value.toLowerCase())
        );
      });
      setFilteredSuggestions(filterData);
    } else {
      setFilteredSuggestions([]);
    }
  }, [value, searchSuggestions]);

  if (error) return <div>{error.message}</div>;
  if (isLoading || !searchSuggestions) return null;

  const handleSelectValue = (value, keyName) => {
    if (getSearchedValue) {
      getSearchedValue({ [keyName]: value });
    }
    setValue(value);
  };

  return (
    <div className="input-width_1 d-flex">
      {/* <div className="searchBarLogo fw-bold">
        <IoSearchOutline />
      </div> */}
      <input
        value={value}
        placeholder={placeHolder || "Search for locality, Property or Project"}
        onChange={handleInput}
        onClick={handleOpenSearchSuggestion}
        onBlur={handleCloseSearchSuggestion}
        onFocus={handleOpenSearchSuggestion}
      />

      {isSuggestionOpen && filteredSuggestions.length > 0 && (
        <div className="inputSuggestions_1">
          {filteredSuggestions?.map((item, idx) => {
            const { Project_Name, Project_Configuration, Address } =
              item?.attributes || EMPTY_OBJECT;

            return (
              <div key={idx}>
                {Project_Name && (
                  <li
                    onClick={() =>
                      handleSelectValue(Project_Name, "Project_Name")
                    }
                  >
                    {Project_Name}
                  </li>
                )}
                {Project_Configuration && (
                  <li
                    onClick={() =>
                      handleSelectValue(
                        Project_Configuration,
                        "Project_Configuration"
                      )
                    }
                  >
                    {Project_Configuration}
                  </li>
                )}
                {Address && (
                  <li onClick={() => handleSelectValue(Address, "Address")}>
                    {Address}
                  </li>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
