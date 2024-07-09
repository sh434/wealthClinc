import {
  checkTimeShift,
  getMonthName,
  splitDate,
} from "../../../../helpers/helper";
import EventTimeZone from "./EventTimeZone";

import "./eventLocationSummary.css";

const EventLocationSummary = ({ data }) => {
  const { Start_Date, Venue, Enter_The_Time, img } = data;
  const [year, month, day] = splitDate(Start_Date);

  const time = checkTimeShift(Enter_The_Time);
  const monthName = getMonthName(month).slice(0, 3);
  const date = `${year} ${monthName}, ${day}`;

  return (
    <div className="eventLocationSummary">
      <div>
        <img src={img} alt="" />
      </div>
      <div className="row py-3">
        <EventTimeZone className={"col-md-4"} title="EVENT DATE" text={date} />
        <EventTimeZone className={"col-md-4"} title="Event Time" text={time} />
        <EventTimeZone className={"col-md-4"} title="VENUE" text={Venue} />
      </div>
    </div>
  );
};

export default EventLocationSummary;
