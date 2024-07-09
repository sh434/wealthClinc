import { Checkbox } from "@mui/material";
import { IoSearchOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import CustomDropDown from "../globalComponents/customDropDown/CustomDropDown";
import useApiFetcher from "./../../hooks/useApiFetcher";
import {
  CITY_NAME,
  BUILDING_TYPE,
  //  BUILDING_BUDGET,
} from "../../assets/IMG";
import { EMPTY_OBJECT } from "./../../assets/constants/index";
import BudgetSelect from "./BudgetSelect/BudgetSelect";
import "./AdvancedSearchBar.css";

const DROP_DOWNS_TYPE = {
  cityName: [],
  selectType: [],
  budget: "",
};

const AdvancedSearchBar = () => {
  const [dropDownConfig, setDropDownConfig] = useState({
    cityName: false,
    selectType: false,
    budget: false,
  });
  const [dropDownValue, setDropDownValue] = useState(DROP_DOWNS_TYPE);
  const keys = Object.keys(DROP_DOWNS_TYPE);
  const [searchBarValue, setSearchedBarValue] = useState(EMPTY_OBJECT);

  const [budget, setBudget] = useState(null);

  // const [radioBtnValue, setRadioBtnValue] = useState(null);

  // const handleSearchBtn = () => {
  //   const {
  //     cityName = "",
  //     selectType = "",
  //     budget = "",
  //   } = dropDownValue || EMPTY_OBJECT;
  //   return { cityName, selectType, budget, ...searchBarValue, ...budget };
  // };

  // const getProperty = () => {
  //   if (radioBtnValue === SORTED_BY_PROPERTY_TYPE.COMMERCIAL) {
  //     return COMMERCIAL_PROPERTY;
  //   }
  //   if (radioBtnValue === SORTED_BY_PROPERTY_TYPE.RESIDENTIAL) {
  //     return RESIDENTIAL_PROPERTY;
  //   }
  //   return null;
  // };

  return (
    <header className="my-2 d-flex advancedSearchBar">
      <div className="col-md-5 d-flex">
        <div className="col-md-4 mr-3 d-none d-lg-block">
          <CustomDropDown
            data={CITY_NAME}
            styleMenu={{ width: "150px" }}
            text={"Select City"}
            children={<SearchDropDownButtons />}
            isDropDownOpen={dropDownConfig.cityName === true}
            setIsDropDownOpen={() =>
              setDropDownConfig({
                cityName: !dropDownConfig.cityName,
                selectType: false,
                budget: false,
              })
            }
            dropDownValueKeyName={keys[0]}
            setDropDownValue={setDropDownValue}
          />
        </div>

        <div className="col-md-3 mr-3 d-none d-lg-block border">
          {/* <DropDown
            getValue={setRadioBtnValue}
            children={
              <CustomDropDown
                data={getProperty()}
                styleMenu={{ width: "164px" }}
                text={"Type"}
                isDropDownOpen={dropDownConfig.selectType}
                setIsDropDownOpen={() =>
                  setDropDownConfig({
                    cityName: false,
                    selectType: !dropDownConfig.selectType,
                    budget: false,
                  })
                }
                children={<SearchDropDownButtons />}
                dropDownValueKeyName={keys[1]}
                setDropDownValue={setDropDownValue}
              />
            }
          /> */}
          <CustomDropDown
            data={BUILDING_TYPE}
            styleMenu={{ width: "164px" }}
            text={"Type"}
            isDropDownOpen={dropDownConfig.selectType}
            setIsDropDownOpen={() =>
              setDropDownConfig({
                cityName: false,
                selectType: !dropDownConfig.selectType,
                budget: false,
              })
            }
            children={<SearchDropDownButtons />}
            dropDownValueKeyName={keys[1]}
            setDropDownValue={setDropDownValue}
          />
        </div>

        <div className="col-md-5 border d-none d-lg-block">
          <BudgetSelect getBudget={setBudget} />
          {/* <CustomDropDown
            data={BUILDING_BUDGET}
            selectType={"enabled"}
            styleMenu={{ width: "150px" }}
            text={"Select Budget"}
            isDropDownOpen={dropDownConfig.budget}
            setIsDropDownOpen={() =>
              setDropDownConfig({
                cityName: false,
                selectType: false,
                budget: !dropDownConfig.budget,
              })
            }
            dropDownValueKeyName={keys[2]}
            setDropDownValue={setDropDownValue}
          /> */}
        </div>
      </div>

      <SearchSuggestionBar getSearchedValue={setSearchedBarValue} />

      <div className="col-md-1 btn-width">
        <button
          className="fw-bold text-white filterSearchBtn"
          style={{ background: "var(--global-text-color)" }}
        >
          <Link
            to={"/search"}
            state={{ ...dropDownValue, searchBarValue, budget }}
            className="searchBtn"
          >
            Search
          </Link>
        </button>
      </div>
    </header>
  );
};

export default AdvancedSearchBar;

export function SearchDropDownButtons({ className, text }) {
  const [checked, setChecked] = useState(false);
  const handleSelectBtn = () => setChecked(!checked);
  return (
    <div className="vertical-center" onClick={handleSelectBtn}>
      <div>
        <Checkbox
          checked={checked}
          size="small"
          sx={{ color: "#ef750f" }}
          className="checkBoxBtn"
        />
      </div>
      <div className={className}>{text}</div>
    </div>
  );
}

export function SearchSuggestionBar({ getSearchedValue }) {
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
    <div className="input-width d-flex">
      <div className="searchBarLogo fw-bold">
        <IoSearchOutline />
      </div>
      <input
        value={value}
        placeholder="Search for locality, Property or Project"
        onChange={handleInput}
        onClick={handleOpenSearchSuggestion}
        onBlur={handleCloseSearchSuggestion}
        onFocus={handleOpenSearchSuggestion}
      />

      {isSuggestionOpen && filteredSuggestions.length > 0 && (
        <div className="inputSuggestions">
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
