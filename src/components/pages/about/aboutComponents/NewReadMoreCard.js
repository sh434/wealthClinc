import CircleTexture from "../../../../assets/cricle_bg.png";
import styles from "./newReadMoreCard.module.css";

const NewReadMoreCard = (props) => {
  const { color, style, img, readMoreTitle, readMoreDesc } = props;
  const newStyle = style;

  return (
    <div
      className={styles.bgColBlock}
      style={{ background: color, ...newStyle }}
    >
      <div className="row">
        <div className="col-md-3 col-xs-3">
          <img className={styles.pillarsImg} src={img} alt="pilar1" />
        </div>
        <div className="col-md-9 col-xs-9">
          <img className={styles.tryBubble} src={CircleTexture} alt="pilar2" />
        </div>
        <p className={styles.readMoreTitle}>{readMoreTitle}</p>
        <p className={styles.readMoreDesc}>{readMoreDesc}</p>
      </div>
    </div>
  );
};
export default NewReadMoreCard;
