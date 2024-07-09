import styles from "./ethosCard.module.css";

const EthosCard = ({ data }) => {
  const { Ethos_Title, Ethos_Description, Ethos_Icon } = data;
  const img = Ethos_Icon?.data?.attributes?.url;
  return (
    <div className={styles.ethosCardContainer}>
      <center>
        <img className={styles.ethosIcon} alt="" src={img} />
      </center>
      <br></br>
      <p className={`${styles.ethosTitle} text-center`}>{Ethos_Title}</p>
      <p className={styles.ethosDescription}>{Ethos_Description}</p>
    </div>
  );
};

export default EthosCard;
