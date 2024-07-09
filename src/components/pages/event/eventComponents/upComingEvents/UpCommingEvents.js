import { useLocation } from "react-router-dom";
// import EventCard from "../NewEventsCard";
import { NewEventCard } from "../NewEventCard";

const UpComingEvents = () => {
  const { state } = useLocation();
  return (
    <>
      {state?.map((item, idx) => (
        <NewEventCard cardData={item} key={idx} />
      ))}
    </>
  );
};

export default UpComingEvents;
