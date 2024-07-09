import styles from "./perkCard.module.css";

const PerkCard = ({ data }) => {
  const { Title, Icon } = data;
  const img = Icon?.data?.attributes?.url;
  return (
    <div className="col-md-3">
      <div className={`${styles.perkCardContainer}`}>
        <center className={`${styles.parkCard}`}>
          <img className={`${styles.perkIcon}`} alt="" src={img} />
          <span>{Title}</span>
        </center>
      </div>
    </div>
  );
};

export default PerkCard;
