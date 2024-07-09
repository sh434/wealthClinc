import { Helmet } from "react-helmet";

import CardsContainer from "../globalComponents/cardsContainer/CardsContainer";
import MarqueeSlider from "../globalComponents/marquee/MarqueeSlider";
import Heading from "../globalComponents/molecules/Heading";
import CookiesPolicy from "../globalComponents/cookiesPolicy/CookiesPolicy";
import FliperCardSlider from "../globalComponents/slickCrousel/FliperCardSlider";
import AboutUs from "./aboutUs/AboutUs";
import MileStones from "./achievements/MileStones";
import AdvantageSection from "./advantageSection/AdvantageSection";
import Template from "./template/Template";
import QuerySectionTemplate from "./querySectionTemplate/QuerySectionTemplate";
import TemplateSlider from "./templateSlider/TemplateSlider";
import FinalExplore from "./exploreProjectsSection/FinalExplore";
// import CopyRightSection from "../globalComponents/copyRightSection/CopyRightSection";
// import Footer2 from "../globalComponents/footer2/Footer2";
// import TextContent from "../globalComponents/newFooterContent/TextContent";
// import DropDown from "../molecules/DropDown";
// import AppLandingPage from "./appLandingPage/AppLandingPage";
// import QueryForm from "../queryForm/QueryForm";
// import QueryForm2 from "../queryForm2/QueryForm2";
// import GoogleReview from "./googleReviews/GoogleReview";

import "./homePage.css";

// const settings = {
//   dots: true,
//   infinite: true,
//   slidesToShow: 3,
//   slidesToScroll: 1, // Number of slides to scroll per transition
//   autoplay: true, // Set to true for automatic slide change
//   autoplaySpeed: 500,
//   speed: 1200,
//   lazyLoad: true,
//   initialSlide: 2,
//   arrows: true,
//   prevArrow: <button className="prev-arrow scrollBtn">Previous</button>,
//   nextArrow: <button className="next-arrow scrollBtn">Next</button>,
//   // className: "styleForSliderLib",
// };

const HomePage = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          property="og:title"
          content="Wealth Clinic - Best Real Estate Consultancy Company in India"
        />
        <meta property="og:site_name" content="wealth-clinic.com" />
        <meta property="og:url" content="https://www.wealth-clinic.com/" />
        <meta
          property="og:description"
          content="Wealth Clinic stands as the premier Real Estate Consultancy Company in India. Discover an extensive collection of opulent residential and commercial properties across India. Embark on your exploration now"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.wealth-clinic.com/static/media/WC_PRIMARY.7c30f07e7550b72e64b9.png"
        />
        <title>
          Wealth Clinic - Best Real Estate Consultancy Company in India
        </title>
        <meta
          name="description"
          content="Wealth Clinic stands as the premier Real Estate Consultancy Company in India. Discover an extensive collection of opulent residential and commercial properties across India. Embark on your exploration now
"
        />
        <link rel="canonical" href="https://www.wealth-clinic.com/ " />
      </Helmet>

      <TemplateSlider text="Real Estate Made Easy" searchBar="enabled" />
      <MarqueeSlider />
      <Template />
      <CardsContainer />
      <AboutUs />

      <div className="container-fluid my-4">
        <div className="d-flex justify-content-center">
          <Heading
            text={"OUR MILESTONES"}
            color={"var(--global-heading-color)"}
            fontWeight={700}
          />
        </div>
        <h4 className="text-lg-center">The Five Milestones Of Wealth Clinic</h4>
        <MileStones />
      </div>

      <section className="container-fluid mt-5">
        {/* <h4 className="text-lg-center fw-bold fs-1">OUR NEW LAUNCHES</h4> */}
        <div className="d-flex justify-content-center">
          <Heading
            text={"OUR NEW LAUNCHES"}
            color={"var(--global-heading-color)"}
            fontWeight={700}
          />
        </div>
        <h4 className="text-lg-center">
          Find The Fascinating New Launches And Projects
        </h4>
        {/* <InfiniteSlides
          settings={settings}
          className="infiniteSlider-container container-fluid"
          childElement={<TextOnImg />}
          data={SLIDES}
        /> */}

        <FliperCardSlider />
      </section>

      <div className="mt-5">
        <div className="d-flex justify-content-center">
          <Heading
            text={"EXPLORE PROJECTS"}
            color={"var(--global-heading-color)"}
            fontWeight={700}
          />
        </div>
        <h4 className="text-lg-center mb-4">Find Your Dream Property</h4>
        {/* <ExploreProjects /> */}
        {/* <NewExplore /> */}
        <FinalExplore />
      </div>
      <AdvantageSection />

      <QuerySectionTemplate />
      {/* <GoogleReview /> */}
      {/* <Disclaimer /> */}
      <CookiesPolicy />
    </div>
  );
};

export default HomePage;
