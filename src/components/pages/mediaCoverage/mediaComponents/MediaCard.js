import Heading from "../../../globalComponents/molecules/Heading";
import "./mediaCard.css";

const MediaCard = () => {
  //   const { img, title } = data;
  return (
    <div className="col-lg-3 mediaCard">
      <div className="mediaCardImgBox">
        <img
          src={
            "https://www.wealth-clinic.com/coverage_media/44761689142713.jpg"
          }
          alt=""
          className="img-fluid"
        />
      </div>
      <Heading
        text="Lorem Ipsum is a placeholder text commonly used in the graphic, print, and web design"
        fontSize="1.25rem"
        color="#999"
        className="m-3 awardHeading"
        fontWeight="600"
        style={{ textAlign: "center" }}
      />
    </div>
  );
};

export default MediaCard;
