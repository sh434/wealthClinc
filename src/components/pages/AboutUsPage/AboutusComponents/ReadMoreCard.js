import "./fourPillars.css";
import { FaArrowRight } from "react-icons/fa";

const ReadMoreCard = (props) => {
  const { color, style, img, readMoreTitle, readMoreDesc, bgColor, txtColor } =
    props; // props.color
  const newStyle = style;

  return (
    <div className="bgColBlock" style={{ background: color, ...newStyle }}>
      <div className="row">
        <div className="col-md-6 col-xs-6">
          <img className="pillarsImg" src={img} alt="" />
        </div>
        <div className="col-md-6 col-xs-6">
          <img className="tryBubble" src={require("./assest/2.png")} alt="" />
        </div>
        <p className="readMoreTitle">{readMoreTitle}</p>
        <p className="readMoreDesc">{readMoreDesc}</p>
        <div className="d-grid gap-2 col-12 mx-auto btnTxt88">
          <button
            style={{
              background: bgColor,
              color: txtColor,
              boxShadow: "4px 4px 8px rgba(0 ,0, 0, 0.4 )",
            }}
            className="btn border-0 btnTxt"
            type="button"
          >
            Explore More <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};
export default ReadMoreCard;
