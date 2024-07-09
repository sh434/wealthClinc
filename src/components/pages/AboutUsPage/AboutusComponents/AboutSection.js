import AboutImg from "./assest/3.jpg";
import "./aboutSection.css";
const AboutSection = () => {
  return (
    <div className="container">
      <div className="row bottomPad">
        <div className="center-item">
          <div className="col-md-5 col-sm-12 col-xs-12">
            <img className="aboutImg" src={AboutImg} alt="" />
          </div>
          <div className="col-md-7 col-sm-12 col-xs-12">
            <p className="aboutDesc">
              The real estate sector is globally renowned and is experiencing
              significant growth in the country due to rapid urbanization and
              increasing household income. However, engaging in property
              transactions can be challenging and may lead to making unfavorable
              decisions. At Wealth Clinic, we aim to revolutionize this
              experience for our customers by prioritizing their needs above all
              else. Our team of specialized real estate experts possesses
              extensive market knowledge and provides transparent services
              tailored to individual property investors. We offer exceptional
              advice and practical solutions to address the real estate
              challenges faced by home buyers. Since our establishment in 2012,
              we have rapidly gained client satisfaction and trust through our
              unparalleled advisory services in the Indian real estate market.
              With a customer-centric approach, our dedicated professionals
              provide personalized attention to each client.
            </p>
            <div className="row">
              <div className="col-md-6">
                <div className="bgCards">
                  <div className="padCard">
                    <h3>
                      <span className="bgNumber">1. </span>Our Mission
                    </h3>
                    <p className="paraDesc">
                      Wealth Clinic is on a mission to provide One Stop Solution
                      to all your realty requirements – in a quick, simple, and
                      reliable manner. We want to make buying or selling
                      properties in India a breeze in the park ...
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="bgCards">
                  <div className="padCard">
                    <h3>
                      <span className="bgNumber">2. </span>Our Vision
                    </h3>
                    <p className="paraDesc">
                      Wealth Clinic aspires to be the most preferred and trusted
                      real estate consulting firm in India. We believe that
                      reality just like Relationships must last lifelong and
                      maybe beyond. And we seek to create this ...
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutSection;
