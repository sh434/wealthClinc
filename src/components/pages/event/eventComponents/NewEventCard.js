import { FaCalendarDays } from "react-icons/fa6";
import { MdOutlineWatchLater } from "react-icons/md";
import Heading from "../../../globalComponents/molecules/Heading";

import {
  splitDate,
  getMonthName,
  checkTimeShift,
} from "../../../../helpers/helper";
import styles from "./newEventCard.module.css";

export const NewEventCard = ({ cardData }) => {
  // const { img, time, fullDate, date, month, details } = cardData;
  const { Featured_Image, Start_Date, Venue, Enter_The_Time } =
    cardData?.attributes;
  const { url } = Featured_Image?.data?.attributes;

  const [img, fullDate, details, time] = [
    url,
    Start_Date,
    Venue,
    Enter_The_Time,
  ];
  const [year, month, date] = splitDate(fullDate);

  const customMonth = getMonthName(month).slice(0, 3);
  const customDate = `${year}-${customMonth}-${date}`;
  const customTime = `${checkTimeShift(time)}`;

  const textContainer = {
    color: "#888",
    minHeight: "44px",
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    WebkitBoxOrient: " vertical",
    lineHeight: " 1.25rem",
    WebkitLineClamp: "2",
    maxHeight: "calc(2 * 1.25rem)",
    margin: "0.25rem",
  };
  return (
    <div className={`col-lg-12 col-md-12 col-sm-12 ${styles.cardContainer}`}>
      <div className={styles.card1}>
        <div className={styles.imgDiv}>
          <img alt="img" src={img} />
          <div className={styles.calenderCard}>
            <Heading
              text={date}
              fontSize="1.5rem"
              fontWeight="650"
              className=""
            />
            <Heading text={customMonth} fontSize="1rem" fontWeight="550" />
            <Heading text={customTime} fontSize="0.8rem" fontWeight="450" />
          </div>
          {/* <div className={styles.signatureContainer}>Successful Events</div> */}
        </div>
        <div className="fw-bold mt-2">
          <FaCalendarDays />
          {customDate} |
          <MdOutlineWatchLater />
          <span>{customTime}</span>
        </div>
        <div className="c-gray" style={textContainer}>
          {details}
        </div>
        {/* <button className={`${styles.blogCardBtn} fw-bold`}>Read More</button> */}
      </div>
    </div>
  );
};
