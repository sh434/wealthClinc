import { useLocation } from "react-router-dom";

import InfiniteSlides from "./../../globalComponents/slickCrousel/InfiniteSlides";
import Heading from "../../globalComponents/molecules/Heading";
import EventLocationSummary from "./EventLocationSummary/EventLocationSummary";
import EventSideSummary from "./EventSideSummary";

import useApiFetcher from "../../../hooks/useApiFetcher";
import { API_URL, getFullUrl } from "../../../assets/constants/apiUrls";
import { EVENT_SLIDES } from "../../../assets/constants/events";
import "./eventOverview.css";
import { EMPTY_ARRAY } from "../../../assets/constants";

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1, // Number of slides to scroll per transition
  autoplay: true, // Set to true for automatic slide change
  autoplaySpeed: 1000,
  speed: 1200,
  lazyLoad: true,
  initialSlide: 2,
};

const url = (id) => getFullUrl(`${API_URL.EVENT}/${id}?populate=*`);

const EventOverview = () => {
  const location = useLocation();
  const eventId = location?.state;

  const [eventSummary, error, isLoading] = useApiFetcher(url(eventId));

  if (error) return <div>{error.message}</div>;
  if (isLoading) return <div>Loading Event...</div>;

  const {
    Title,
    Event_Description,
    Start_Date,
    Venue,
    Enter_The_Time,
    Featured_Image = EMPTY_ARRAY,
  } = eventSummary?.attributes || "";

  const img = Featured_Image?.data?.attributes?.url;

  return (
    <>
      <div className="container">
        <div className="mt-5">
          <Heading
            text="Successfull Event"
            fontSize="1rem"
            fontWeight="750"
            lineHeight="1.5"
            color="#555"
          />
          <Heading
            text={Title}
            fontWeight="750"
            fontSize="2.25rem"
            lineHeight="1.5"
            color="#ef750f"
            className="mb-3"
          />
        </div>

        <section className="d-flex justify-content-around">
          <div className="col-md-7">
            <EventLocationSummary
              data={{ Start_Date, Venue, Enter_The_Time, img }}
            />
          </div>
          <di className="col-md-4">
            <EventSideSummary description={Event_Description} />
          </di>
        </section>
        <section className="my-5">
          <InfiniteSlides
            className="eventGallerySlider"
            settings={settings}
            data={EVENT_SLIDES}
          />
        </section>
      </div>
    </>
  );
};

export default EventOverview;
