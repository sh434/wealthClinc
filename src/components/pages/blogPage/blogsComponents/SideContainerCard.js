import Heading from "../../../globalComponents/molecules/Heading";
import "./sideContainer.css";

const SideContainer = ({ data }) => {
  const { img, name, price, details } = data;
  // const SIDE_IMG =
  //   "https://www.wealth-clinic.com/property_media/52251706163372.png";
  return (
    <div className="col-md-12 my-1 d-flex justify-content-center ">
      <div className="row side-bar-main m-0 p-0">
        <div className="col-md-5 col-md-5  side-bar-container">
          <img src={img} alt="" className="img-fluid" />
        </div>
        <div className="col-lg-7 col-md-7  pt-2 sideInfoContainer">
          <Heading
            text={name}
            fontSize="0.75rem"
            color="#E5750F"
            lineHeight="1rem"
            showLine="1"
            className="col-md-12"
          />
          <Heading text={price} fontSize="0.75rem" color="#888" />
          <Heading text={details} fontSize="0.75rem" color="#000" />
        </div>
      </div>
    </div>
  );
};

export default SideContainer;
