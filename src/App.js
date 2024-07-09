import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { store } from "./Redux/store";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useState } from "react";

import JsonLoad from "./components/globalComponents/seo/JsonLoad";
import Body from "./components/Body";
import TemplateSlider from "./components/homePage/templateSlider/TemplateSlider";
import HomePage from "./components/homePage/HomePage";
import CityPages from "./components/pages/cityPages/CityPages";
import Gallery from "./components/pages/gallery/Gallery";
import MediaCoverage from "./components/pages/mediaCoverage/MediaCoverage";
import HappyCustomer from "./components/pages/happyCustomer/HappyCustomer";
import Awards from "./components/pages/award/Awards";
import ContactUsPage from "./components/pages/ContactUsPage/ContactUsPage";
import Career from "./components/pages/career/Career";

import Event from "./components/pages/event/Event";
import PrivacyPolicy from "./components/pages/privacyPolicy/PrivacyPolicy";
import DisclaimerPage from "./components/pages/disclaimer/DisclaimerPage";
import TermsAndConditions from "./components/pages/termsAndConditions/TermsAndConditions";
import OurTeam from "./components/pages/ourTeam/OurTeam";
import About from "./components/pages/about/About";
import EventOverview from "./components/pages/eventOverview/EventOverview";
import Blog from "./components/pages/blogPage/Blogs";
import BlogCards from "./components/pages/blogPage/blogsComponents/BlogCards";
import BlogOverview from "./components/pages/blogOverview/BlogOverview";
import PropertyDetails from "./components/pages/propertyDetails/PropertyDetails";
import EmiCalculator from "./components/pages/EmiCalculator";

import HomePageMobile from "./components/mobileComponents/page/HomePages";
import TemplateMobile from "./components/mobileComponents/page/template/TemplateMob";

// import AboutUsPage from "./components/pages/AboutUsPage/AboutUsPage";
// import Header from "./components/globalComponents/header/Header";
// import ProtectedRoute from "./components/globalComponents/ProtectedRoute/ProtectedRoute";
// import Template from "./components/template/Template";
// import Header from "./components/header/Header";
// import HeaderMobile from "./components/mobileComponents/HeaderMob";
// import TopNavbar from "./components/mobileComponents/page/TopNavbar";

import useDeviceSize from "./hooks/useDeviceSize";
import useUrlNormalizer from "./hooks/useUrlNormalizer";
import { slugToText } from "./services/slug";
import URL from "./assets/constants/url";
import "./components/styles/mobile-global.css";
import "./App.css";

// import Template from "./components/homePage/template/Template";

function App() {
  const isMobile = useDeviceSize();

  return (
    <>
      <Helmet>
        <link rel="canonical" href={window.location.href} />
      </Helmet>
      <Provider store={store}>
        <BrowserRouter>
          <JsonLoad />
          <Routings isMobile={isMobile} />
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;

function Routings({ isMobile }) {
  const location = useLocation();
  useUrlNormalizer(location?.pathname);
  // const [user, setUser] = useState(false);
  const [city, setCityName] = useState(null);

  return (
    <>

      <Routes>
        <Route
          path={URL.HOME}
          element={<Body>{isMobile ? <HomePageMobile /> : <HomePage />}</Body>}
        />
        <Route
          path={URL.CITY}
          element={
            <Body>
              {isMobile ? (
                <TemplateMobile
                  text={
                    city ? "New Projects in " + slugToText(city) : "Properties"
                  }
                  height="100vh"
                  searchBar="enabled"
                />
              ) : (
                <TemplateSlider
                  text={
                    city ? "New Projects in " + slugToText(city) : "Properties"
                  }
                  height="100vh"
                  searchBar="enabled"
                />
              )}
              <CityPages setCityName={setCityName} />
            </Body>
          }
        />
        <Route
          path={`${URL.SEARCH}/:propertyName`}
          element={
            <Body>
              {isMobile ? (
                <TemplateMobile
                  text="Properties"
                  height="100vh"
                  searchBar="enabled"
                />
              ) : (
                <TemplateSlider
                  text="Properties"
                  height="100vh"
                  searchBar="enabled"
                />
              )}
              <CityPages />
            </Body>
          }
        />
        <Route
          path={URL.SEARCH}
          element={
            <Body>
              {isMobile ? (
                <TemplateMobile
                  text="Properties"
                  height="100vh"
                  searchBar="enabled"
                />
              ) : (
                <TemplateSlider
                  text="Properties"
                  height="100vh"
                  searchBar="enabled"
                />
              )}
              <CityPages />
            </Body>
          }
        />
        <Route
          path={URL.BLOGS}
          element={
            <Body>
              {isMobile ? (
                <TemplateMobile text="Blogs" />
              ) : (
                <TemplateSlider text="Blogs" height="100vh" />
              )}
              <Blog>
                <BlogCards />
              </Blog>
            </Body>
          }
        />
        <Route
          path={URL.BLOG_SUMMARY_PAGE}
          element={
            <Body>
              {isMobile ? (
                <TemplateMobile text="Blogs" height="100vh" />
              ) : (
                <TemplateSlider text="Blogs" height="100vh" />
              )}
              <Blog>
                <BlogOverview />
              </Blog>
            </Body>
          }
        />
        <Route
          path={URL.ABOUT}
          element={
            <Body>
              {isMobile ? (
                <TemplateMobile text="About Us" height="100vh" />
              ) : (
                <TemplateSlider text="About Us" height="100vh" />
              )}
              <About />
            </Body>
          }
        />
        <Route path="/wcgallery" element={<Gallery />} />
        <Route
          path={URL.AWARD}
          element={
            <Body>
              {isMobile ? (
                <TemplateMobile text="Awards" height="100vh" />
              ) : (
                <TemplateSlider text="Awards" height="100vh" />
              )}
              <Awards />
            </Body>
          }
        />
        <Route
          path={URL.CONTACT_US}
          element={
            <Body>
              {isMobile ? (
                <TemplateMobile text="Contact Us" height="100vh" />
              ) : (
                <TemplateSlider text="Contact Us" height="100vh" />
              )}
              <ContactUsPage />
            </Body>
          }
        />
        <Route
          path={URL.HAPPY_CUSTOMER}
          element={
            <Body>
              {isMobile ? (
                <TemplateMobile text="Happy Customer" />
              ) : (
                <TemplateSlider text="Happy Customer" height="100vh" />
              )}
              <HappyCustomer />
            </Body>
          }
        />
        <Route
          path={URL.MEDIA_COVERAGE}
          element={
            <Body>
              {isMobile ? (
                <TemplateMobile text="Media Coverage" />
              ) : (
                <TemplateSlider text="Media Coverage" height="100vh" />
              )}
              <MediaCoverage />
            </Body>
          }
        />
        <Route
          path={URL.PROPERTY_DETAILS}
          element={
            <Body>
              {isMobile ? (
                <TemplateMobile text="Project Details" height="100vh" />
              ) : null}
              <PropertyDetails />
            </Body>
          }
        />
        <Route
          path="/event//*"
          element={
            <Body>
              {isMobile ? (
                <TemplateMobile text="Events" height="100vh" />
              ) : (
                <TemplateSlider text="Events" height="100vh" />
              )}
              <Event />
            </Body>
          }
        />
        <Route
          path={URL.PRIVACY_POLICY}
          element={
            <Body>
              {isMobile ? (
                <TemplateMobile text="Privacy-Policy" height="100vh" />
              ) : (
                <TemplateSlider text="Privacy-Policy" height="100vh" />
              )}
              <PrivacyPolicy />
            </Body>
          }
        />
        <Route
          path={URL.DISCLAIMER}
          element={
            <Body>
              {isMobile ? (
                <TemplateMobile text="Disclaimer" height="100vh" />
              ) : (
                <TemplateSlider text="Disclaimer" height="100vh" />
              )}
              <DisclaimerPage />
            </Body>
          }
        />
        <Route
          path={URL.CAREER}
          element={
            <Body>
              {isMobile ? (
                <TemplateMobile text="Career" height="100vh" />
              ) : (
                <TemplateSlider text="Career" height="100vh" />
              )}
              <Career />
            </Body>
          }
        />
        <Route
          path={URL.OUR_TEAM}
          element={
            <Body>
              {isMobile ? (
                <TemplateMobile text="Our Team" height="100vh" />
              ) : (
                <TemplateSlider text="Our Team" height="100vh" />
              )}
              <OurTeam />
            </Body>
          }
        />
        <Route
          path={URL.TERMS_AND_CONDITIONS}
          element={
            <Body>
              {isMobile ? (
                <TemplateMobile text="Terms And Conditions" height="25rem" />
              ) : (
                <TemplateSlider text="Terms And Conditions" height="25rem" />
              )}
              <TermsAndConditions />
            </Body>
          }
        />
        <Route
          path={URL.EVENT_STATUS_AND_NAME}
          element={
            <Body>
              {isMobile ? (
                <TemplateMobile text="EventDetails" height="25rem" />
              ) : (
                <TemplateSlider text="EventDetails" height="25rem" />
              )}
              <EventOverview />
            </Body>
          }
        />
        <Route
          path={URL.EMI_CALCULATOR}
          element={
            <Body>
              {isMobile ? (
                <TemplateMobile text="EMI Calculator" height="25rem" />
              ) : (
                <TemplateSlider text="EMI Calculator" height="25rem" />
              )}
              <EmiCalculator />
            </Body>
          }
        />
        <Route path="/404" element={<h1>404 Page</h1>} />
      </Routes>
    </>
  );
}
