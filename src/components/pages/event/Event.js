import { Link, Routes, Route, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";

import UpComingEvents from "./eventComponents/upComingEvents/UpCommingEvents";
import SuccessFullEvent from "./eventComponents/successFullEvent/SuccessFullEvent";
import { NewEventCard } from "./eventComponents/NewEventCard";
import TextBg from "./../../globalComponents/molecules/TextBg";

import useApiFetcher from "./../../../hooks/useApiFetcher";
import useScrollOnTop from "./../../../hooks/useScrollOnTop";
import { generateEventDetailsURL } from "./../../../helpers/getRedirectUrl";
import { getEventType } from "../../../services/businessLogic";
import { API_URL, getFullUrl } from "../../../assets/constants/apiUrls";
import { EVENT_TYPE } from "../../../assets/constants/eventPage";
import URL from "../../../assets/constants/url";
import TextureBG from "../../../assets/TextureBG.jpg";
import "./event.css";

function getEventDataByRoute(eventsData, route) {
  const UPCOMING_EVENTS = eventsData?.filter((event) =>
    getEventType(event?.attributes?.Start_Date)
  );

  const SUCCESSFUL_EVENTS = eventsData?.filter(
    (event) => !getEventType(event?.attributes?.Start_Date)
  );

  const ALL_EVENTS = eventsData;

  const eventDataMap = {
    "/event/upcoming-event": {
      data: UPCOMING_EVENTS,
      eventType: "Upcoming Events",
    },
    "/event/successfull-event": {
      data: SUCCESSFUL_EVENTS,
      eventType: "Succesful Event",
    },
    default: { data: ALL_EVENTS, eventType: "All Events" },
  };
  return eventDataMap[route] || eventDataMap.default;
}
const url = getFullUrl(`${API_URL.EVENT}?populate=*`);

const Event = () => {
  const { pathname, state } = useLocation();
  const [eventData, setEventData] = useState(state || []);
  const [activeBtnColor, setActiveBtnColor] = useState(EVENT_TYPE.allEvent);

  const [events, error, isLoading] = useApiFetcher(url);

  useScrollOnTop(400, 0, pathname);

  useEffect(
    () =>
      setEventData(
        getEventDataByRoute(events, pathname) || getEventDataByRoute(events)
      ),
    [pathname, events]
  );

  if (error) return <div>{error.message}</div>;
  if (isLoading) return null;

  function handleEventType(event) {
    setActiveBtnColor(event);
  }

  const btnColorSet = (btnType) =>
    activeBtnColor === btnType ? "#ef750f" : "#0b2c3d";

  return (
    <div
      className="container-fluid px-5 py-0 m-0"
      style={{
        backgroundImage: `url("${TextureBG}")`,
      }}
    >
      <div className="eventHeader col-md-8">
        <div
          className="events col-md-4"
          style={{
            backgroundColor: btnColorSet(EVENT_TYPE.allEvent),
          }}
          onClick={() => handleEventType(EVENT_TYPE.allEvent)}
        >
          <Link to={URL.EVENT} state={eventData}>
            All Events
          </Link>
        </div>
        <div
          className="col-md-4 events"
          style={{
            backgroundColor: btnColorSet(EVENT_TYPE.upComingEvent),
          }}
          onClick={() => handleEventType(EVENT_TYPE.upComingEvent)}
        >
          <Link to={URL.UPCOMING_EVENT} state={eventData}>
            Upcoming Events
          </Link>
        </div>
        <div
          className="col-md-4 events"
          style={{
            backgroundColor: btnColorSet(EVENT_TYPE.successFullEvent),
          }}
          onClick={() => handleEventType(EVENT_TYPE.successFullEvent)}
        >
          <Link to={URL.SUCCESS_FULL_Event} state={eventData}>
            Successful Event
          </Link>
        </div>
      </div>

      <div>
        <TextBg
          text={eventData?.eventType}
          fontSize="4.5rem"
          fontWeight="1000"
        />
      </div>

      <div className="row p-5 eventCardContainer">
        {/* <div className="row">
          <MasonryCards data={MASONRY_DATA} imgType="img2" />
        </div> */}
        {eventData?.data?.map((item, idx) => {
          const { Start_Date } = item?.attributes;

          const eventStatus = getEventType(Start_Date)
            ? "upcoming-event"
            : "successfull-event";

          return (
            <Link
              key={idx}
              to={generateEventDetailsURL(eventStatus)}
              className="col-lg-4 col-md-4 col-sm-6 p-0 m-0"
              state={item?.id}
            >
              <NewEventCard cardData={item} />
            </Link>
          );
        })}
      </div>

      <Routes>
        <Route path={URL.UPCOMING_EVENT} element={<UpComingEvents />} />
        <Route path={URL.SUCCESS_FULL_Event} element={<SuccessFullEvent />} />
      </Routes>
    </div>
  );
};

export default Event;
