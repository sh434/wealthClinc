import { dateToNumber, getCurrentDate } from "../helpers/helper";

export function getEventType(EventDate) {
  const currentDate = dateToNumber(getCurrentDate());
  const eventDate = dateToNumber(EventDate);
  if (eventDate > currentDate) return true; // "upcoming-event"
  return false; // "successfull-event"
}
