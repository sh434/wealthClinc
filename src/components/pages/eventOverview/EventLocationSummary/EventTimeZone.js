import { SlCalender } from "react-icons/sl";

import styles from "./eventTimeZone.module.css";

const EventTimeZone = ({ className, title, text }) => {
  return (
    <div className={` ${className}`}>
      <div className={styles.eventTimeZoneContainer}>
        <div className={`${styles.iconContainer} col-md-2`}>
          <SlCalender className={styles.icon} />
        </div>
        <div className={`${styles.textContainer} col-md-8`}>
          <div className={styles.textTitle}>{title}</div>
          <div className={styles.textDescription}>{text}</div>
        </div>
      </div>
    </div>
  );
};

export default EventTimeZone;
