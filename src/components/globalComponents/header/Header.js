import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { CiHeart, CiSearch } from "react-icons/ci";
import { PiUserCircleLight } from "react-icons/pi";

import HeaderSearchSuggestion from "../../advancedSearchBar/HeaderSearchSuggestion";
import CustomDropDown from "../customDropDown/CustomDropDown";
import HeaderBtn from "../headerBtn/HeaderBtn";
import RightSideMenu from "./RightSideMenu";
import DropDown from "./../DropDown/DropDown";
import LoginPopUp from "../Login/LoginPopUp";
import WishListPopUp from "../../pages/wishList/WishListPopUp";

import { COMPANY_LOGO } from "../../../assets/constants/companyLogos";
import { ALL_EVENTS } from "../../../assets/constants/events";

import useApiFetcher from "../../../hooks/useApiFetcher";
import { API_URL, generateSortedUrl } from "../../../assets/constants/apiUrls";
import URL from "../../../assets/constants/url";
import { SORTED_BY } from "../../../assets/constants/filters";
import "./header.css";

// const BLUE_LOGO_URL =
//   "https://res.cloudinary.com/luxuryp/images/w_320,c_limit,f_auto,q_auto/ltwrcvytxvphyeegszjp/WEALTH_CLINIC-dark-logo";
const SORTED_CITY_PARAMS = {
  endPoint: API_URL.CITY_NAME,
  sortBy: "id",
  order: SORTED_BY.ASC,
};

const Header = ({ className }) => {
  const url = generateSortedUrl(SORTED_CITY_PARAMS);

  const [dropDownConfig, setDropDownConfig] = useState({
    cityName: false,
    findProperty: true,
  });

  const [isScrollY, setIsScrollY] = useState(0);
  // const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = () => setIsScrollY(window.scrollY);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScrollY]);

  const [cityName, error, isLoading] = useApiFetcher(url);
  if (error) return <div>{error.message}</div>;
  if (isLoading) return <div>Loading...</div>;

  const CITY_NAME_1 = getCityName(cityName);

  return (
    <>
      {/* <h1 className="animated-line">Home</h1> */}
      <div className="container-fluid">
        <div
          className={`header ${
            isScrollY > 300 && "header_active_Darken"
          } ${className}`}
        >
          <div className="row flex-wrap">
            <div className="col-md-5 col-sm-12 ">
              <div className="logoContainer">
                <Link
                  to={URL.HOME}
                  style={{ textDecoration: "none", color: "#000" }}
                >
                  <img
                    src={COMPANY_LOGO}
                    alt="company_logo"
                    className="img-fluid header-logo"
                  />
                </Link>
                <div
                  className="menuBtn header-btn  d-block d-lg-none"
                  data-bs-toggle="modal"
                  data-bs-target="#sidebarMenu"
                >
                  <i className="bi bi-list"></i>
                </div>
              </div>
            </div>

            <div className="col-md-7 col-sm-12 menu">
              <div className="header-btn">
                <Link className="blogsDeco" to={URL.HOME}>
                  Home
                </Link>
              </div>
              <div>
                <CustomDropDown
                  onMouseEnter={() => setDropDownConfig({ cityName: true })}
                  styleBtn={{
                    color: "rgba(255,255,255,0.8)",
                    width: "6.5rem",
                  }}
                  styleMenu={{ width: "150px", height: "150px !important" }}
                  text={"Find City"}
                  data={CITY_NAME_1}
                  isDropDownOpen={dropDownConfig.cityName}
                  setIsDropDownOpen={() =>
                    setDropDownConfig({ cityName: !dropDownConfig.cityName })
                  }
                  children={
                    <HeaderBtn
                      className={"navbar-brand"}
                      style={{
                        border: "8px solid red !important",
                        width: "100%",
                      }}
                    />
                  }
                />
              </div>

              <div>
                <DropDown
                  styleBtn={{
                    color: "#fff",
                    width: "120px",
                    lineHeight: "3.2rem",
                  }}
                  btnText={"Find Property"}
                />
                {/* <CustomDropDown
                  styleBtn={{
                    color: "rgba(255,255,255,0.8)",
                    width: "8.5rem",
                  }}
                  styleMenu={{ width: "150px", height: "150px !important" }}
                  text="Find Property"
                  data={CITY_NAME}
                  isDropDownOpen={dropDownConfig.findProperty}
                  setIsDropDownOpen={() =>
                    setDropDownConfig({
                      findProperty: !dropDownConfig.findProperty,
                    })
                  }
                  children={
                    <HeaderBtn
                      className={"navbar-brand"}
                      style={{
                        border: "8px solid red !important",
                        width: "100%",import { EMPTY_OBJECT } from './../../../assets/constants/index';

                      }}
                    />
                  }
                /> */}
              </div>

              {/* <div className="header-btn">
                <Link className="eventDeco" to={URL.FIND_PROPERTY}>
                  Find Property
                </Link>
              </div> */}
              <div className="header-btn">
                <Link className="eventDeco" to={URL.EVENT} state={ALL_EVENTS}>
                  Events
                </Link>
              </div>
              <div className="text-white">Talk To Our Agents</div>
              <div className="header-btn">
                <Link className="blogsDeco" to={URL.BLOGS}>
                  Blogs
                </Link>
              </div>
              <div>{<HeaderSideButtons />}</div>
            </div>
          </div>
        </div>
      </div>

      <RightSideMenu />
      {/*  */}
      {/* <PopUpMenu/> */}
    </>
  );
};

export default Header;

function getCityName(cityName) {
  return cityName?.map((item) => {
    // const data = { id: item?.id, City_Name: item?.attributes?.City_Name }
    return item?.attributes?.City_Name;
  });
}

export function HeaderSideButtons() {
  // const dispatch = useDispatch();
  const whishListCount = useSelector((state) => state.wishlist.items.length);
  // const component = useSelector((state) => state.openComponentById.componentId);

  // const [searchedBarValue, setSearchedBarValue] = useState("");
  const [isOpenLoginPopUp, setIsOpenLoginPopUp] = useState(false);
  const [isOpenWishList, setIsOpenWishList] = useState(false);
  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);
  // const [isOpen, setIsOpen] = useState({
  //   loginPopUp: false,
  //   wishList: false,
  //   searchBarOpen: false,
  // });

  const handleLoginPopUp = () => setIsOpenLoginPopUp(!isOpenLoginPopUp);
  const handleSearchBar = () => {
    setIsOpenWishList(false);
    setIsSearchBarOpen(!isSearchBarOpen);
  };
  const handleWishListPopUp = () => {
    setIsSearchBarOpen(false);
    setIsOpenWishList(!isOpenWishList);
    // dispatch(setOpenComponentById("WishListIdBtn"));
  };

  // const dispatch = useDispatch();
  // const openComponent = useSelector(
  //   (state) => state.openComponent.openComponent
  // );

  // const isOpen = openComponent === id;
  // const handleToggle = () => {
  //   if (isOpen) {
  //     dispatch(closeComponent());
  //   } else {
  //     dispatch(setOpenComponent(id));
  //   }
  // };
  // console.log(searchedBarValue);
  return (
    <div className="superGroup">
      <div className="bgGrouping">
        <div>
          <PiUserCircleLight onClick={handleLoginPopUp} />
        </div>
        <div className="wishListHeaderBtn">
          <CiHeart onClick={handleWishListPopUp} />
          {whishListCount > 0 && (
            <div className="wishListCount">{whishListCount}</div>
          )}
        </div>
        <div>
          <CiSearch onClick={handleSearchBar} />
        </div>
      </div>

      <div
        className="menuBtn header-btn"
        data-bs-toggle="modal"
        data-bs-target="#sidebarMenu"
      >
        <i className="bi bi-list"></i>
      </div>

      {isOpenLoginPopUp && <LoginPopUp onClose={handleLoginPopUp} />}
      <div>
        {isOpenWishList && (
          <WishListPopUp
            onClose={handleWishListPopUp}
            onMouseLeft={handleWishListPopUp}
          />
        )}

        {isSearchBarOpen && (
          <HeaderSearchSuggestion
            isOpen={isSearchBarOpen}
            onClose={handleSearchBar}
            // getSearchedValue={setSearchedBarValue}
            id="headerSearchbar"
          />
        )}
      </div>
    </div>
  );
}
