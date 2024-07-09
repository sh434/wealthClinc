import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

import { useSelector } from "react-redux";
import LoginPopUp from "../../components/globalComponents/Login/LoginPopUp";
import CustomDropDown from "../globalComponents/customDropDown/CustomDropDown";
import HeaderBtn from "../globalComponents/headerBtn/HeaderBtn";
import WishListPopUp from "../../components/pages/wishList/WishListPopUp";
import { CiHeart } from "react-icons/ci";
import { PiUserCircleLight } from "react-icons/pi";
import DropDown from "../globalComponents/DropDown/DropDown";
// import { COMPANY_LOGO } from "../../assets/urls";
import { COMPANY_LOGO } from "../../assets/constants/companyLogos";

import URL from "../../assets/constants/url";
import "./module.css";
import "./mobHeader.css";

import useApiFetcher from "../../hooks/useApiFetcher";
import { API_URL, generateSortedUrl } from "../../assets/constants/apiUrls";
import { SORTED_BY } from "../../assets/constants/filters";

const SORTED_CITY_PARAMS = {
  endPoint: API_URL.CITY_NAME,
  sortBy: "id",
  order: SORTED_BY.ASC,
};

const HeaderMob = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

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
    <div>
      <Navbar expand="lg" className="header rounded-2 mobHeader ">
        <Container className="mobHeaderInnerBox center-item">
          <Navbar.Brand as={Link} to="/">
            <img
              src={COMPANY_LOGO}
              alt="company_logo"
              className="img-fluid header-logo"
            />
          </Navbar.Brand>

          <div className="d-flex align-content-center justify-content-end w-50">
            <HeaderSideButtons1 />

            <div className="d-flex align-content-center justify-content-end">
              <label
                className="icon-menu"
                htmlFor="check-icon"
                onClick={toggleMenu}
              >
                <div className={`bar bar--1 ${isOpen ? "open" : ""}`} />
                <div className={`bar bar--2 ${isOpen ? "open" : ""}`} />
                <div className={`bar bar--3 ${isOpen ? "open" : ""}`} />
              </label>
            </div>

            <div onClick={toggleMenu}>B</div>
          </div>

          <input
            hidden
            className="check-icon"
            id="check-icon"
            name="check-icon"
            type="checkbox"
            checked={isOpen}
            onChange={() => {}}
          />

          <Navbar.Collapse
            id="basic-navbar-nav"
            className={`${isOpen ? "show" : ""}`}
          >
            <Nav className="ms-auto">
              <Nav.Link>
                {/* <i class="bi bi-pin-map"></i> */}
                {/* Find Property */}
                <div className="d-flex flex-wrap">
                  <i class="bi bi-geo-fill"></i>
                  <DropDown
                    styleBtn={{
                      color: "#fff",
                      width: "6rem",
                    }}
                    btnText={"Find Property"}
                  />
                </div>
              </Nav.Link>
              <Nav.Link>
                {/* <i class="bi bi-geo-fill"></i> */}
                <div className="d-flex mobNavBar flex-wrap">
                  <div>
                    <i class="bi bi-pin-map"></i>
                  </div>
                  <CustomDropDown
                    onMouseEnter={() => setDropDownConfig({ cityName: true })}
                    styleBtn={{
                      color: "rgba(255,255,255,0.8)",
                      width: "6.5rem",
                    }}
                    styleMenu={{
                      width: "150px",
                      height: "150px !important",
                    }}
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
                          width: "100%",
                        }}
                      />
                    }
                  />
                </div>
              </Nav.Link>
              <Nav.Link href={URL.ABOUT} onClick={toggleMenu}>
                <i class="bi bi-person-circle"></i>
                About Us
              </Nav.Link>
              <Nav.Link href={URL.EVENT} onClick={toggleMenu}>
                <i class="bi bi-calendar"></i>
                Events
              </Nav.Link>
              <Nav.Link href="#link" onClick={toggleMenu}>
                <i class="bi bi-person"></i>
                Talk To Our Agents
              </Nav.Link>
              <Nav.Link href={URL.BLOGS} onClick={toggleMenu}>
                <i class="bi bi-blockquote-left"></i>
                Blogs
              </Nav.Link>
              <Nav.Link href={URL.AWARD} onClick={toggleMenu}>
                <i class="bi bi-cast"></i>
                Awards
              </Nav.Link>
              <Nav.Link href={URL.HAPPY_CUSTOMER} onClick={toggleMenu}>
                <i class="bi bi-emoji-smile"></i>
                Happy Customer
              </Nav.Link>
              <Nav.Link href={URL.MEDIA_COVERAGE} onClick={toggleMenu}>
                <i class="bi bi-cast"></i>
                Media
              </Nav.Link>
              <Nav.Link href={URL.CAREER} onClick={toggleMenu}>
                <i class="bi bi-copy"></i>
                careers
              </Nav.Link>
              <Nav.Link href={URL.CONTACT_US} onClick={toggleMenu}>
                <i class="bi bi-phone"></i>
                Contact Us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default HeaderMob;

function getCityName(cityName) {
  return cityName?.map((item) => {
    // const data = { id: item?.id, City_Name: item?.attributes?.City_Name }
    return item?.attributes?.City_Name;
  });
}

function HeaderSideButtons1() {
  const whishListCount = useSelector((state) => state.wishlist.items.length);
  const [isOpenLoginPopUp, setIsOpenLoginPopUp] = useState(false);
  const [isOpenWishList, setIsOpenWishList] = useState(false);
  // const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);

  const handleLoginPopUp = () => setIsOpenLoginPopUp(!isOpenLoginPopUp);
  // const handleSearchBar = () => {
  //   setIsOpenWishList(false);
  //   setIsSearchBarOpen(!isSearchBarOpen);
  // };

  const handleWishListPopUp = () => {
    // setIsSearchBarOpen(false);
    setIsOpenWishList(!isOpenWishList);
  };

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
      </div>

      {isOpenLoginPopUp && <LoginPopUp onClose={handleLoginPopUp} />}
      <div>
        {isOpenWishList && (
          <WishListPopUp
            onClose={handleWishListPopUp}
            onMouseLeft={handleWishListPopUp}
          />
        )}
      </div>
    </div>
  );
}
