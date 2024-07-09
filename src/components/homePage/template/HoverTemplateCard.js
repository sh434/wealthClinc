import PropTypes from "prop-types";
import { useState } from "react";
// import Pune from "../../../assets/cityName/pune.png";

import styles from "./template.module.css";
// cityImg="https://s3.ap-south-1.amazonaws.com/assets.klayschools.com/wp-content/uploads/2023/08/21093231/Group-12970%402x.png"

const HoverTemplateCard = ({
  cityImg,
  cityName,
  imgOnHover,
  onMouseEnter,
  onMouseLeave,
  className,
}) => {
  const [isHovered, setIsHovered] = useState(true);
  const handleBtnImgOnHover = () => setIsHovered(false);
  const handleBtnImgOnLeaveHover = () => setIsHovered(true);

  return (
    <div
      className={`${styles.hoverTemplateCard} ${className}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div
        className={styles.cityNameImgContainer}
        onMouseEnter={handleBtnImgOnHover}
        onMouseLeave={handleBtnImgOnLeaveHover}
      >
        <img alt="" src={isHovered && false ? cityImg : imgOnHover} />
        <p>{cityName}</p>
      </div>

      {/* <button>{cityName}</button> */}
    </div>
  );
};

HoverTemplateCard.prototypes = {
  cityImg: PropTypes.string.isRequired,
  cityName: PropTypes.string.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
};

export default HoverTemplateCard;
