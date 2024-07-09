import ButtonDarkBlue from "../../molecules/ButtonDarkBlue";
import WhiteButton from "../../molecules/WhiteButton";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container d-flex">
        <div className="col-lg-3 fw-bold">
          <ButtonDarkBlue name={"JOIN US"} />
          <WhiteButton name={"Agent Login"} />
        </div>

        <div className="col-lg-2 fs-4 fw-bold text-them-color">
          <div>Buy</div>
          <div>Rent </div>
          <div>Sell</div>
          <div>New</div>
          <div>Development </div>
          <div>Agents</div>
          <div>Contact</div>
          <div>Shop</div>
        </div>

        <div className="col-lg-2 fw-bold">
          <h6 className="text-gray">MARKETING & REACH</h6>
          <div>WEALTH_CLINIC. Studios</div>
          <div>WEALTH_CLINIC. ADX</div>
          <div>WEALTH_CLINIC. ID Lab</div>
        </div>

        <div className="col-lg-2 fw-bold">
          <h6 className="text-gray">COMPANY</h6>
          <div>About</div>
          <div>S.MPLE</div>
          <div>Referrals</div>
          <div>Careers</div>
          <div>Press</div>
          <div>Annual Letter</div>
          <div>Annual Letter Letter</div>
          <div>Annual </div>
        </div>

        <div className="col-lg-2 fw-bold">
          <h6 className="text-gray">INSIGHTS</h6>
          <div>Market Knowledge</div>
          <div>Blog</div>
          <div>Guides</div>
          <div>Course</div>
          <div>Books</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
