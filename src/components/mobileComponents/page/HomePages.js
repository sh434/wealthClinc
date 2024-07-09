import TemplateMob from "./template/TemplateMob";
import MarqueeSlider from "../../globalComponents/marquee/MarqueeSlider";
import Card from "../page/template/Card";
import CardsContainer from "../../globalComponents/cardsContainer/CardsContainer";
import AboutUs from "../../homePage/aboutUs/AboutUs";
import Heading from "../../globalComponents/molecules/Heading";
import MileStones from "../../homePage/achievements/MileStones";
import FinalExplore from "../../homePage/exploreProjectsSection/FinalExplore";
import AdvantageSection from "../../homePage/advantageSection/AdvantageSection";
import QuerySectionTemplate from "../../homePage/querySectionTemplate/QuerySectionTemplate";
import FliperCardSlider from "../../globalComponents/slickCrousel/FliperCardSlider";
// import GoogleReview

const HomePages = () => {
  return (
    <div>
      <TemplateMob text="Real Estate Made Easy" searchBar="enabled" />
      <MarqueeSlider />
      <Card />
      <CardsContainer />
      <AboutUs />
      <section className="de" style={{ backgroundColor: "#000" }}>
        <div className="container-fluid my-4">
          <div className="d-flex justify-content-center">
            <Heading
              text={"OUR MILESTONES"}
              className="heading text-center text-white mt-2"
              color={"var(--global-heading-color)"}
              fontWeight={700}
            />
          </div>
          <h4 className="gh mt-2 text-center">
            The Five Milestones Of Wealth Clinic
          </h4>
          <MileStones />
        </div>
      </section>
      <section className="container-fluid mt-5">
        {/* <h4 className="text-lg-center fw-bold fs-1">OUR NEW LAUNCHES</h4> */}
        <div className="d-flex justify-content-center">
          <Heading
            text={"OUR NEW LAUNCHES"}
            color={"var(--global-heading-color)"}
            fontWeight={700}
            className="text-center heading"
          />
        </div>
        <h4 className="text-lg-center gh text-center">
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

      <div className="mt-5 dr">
        <div className="d-flex justify-content-center">
          <Heading
            text={"EXPLORE PROJECTS"}
            color={"var(--global-heading-color)"}
            fontWeight={700}
            className="heading text-dark text-center mt-4"
          />
        </div>
        <h4
          className="text-lg-center mb-4 text-center"
          style={{ fontSize: "14px !important", color: "white" }}
        >
          Find Your Dream Property
        </h4>
        <FinalExplore />
      </div>

      <AdvantageSection />
      <QuerySectionTemplate />
      {/* <GoogleReview /> */}
      {/* <StickySocialIcons />
            <Disclaimer /> */}
    </div>
  );
};

export default HomePages;
