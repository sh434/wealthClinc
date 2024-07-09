import Marquee from "react-fast-marquee";

import Heading from "./../molecules/Heading";

import { MARQUEE } from "../../../assets/constants/marquee";
import "./marqueeCard.css";

const MarqueeSlider = () => {
  return (
    <div className="bgFinalClient pt-3">
      <Heading className="center-item heading" text="Our Prestigious Clients" />

      <div className="marquee-cards-container">
        <Marquee>
          {MARQUEE?.map((image, idx) => {
            const img = image?.img;
            return (
              <div key={idx} className="marqueeCard">
                <img src={img} alt="" />
              </div>
            );
          })}
        </Marquee>
      </div>
    </div>
  );
};

export default MarqueeSlider;
