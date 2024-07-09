import styles from "./button.module.css";

const WhiteButton = ({ name }) => {
  return <button className={`${styles.whiteButton} fw-bold`}>{name}</button>;
  // fw-bold c-darkBlue
};

export default WhiteButton;
