import { Link } from "react-router-dom";

import CustomLink from "../../CustomLink";
import InputCustom from "./../molecules/InputCustom";
import { ButtonDarkBlue } from "./../molecules/ButtonDarkBlue";
import SocialMediaIcons from "./SocialMediaIcons";

import URL from "../../../assets/constants/url";
import { COMPANY_LOGO } from "../../../assets/constants/companyLogos";
import { CITIES } from "../../../assets/constants/cities.js";
import "./footer2.css";

const Footer2 = () => {
  return (
    <footer className="row m-0">
      <header className="col-md-4">
        <img className="footer-logo" alt="Company Logo" src={COMPANY_LOGO} />
        <ul className="contactWithUs">
          <li>
            CALL US :
            <div className="my-1">
              <a className="dailDeco" href="tel:+919089222000">
                <span>+919089222000</span>
              </a>
            </div>
          </li>
          <li>
            EMAIL US :
            <div className="my-1">
              <a
                className="dailDeco"
                href="mailto:customercare@wealth-clinic.com"
              >
                <span>customercare@wealth-clinic.com</span>
              </a>
            </div>
          </li>
        </ul>
        <SocialMediaIcons />
        <div className="newsLetter-footer col-md-8">
          <InputCustom placeholder={"Subscribe to our newsletter"} />
          <ButtonDarkBlue
            style={{ borderRadius: "12px", fontSize: "14px" }}
            name="Subscribe Now"
          />
        </div>
      </header>
      <aside className="col-md-8 menuBg">
        <div className="row wc-container">
          <div className="col-sm-3 col-md-3">
            <ul className="category">
              <li>
                <h4 className="heading-footer">COMPANY</h4>
              </li>
              <li>
                <Link to={URL.ABOUT}>About Us</Link>
              </li>
              <li>Exclusive Projects</li>
              <li>360° Tour</li>
              <li>
                <Link to={URL.TERMS_AND_CONDITIONS}>Terms & Conditions</Link>
              </li>
              <li>
                <Link to={URL.BLOGS}>Blogs</Link>
              </li>
              <li>
                <Link to={URL.CAREER}>Careers</Link>
              </li>
              <li>
                <Link to={URL.CONTACT_US}>Contact Us</Link>
              </li>
              <li>
                <Link to={URL.AWARD}>Awards</Link>
              </li>
            </ul>
          </div>
          <div className="col-sm-3 col-md-3">
            <ul className="category">
              <li>
                <h4 className="heading-footer">LATEST</h4>
              </li>
              <li>Latest Properties</li>
              <li>New Launches</li>
              <li>
                <Link to={URL.EMI_CALCULATOR}>EMI Calculator</Link>
              </li>
              <li>Happy Customers</li>
              <li>Media</li>
              <li>
                <Link to={URL.PRIVACY_POLICY}>Privacy Policy</Link>
              </li>
              <li>
                <Link to={URL.DISCLAIMER}>Disclaimer</Link>
              </li>
              <li>Gallery</li>
            </ul>
          </div>
          <div className="col-sm-3 col-md-3">
            <ul className="category">
              <li>
                <h4 className="heading-footer">REAL ESTATE IN INDIA</h4>
              </li>
              {CITIES.REAL_ESTATE.map((city, idx) => (
                <li key={idx}>
                  <CustomLink to={`/${city}`}>Projects in {city}</CustomLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-sm-3 col-md-3">
            <ul className="category">
              <li>
                <h4 className="heading-footer">POPULAR SEARCHES</h4>
              </li>
              {CITIES.POPULAR_SEARCHES.map((search, index) => (
                <li key={index}>
                  <CustomLink to={`/${search}`}>{search}</CustomLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </aside>
    </footer>
  );
};

export default Footer2;
