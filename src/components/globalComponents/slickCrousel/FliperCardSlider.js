import Slider from "react-slick";

import { SLIDES } from "../../../assets/IMG";
import "./fliperCardSlider.css";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const FliperCardSlider = () => {
  return (
    <div className="container">
      <Slider {...settings}>
        {SLIDES.map((slide, idx) => (
          <Flider3dCard slideData={slide} key={idx} />
        ))}
      </Slider>
    </div>
  );
};

export default FliperCardSlider;

function Flider3dCard({ slideData }) {
  const { img, type, city, name } = slideData;
  return (
    <div className="box-item">
      <div className="flip-box">
        <div
          className="flip-box-front text-center"
          style={{ backgroundImage: `url(${img})` }}
        >
          <div className="inner color-white">
            <h3 className="flip-box-header">{name}</h3>
            <p>
              {type} | {city}
            </p>
          </div>
        </div>
        <div
          className="flip-box-back text-center"
          style={{ backgroundImage: `url(${img})` }}
        >
          <div className="inner color-white">
            <h3 className="flip-box-header">{name}</h3>
            <p>
              {type} | {city}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
