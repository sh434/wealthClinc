// import EventCard from "../EventsCard";
import { NewEventCard } from "../NewEventCard";

import { SUCCESSFUL_EVENTS } from "../../../../../assets/constants/events";

const SuccessFullEvent = () => {
  return (
    <>
      {SUCCESSFUL_EVENTS.map((item, idx) => (
        <NewEventCard key={idx} cardData={item} />
      ))}
    </>
  );
};

export default SuccessFullEvent;
