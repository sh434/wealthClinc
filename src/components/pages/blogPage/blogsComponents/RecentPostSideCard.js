import Heading from "../../../globalComponents/molecules/Heading";
import "./sideContainer.css";

const RecentPostSideCard = ({ data }) => {
  const { img, title, date, category } = data;

  return (
    <div className="col-md-12 my-1 d-flex justify-content-center ">
      <div className="row side-bar-main m-0 p-0">
        <div className="col-lg-5 col-md-5  side-bar-container">
          <img src={img} alt="" className="img-fluid" />
        </div>
        <div className="col-lg-7 col-md-7  pt-2 sideInfoContainer">
          <Heading text={category} fontSize=".75rem" color="#ef750f" />

          <Heading
            text={title}
            fontSize=".75rem"
            color="#444"
            lineHeight="1rem"
            showLine="2"
            fontWeight="500"
          />
          <Heading text={date} fontSize=".75rem" color="#888" />
        </div>
      </div>
    </div>
  );
};

export default RecentPostSideCard;
