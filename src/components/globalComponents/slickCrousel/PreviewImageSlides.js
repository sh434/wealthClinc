import Slider from "react-slick";
import { cloneElement } from "react";
import { Image } from "antd";

import "./infiniteSlider.css";

const PreviewImageSlides = (props) => {
  const { settings, className, childElement, gap, data } = props;

  const setting = { ...settings, className: "styleForSliderLib" };
  const allImg = data?.map((item) => item.img);

  return (
    <div className={className + " centerSlider"}>
      <Slider {...setting}>
        {data?.map((slide, idx) => (
          <div
            key={idx}
            className=" sliderImg-container position:relative"
            style={{
              "--slide-padding": gap ? gap : "0 0.5rem",
            }}
          >
            <Image.PreviewGroup items={allImg} className="previewImageSlides">
              <Image
                className="floorPlansSlider"
                src={slide?.img}
                alt={slide?.type}
              />
            </Image.PreviewGroup>
            <div className="slider-title">
              {childElement ? cloneElement(childElement, { ...slide }) : null}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PreviewImageSlides;
