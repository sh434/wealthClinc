import PreviewImageSlides from "./../../../globalComponents/slickCrousel/PreviewImageSlides";

// import { FLOOR_SLIDES_IMG } from "../../../../assets/IMG";
import "./floorPlans.css";

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1, // Number of slides to scroll per transition
  speed: 1000,
  lazyLoad: true,
  initialSlide: 1,
};

const getFloorImages = (data) =>
  data?.map((item) => ({ img: item?.attributes?.url }));

const FloorPlans = ({ data }) => {
  const floorInfo = data?.Floor_Plan?.Images?.data;
  const FLOOR_SLIDES_IMG = getFloorImages(floorInfo);

  return (
    <div>
      FloorPlans
      {/* InfiniteSlides */}
      <PreviewImageSlides
        settings={settings}
        data={FLOOR_SLIDES_IMG}
        className="floorPlansSlider"
      />
    </div>
  );
};

export default FloorPlans;
