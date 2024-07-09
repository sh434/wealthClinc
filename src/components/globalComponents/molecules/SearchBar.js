import { IoSearchCircle } from "react-icons/io5";
// import { RiArrowDropDownLine } from "react-icons/ri";
import styles from "./searchBar.module.css";

const SearchBar = () => {
  return (
    <div className="my-3 container w-50 searchBarBorder">
      <div className="row ">
        <div
          className={`d-flex  searchBar px-4 ${styles.searchBar} ${styles.searchBarBorder} border-radius-2`}
        >
          <div className="col-md-10 ">
            <input
              placeholder="Search by address or area"
              className={`${styles.searchBar} container rounded`}
            />
          </div>

          <div className="col-md-2">
            <div className="d-flex align-items-center justify-content-center h-100 fs-1">
              <IoSearchCircle />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
