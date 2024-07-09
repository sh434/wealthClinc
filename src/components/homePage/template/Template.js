import { useEffect, useState } from "react";

import CustomLink from "../../CustomLink";
import Heading from "../../globalComponents/molecules/Heading";
import HoverTemplateCard from "./HoverTemplateCard";
// import HoverCityButton from "./HoverCityButton";

import { TEMPLATE_BUTTON_LIST } from "../../../assets/constant";
import styles from "./template.module.css";

const CITY_IMG = {
  BG_IMG1:
    "https://img.freepik.com/free-photo/urban-traffic-with-cityscape_1359-832.jpg?w=1060&t=st=1710280315~exp=1710280915~hmac=b85dba9c559507d68585cc3f959d6bf9e1d7def62d78d30cea9b05f4e0c4823e",
  BG_IMG2: "https://www.wealth-clinic.com/property_media/67581703666273.jpg",
  BG_IMG3:
    "https://png.pngtree.com/background/20210715/original/pngtree-night-view-of-high-rise-buildings-in-urban-district-picture-image_1312997.jpg",
};

const Template = () => {
  const { BG_IMG3 } = CITY_IMG;
  // const [backGroundImg, setBackGroundImg] = useState(null);
  const [backGroundImg, setBackGroundImg] = useState();

  const handleMouseEnter = (buttonImg) => {
    setBackGroundImg(`${buttonImg}`);
  };

  const handleMouseLeave = () => {
    // setBackGroundImg(null);

    setBackGroundImg(BG_IMG3);
  };
  useEffect(() => {
    setBackGroundImg((prevImg) => (prevImg ? prevImg : BG_IMG3));
  }, [backGroundImg, BG_IMG3]);

  return (
    <div
      className={styles.backgroundImgContainer}
      style={{
        // backgroundImage: `linear-gradient(45deg, rgba(0, 69, 255, 0.75), rgba(255, 69, 0, 0.5)), url(${backGroundImg})`,
        background: `rgba(0, 0, 0, 0.5) url(${backGroundImg})`,
        backgroundBlendMode: "darken",
        backgroundAttachment: "fixed",
      }}
    >
      <div className={styles.innerDiv}>
        <div>
          <Heading text={"Our Footprints"} color="#fff" fontWeight={800} />

          <p className="text-color w-75">
            Stop dreaming, start living. Discover your perfect haven: a home
            that reflects your aspirations and embraces your lifestyle.
          </p>
        </div>
        {/* className={`${styles.button1} fw-bold   col-lg-3 col-md-2 my-3 glow`} */}

        <div className={`${styles.buttonsContainer}`}>
          {TEMPLATE_BUTTON_LIST?.map((ele, id) => {
            const { cityName, logo, img, img2 } = ele;
            return (
              <CustomLink
                to={`/${cityName}`}
                key={id}
                style={{ color: "#000" }}
              >
                <HoverTemplateCard
                  cityImg={logo}
                  imgOnHover={img2}
                  onMouseEnter={() => {
                    handleMouseEnter(img);
                  }}
                  onMouseLeave={handleMouseLeave}
                  cityName={cityName}
                />
              </CustomLink>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Template;
