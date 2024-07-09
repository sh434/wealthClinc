import useScrollOnTop from "../hooks/useScrollOnTop";
import CopyRightSection from "./globalComponents/copyRightSection/CopyRightSection";
import Footer2 from "./globalComponents/footer2/Footer2";
import TextContent from "./globalComponents/newFooterContent/TextContent";
import FooterMob from "./mobileComponents/FooterMob";

import useDeviceSize from "../hooks/useDeviceSize";
import CopyRightFooter from "./globalComponents/CopyRightFooter/CopyRightFooter";
import StickySocialIcons from "./globalComponents/stickySocialIcons/StickySocialIcons";


const Body = ({ children }) => {
  const isMobile = useDeviceSize();
  useScrollOnTop(isMobile ? 0 : 500);
  return (
    <div className="body">
      {/* <Disclaimer /> */}
      {children}
      {isMobile ? (
        <FooterMob />
      ) : (
        <>
          <Footer2 />
          <CopyRightSection />
          <TextContent />
          <CopyRightFooter />
          <StickySocialIcons />
    
        </>
      )}
    </div>
  );
};

export default Body;
