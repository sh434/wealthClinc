import styles from "./template.module.css";
import PropTypes from "prop-types";

const HoverCityButton = ({ cityName, onMouseEnter, onMouseLeave }) => {
  return (
    <button
      className={`${styles.button1} fw-bold   col-lg-3 col-md-2 my-3 glow`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {cityName} <i className="bi bi-chevron-right fw-bold"></i>
    </button>
  );
};

HoverCityButton.propTypes = {
  cityName: PropTypes.string.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
};

export default HoverCityButton;
