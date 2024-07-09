import Heading from "../../../globalComponents/molecules/Heading";
import ContactPageForm from "./ContactPageForm";

import useDeviceSize from "../../../../hooks/useDeviceSize";

const mapSectionStyle = {
  display: "flex",
  flexDirection: "column-reverse",
};
const MapSection = () => {
  const isMobile = useDeviceSize();
  return (
    <div className="row mb-5" style={isMobile ? mapSectionStyle : null}>
      <div className="col-md-9">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14023.316517875597!2d77.3773025!3d28.5147882!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce70438c07157%3A0xcfb3b8097d601d47!2sWealth%20Clinic%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1708379371197!5m2!1sen!2sin"
          width={"100%"}
          height="650"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <div className="col-md-3 center-item">
        <div className="w-100">
          <Heading
            text={"Contact Us"}
            fontSize={isMobile ? "1rem" : "1.75rem"}
            color="111"
            fontWeight="600"
            style={{ lineHeight: "1.5rem", textAlign: "center" }}
            className={"my-4"}
          />
          <ContactPageForm />
        </div>
      </div>
    </div>
  );
};

export default MapSection;
