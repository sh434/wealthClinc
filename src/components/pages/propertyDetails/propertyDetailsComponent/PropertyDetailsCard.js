import { FcGallery } from "react-icons/fc";
// import TextBg from "../../../globalComponents/molecules/TextBg";
import InfiniteSlides from "../../../globalComponents/slickCrousel/InfiniteSlides";
import PropertyTextContent from "./PropertyTextContent";
import BreadCrumb from "../../../globalComponents/BreadCrumb/BreadCrumb";

import useDeviceSize from "../../../../hooks/useDeviceSize";
import { EMPTY_ARRAY, EMPTY_OBJECT } from "../../../../assets/constants";
import Heading from "../../../globalComponents/molecules/Heading";
import "./propertyDetailsCard.css";

const settings = {
  dots: false,
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1, // Number of slides to scroll per transition
  autoplay: true, // Set to true for automatic slide change
  autoplaySpeed: 1500,
  speed: 1000,
  lazyLoad: true,
  initialSlide: 2,
  arrows: true,
};

const PropertyDetailsCard = ({ propertyDetail }) => {
  const isMobile = useDeviceSize();
  const params = properDetailsCardParams(propertyDetail);
  const { Project_Name = "", Image = EMPTY_ARRAY } =
    propertyDetail || EMPTY_OBJECT;
  const SLIDES =
    Image?.data?.map((item) => ({ img: item?.attributes?.url })) || EMPTY_ARRAY;

  return (
    <div className="row p-5 pb-3">
      <div className="d-flex justify-content-center ">
        <Heading
          tag="h1"
          text={Project_Name}
          fontSize="2.5rem"
          className="propertyName heading"
          fontWeight={700}
          color="#EF750f"
          lineHeight="4rem"
        />
        {/* <TextBg /> */}
        {/* <Heading text={Project_Name} className="pl-5" fontSize="2rem" /> */}
      </div>

      <div
        className={`row p-0 m-0  w-100 ${
          isMobile ? "flex-column-reverse" : null
        }`}
      >
        {isMobile ? null : <BreadCrumb />}
        <div className="col-md-3 center-item">
          <PropertyTextContent propertyDetail={params} />
        </div>

        <div className="col-md-9 propertyDetailsCard-container ">
          <InfiniteSlides
            settings={settings}
            data={SLIDES}
            className="propertyGallerySlider"
          />
          {/* <PropertyGalleryCard img={img} /> */}
          <div className="imgCountBtn">
            <FcGallery fontSize={"1.5rem"} /> {SLIDES.length} Photos
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailsCard;

function properDetailsCardParams(property) {
  const {
    Project_Name = "",
    Min_Price = "",
    Max_Price = "",
    Project_Configuration,
    Address = "",
    Project_Disclaimer = "",
  } = property || EMPTY_OBJECT;

  return {
    Project_Name,
    Min_Price,
    Max_Price,
    Project_Configuration,
    Address,
    Project_Disclaimer,
  };
}

export function PropertyGalleryCard({ img }) {
  return (
    <>
      <div className="d-flex h-100">
        <div className="col-md-6 col-sm-12  propertyDetailsCard-main-img">
          <img alt="" src={img} className="col-md-12" />
        </div>
        <div className="col-md-6 col-sm-12 propertyDetailsCard-side-img">
          <div>
            <img
              alt=""
              src="https://www.wealth-clinic.com/property_media/56511705386406.jpg"
              className="col-md-6"
            />
            <img
              alt=""
              src="https://www.wealth-clinic.com/property_media/56511705386406.jpg"
              className="col-md-6 sideImg2"
            />
          </div>

          <div>
            <img
              alt=""
              src="https://www.wealth-clinic.com/property_media/56511705386406.jpg"
              className="col-md-6 "
            />
            <img
              alt=""
              src="https://www.wealth-clinic.com/property_media/56511705386406.jpg"
              className="col-md-6 sideImg4"
            />
          </div>
        </div>
      </div>
    </>
  );
}
