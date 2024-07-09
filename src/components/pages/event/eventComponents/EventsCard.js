// import Heading from "../../../globalComponents/molecules/Heading";
import styles from "./eventCard.module.css";
import { FaCalendarDays } from "react-icons/fa6";
import { MdOutlineWatchLater } from "react-icons/md";
// import ProfilerSection from "./ProfilerSection";

const EventCard = ({ cardData }) => {
  const { img, time, date, details } = cardData;
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
    <div className={`col-lg-3 col-md-4 col-sm-6 ${styles.card1}`}>
      <div className={styles.imgDiv}>
        <img alt="img" src={img} />
        {/* <div className={styles.signatureContainer}>Successful Events</div> */}
        <div className={styles.signatureContainer}>Successful Events</div>
      </div>
      <div className="fw-bold ">
        <FaCalendarDays />
        {date} |
        <MdOutlineWatchLater />
        <span>{time}</span>
      </div>
      <div className="c-gray" style={textContainer}>
        {details}
      </div>
      <button className={`${styles.blogCardBtn} fw-bold`}>Read More</button>
    </div>
  );
};
export default EventCard;
