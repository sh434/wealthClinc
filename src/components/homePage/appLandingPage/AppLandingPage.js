import AppStore from "../../../assets/app-store.png";
import GooglePlay from "../../../assets/google-play.png";
import AppLandingImage from "../../../assets/appLandingImage.png";
import Heading from "../../molecules/Heading";

// import QrCode from "../../assets/Qr-Code.png";
import "./appLanding.css";

const AppLandingPage = () => {
  return (
    <section className="container d-flex justify-content-center align-content-center overflow-hidden border rounded-5 mt-5 app-Landing-Section">
      <div className="d-flex app-Landing-Section w-100">
        <div className="col-md-8 appLanding-Left">
          <div className="my-2">
            <Heading text="Download This App" color="rgba(255,255,255,1)" />
          </div>

          <div className="my-4 text-white opacity-75">
            Our innovative app makes borrowing easier than ever. Access
            personalized loan options, get instant approvals, and manage your
            finances conveniently on the go.
          </div>

          <div className="d-flex w-75 p-3 justify-content-between">
            <div className="d-flex flex-column justify-content-between ml-2">
              <img
                src={AppStore}
                alt="app-store"
                className="img-fluid my-2 border "
              />
              <img
                src={GooglePlay}
                alt="google-play"
                className="img-fluid my-2 border"
              />
            </div>

            {/* <div className="qr-code p-2">
              <img
                src={QrCode}
                alt="appLandingImages"
                className="border opacity-50"
              />
            </div> */}
          </div>
        </div>

        {/* -------------------------------- */}
        <div className="col-md-4 appLanding-Right">
          <img src={AppLandingImage} alt="appLandingImages" />
        </div>
      </div>
    </section>
  );
};

export default AppLandingPage;
