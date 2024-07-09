import TextBg from "../../globalComponents/molecules/TextBg";
import MapSection from "./ContactUsComponents/MapSection";
import AddressSection from "./ContactUsComponents/AddressSection";
import useDeviceSize from "../../../hooks/useDeviceSize";

const ContactUsPage = () => {
  const isMobile = useDeviceSize();
  return (
    <section className="container-fluid d-flex justify-content-center flex-column">
      <TextBg text={"OUR BRANCHES"} fontWeight={900} fontSize="6rem" />
      <AddressSection />
      <MapSection />

      {isMobile}
    </section>
  );
};
export default ContactUsPage;
