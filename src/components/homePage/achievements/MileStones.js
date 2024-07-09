import AWARD_IMG from "../../../assets/homePic/award.png";
import SQUARE_FT_IMG from "../../../assets/homePic/squareft-deliver.png";
import HAPPY_CUSTOMER_IMG from "../../../assets/homePic/happy family .png";
import REAL_ESTATE_IMG from "../../../assets/homePic/real-est.png";
import useDeviceSize from "./../../../hooks/useDeviceSize";
import "./style.css";

const MileStones = () => {
  const isMobile = useDeviceSize();

  return (
    <section className="container  mt-5 ">
      <div className={`row achievements ${isMobile ? "mobile" : "desktop"}`}>
        <div className="col-lg-3 col-md-4 col-sm-6 col-6 text-center mb-4">
          <img src={AWARD_IMG} alt="Award" />
          <h4 className="achievementsImgText">
            Best Real Estate
            <br /> Agency Since 2012
          </h4>
        </div>

        <div className="col-lg-3 col-md-4 col-sm-6 col-6 text-center mb-4">
          <img src={HAPPY_CUSTOMER_IMG} alt="Happy Customers" />
          <h4 className="achievementsImgText">15K+ Happy Families</h4>
        </div>

        <div className="col-lg-3 col-md-4 col-sm-6 col-6 text-center mb-4">
          <img src={SQUARE_FT_IMG} alt="Square Feet Delivered" />
          <h4 className="achievementsImgText">
            15 Million Sq Ft Space Delivered
          </h4>
        </div>

        <div className="col-lg-3 col-md-4 col-sm-6 col-6 text-center mb-4">
          <img src={REAL_ESTATE_IMG} alt="Real Estate Projects" />
          <h4 className="achievementsImgText">
            15+ Commercial & Residential
            <br /> Projects Delivered
          </h4>
        </div>
      </div>
    </section>
  );
};

export default MileStones;
