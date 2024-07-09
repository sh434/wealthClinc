import "./stickyIcons.css";
import BackButton from "../BackButton/BackButton";

const StickySocialIcons = () => {
  return (
    <>
      <BackButton />
      <div className="sticky-icon">
        <a
          href="https://api.whatsapp.com/send?phone=9711611652&text=Hi%20I%20am%20interested%20in%20Wealth%20Clinic%E2%80%99s%20Property.%20Please%20contact%20me%20to%20proceed%20with%20this%20lucrative%20realty%20option..%22"
          className="whatsapp"
        >
          <i className="fa-brands fa-whatsapp rotate-logo"></i>{" "}
          <span className="textSocial">whatsapp</span>
        </a>
        <a href="https://meet.google.com/?authuser=0" className="video">
          <i className="fa-solid fa-video rotate-logo"></i>{" "}
          <span className="textSocial">video</span>
        </a>
        <a href="mailto:customercare@wealth-clinic.com" className="envelope">
          <i className="fa-regular fa-envelope rotate-logo"></i>{" "}
          <span className="textSocial">Email</span>
        </a>
        <a
          href="https://www.youtube.com/watch?v=ndj7ANrFGzo&ab_channel=WealthClinic"
          className="Youtube"
        >
          <i className="fab fa-youtube rotate-logo"></i>{" "}
          <span className="textSocial">Youtube</span>
        </a>
        <a href="/twitter.com" className="Twitter">
          <i className="fab fa-twitter rotate-logo"> </i>{" "}
          <span className="textSocial">Twitter</span>
        </a>

      </div>

    </>
  );
};

export default StickySocialIcons;
