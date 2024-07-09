import styles from "./masnory.module.css";
// import PropTypes from "prop-types";

const MasonryCardSx = {
  display: "block",
  width: "100%",
  height: "100%",
  // transform: "scaleX(2)",
  // backgroundSize: "cover",
  // backgroundPosition: "center",
};

const MasonryCardDiv = (size) => ({
  height: `calc(${size}px - 100px)`,
  // minHeight: "250px",
  // maxHeight: "500px",
  minHeight: "280px",
  maxHeight: "380px",
});
const MasonryCard = ({ item, imgType }) => {
  // const { title, size} = item;
  // let img = item[imgType];
  // if (!img || !title || !size) return null;
  const { Title, Media_Coverage_Image } = item?.item?.attributes;
  const size = parseInt(item?.size);
  const title = Title;
  const img = Media_Coverage_Image?.data?.attributes?.url;

  if (!img || !title || !size) return null;

  return (
    <div className={styles.masonryCardContainer} style={MasonryCardDiv(size)}>
      <img
        src={img ? `${img}?w=162&auto=format` : null}
        alt={title}
        loading="lazy"
        style={MasonryCardSx}
        className={styles.masonryCard}
      />
    </div>
  );
};

// MasonryCard.propTypes = {
//   name: PropTypes.string,
//   control: PropTypes.object,
//   toolbarOptions: PropTypes.object,
//   error: PropTypes.object,
// };
// MasonryCard.defaultProps = {
//   name: undefined,
//   control: EMPTY_OBJECT,
//   toolbarOptions: EMPTY_OBJECT,
//   error: EMPTY_OBJECT,
// };

export default MasonryCard;
