import AboutImg from "./assest/4.png";
import "./lifeAtWc.css";

const LifeAtWc = ({ data }) => {
  return (
    <div className="container">
      <div className="row bottomPad">
        <div className="center-item">
          <div className="col-md-5 col-sm-12 col-xs-12">
            <img className="aboutImg" src={AboutImg} alt="" />
          </div>
          <div className="col-md-7 col-sm-12 col-xs-12">
            <p className="aboutDesc">
              We at Wealth Clinic focus on a positive environment that is
              productive for everyone and build around a healthy space.
              Professional and personal growth plays a crucial aspect in the
              organization’s environment and to keep them motivated we conduct
              various activities that include: Come, be a part of our growing
              family!
            </p>
            <div className="row">
              <div className="col-md-6">
                <div className="bgCards">
                  <div className="padCard">
                    <h3>
                      <span className="bgNumber">1. </span>
                    </h3>
                    <p className="paraDesc">
                      We conduct induction programs for he new joiners in order
                      to understand the people and pace of the organization.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="bgCards">
                  <div className="padCard">
                    <h3>
                      <span className="bgNumber">2. </span>
                    </h3>
                    <p className="paraDesc">
                      We constantly conduct training and development programs
                      for our employees to upskill themselves.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <p className="aboutDesc1">
              To motivate the morale of our employees, we run various rewards
              and recognition programs too.<br></br>
              Come, be a part of our growing family!
              <br></br>
              We believe that long-term growth needs long-term relationships.
              And it is as true for our team as for our clients. This is why
              Wealth Clinic recognizes, nurtures, and invests in talents and
              builds a long-term relationship with them for a better future
              outcome. So, if you have it in you to make it big in this sector
              and equally value job stability and long-term association, this is
              the workplace for you.
              <br></br>
              Connect with our talent acquisition team at hr@wealth-clinic.com
              or call us at +91-8929822005
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LifeAtWc;
