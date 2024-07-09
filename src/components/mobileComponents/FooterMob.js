import { Link } from "react-router-dom";

import CustomLink from "./../CustomLink";
import SocialMediaIcons from "../globalComponents/footer2/SocialMediaIcons";

import URL from "../../assets/constants/url";
import { COMPANY_LOGO } from "../../assets/constants/companyLogos";
import { CITIES } from "../../assets/constants/cities";

const FooterMob = () => {
  return (
    <footer className="row m-0 menuBg">
      <header className="col-md-4">
        <img className="footer-logo" alt="" src={COMPANY_LOGO} />

        <ul class="contactWithUs">
          <h3 className="contact_us">Contact Us</h3>
          <li>
            <div>
              <a className="dailDeco" href="tel:+919089222000">
                <span>+919089222000</span>
              </a>
            </div>
          </li>
          <li>
            <div>
              <a
                className="dailDeco"
                href="mailto:customercare@wealth-clinic.com"
              >
                <span>customercare@wealth-clinic.com</span>
              </a>
            </div>
          </li>
        </ul>
        <div
          style={{
            marginTop: "-39px",
            textAlign: "center",
            marginLeft: "29px",
          }}
        >
          {" "}
          <SocialMediaIcons />
        </div>
        <div className="row height d-flex ">
          <div className="col-md-8" style={{ marginLeft: "63px" }}>
            <div className="search">
              <input
                type="text"
                className="form-control"
                placeholder="Subscribe for the update"
              />
              <button className="btn btn-primary">Subscribe</button>
            </div>
          </div>
        </div>
      </header>
      <aside className="menuBg">
        <div className="container">
          <div className="row wc-container">
            <div className="col-md-6 col-sm-6">
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
            <div className="col-md-6 col-sm-6">
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

            <div className="col-md-6 col-sm-6">
              <ul className="category">
                <li>
                  <h4 className="heading-footer">REAL ESTATE IN INDIA</h4>
                </li>
                {CITIES.REAL_ESTATE.map((city, idx) => (
                  <li key={idx}>
                    <CustomLink to={`/${city}`}>Projects in {city}</CustomLink>
                  </li>
                ))}
                {/* <li>Projects in Moradabad</li>
                <li>Projects in Lucknow</li>
                <li>Projects in Gurugram</li>
                <li>Projects in Pune</li>
                <li>Projects in Ghaziabad</li>
                <li>Projects in Greater Noida</li>
                <li>Projects in Rishikesh</li>
                <li>Projects in Delhi</li>
                <li>Projects in Noida</li> */}
              </ul>
            </div>
            <div className="col-md-6 col-sm-6">
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
            <div className="col-md-12 col-sm-12 text-center">
              <ul className="category">
                <li>
                  <h4 className="heading-footer text-center"> RERA Number</h4>
                </li>
                <li className="gh">
                  Uttar Pradesh RERA Number: UPRERAAGT10521
                  (https://www.up-rera.in)
                </li>
                <li className="gh">
                  Bihar RERA Number: BRERAA71023/03/A-419/2022
                  (https://rera.bihar.gov.in/)
                </li>
                <li className="gh">
                  Uttarakhand RERA Number: UKREA01230000388
                  (http://ukrera.org.in:8080/rerauk/)
                </li>
                <li className="gh">
                  Karnataka RERA Number: PRM/KA/RERA/1251/446/AG/200922/002039
                  (https://rera.karnataka.gov.in/)
                </li>
                <li className="gh">
                  Haryana RERA Number: HRERA-PKL REA-670-2021
                  (https://haryanarera.gov.in/)
                </li>
                <li className="gh">NYS Anti-Discrimination Disclosure</li>
              </ul>
            </div>
            <div className="col-md-12 col-sm-12 text-center">
              <h4 className="gy text-center">Disclaimer</h4>
              <p className="gh" style={{ textAlign: "justify" }}>
                Any person logging into or using the site (“the Visitor”) has
                unconditionally accepted the terms and conditions of use and
                these constitute a binding and enforceable agreement between the
                visitor and the Wealth Clinic Pvt. Ltd.
              </p>
            </div>
            <h4 className="gk my-1">View All...</h4>
            <p className="gh text-center my-3">
              Copyright 2024 © WealthClinic. All Rights Reserved.
            </p>
            <p className="text-center" style={{ color: "#f3753" }}>
              powered by AdsRole
            </p>
          </div>
        </div>
      </aside>
    </footer>
  );
};

export default FooterMob;
