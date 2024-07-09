import { useEffect, useState } from "react";
import Heading from "../../../globalComponents/molecules/Heading";
import CustomLink from "../../../CustomLink";
import { TEMPLATE_BUTTON_LIST } from "../../../../assets/constant";
import HoverTemplateCard from "../../../homePage/template/HoverTemplateCard";
import styles from "../../../homePage/template/template.module.css";
import "./TemplateMob.css";

const CITY_IMG = {
  BG_IMG1:
    "https://img.freepik.com/free-photo/urban-traffic-with-cityscape_1359-832.jpg?w=1060&t=st=1710280315~exp=1710280915~hmac=b85dba9c559507d68585cc3f959d6bf9e1d7def62d78d30cea9b05f4e0c4823e",
  BG_IMG2: "https://www.wealth-clinic.com/property_media/67581703666273.jpg",
  BG_IMG3:
    "https://png.pngtree.com/background/20210715/original/pngtree-night-view-of-high-rise-buildings-in-urban-district-picture-image_1312997.jpg",
};

const Card = () => {
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
    <div className="mobOurFootPrints" style={{ color: "#000" }}>
      <div className="px-2">
        <Heading
          fontSize="1rem"
          fontWeight="650"
          text={"Our Footprints"}
          className="OurFootPrintsTitle d-flex justify-content-center my-2"
        />

        <Heading
          fontSize=".75rem"
          className="footprintsParagraph d-flex justify-content-center"
          text={
            "Stop dreaming, start living. Discover your perfect haven: a home that reflects your aspirations and embraces your lifestyle."
          }
          style={{ maxHeight: "auto" }}
        />
      </div>
      <div className={styles.gridContainer}>
        {TEMPLATE_BUTTON_LIST.slice(0, 6)?.map((ele, id) => {
          const { cityName, logo, img, img2 } = ele;
          return (
            <CustomLink to={`/${cityName}`} key={id} style={{ color: "#000" }}>
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
  );
};

export default Card;
