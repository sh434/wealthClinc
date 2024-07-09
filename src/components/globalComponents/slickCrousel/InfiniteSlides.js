import Slider from "react-slick";
import { cloneElement } from "react";

import "./infiniteSlider.css";

const InfiniteSlides = (props) => {
  const { settings, className, childElement, gap, data } = props;

  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   slidesToShow: 3,
  //   slidesToScroll: 1, // Number of slides to scroll per transition
  //   autoplay: true, // Set to true for automatic slide change
  //   autoplaySpeed: 1000,
  //   speed: 500,
  //   // lazyLoad: true,
  //   initialSlide: 2,
  //   arrows: true,
  //   prevArrow: <button className="prev-arrow">Previous</button>,
  //   nextArrow: <button className="next-arrow">Next</button>,
  // };
  const setting = { ...settings, className: "styleForSliderLib" };

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
            <img
              src={slide?.img}
              alt={slide?.type}
              className="infiniteSlider-img"
            />
            <div className="slider-title">
              {childElement ? cloneElement(childElement, { ...slide }) : null}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default InfiniteSlides;

// childElement={}
// childElement?childElement({data:slide}):""
