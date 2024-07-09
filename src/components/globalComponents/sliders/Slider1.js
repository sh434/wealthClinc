import { BsArrowRightCircleFill, BsArrowLeftCircleFill } from "react-icons/bs";
// import PropTypes from "prop-types";
import "./index.css";
import { useState } from "react";
const IMG_OBJ = [
  {
    title: "first img",
    src: "https://media.istockphoto.com/id/1423605865/photo/india-at-night-viewed-from-space-with-city-lights-showing-activity-in-indian-cities-delhi.jpg?s=1024x1024&w=is&k=20&c=BDyjw2NiCsyqxQUlw5wO6uqV-uj0kXrQuXt7pa4mz4U=",
  },
  {
    title: "second img",
    src: "https://media.istockphoto.com/id/1428716920/photo/planet-earth-viewed-from-space-with-city-lights-technology-global-communication-world.jpg?s=1024x1024&w=is&k=20&c=unfTEy_Y7sx9DFyFRYLLHb-AMGOwOuFCOz8wn9qblxM=",
  },
  {
    title: "first img",
    src: "https://media.istockphoto.com/id/1423605865/photo/india-at-night-viewed-from-space-with-city-lights-showing-activity-in-indian-cities-delhi.jpg?s=1024x1024&w=is&k=20&c=BDyjw2NiCsyqxQUlw5wO6uqV-uj0kXrQuXt7pa4mz4U=",
  },
  {
    title: "second img",
    src: "https://media.istockphoto.com/id/1428716920/photo/planet-earth-viewed-from-space-with-city-lights-technology-global-communication-world.jpg?s=1024x1024&w=is&k=20&c=unfTEy_Y7sx9DFyFRYLLHb-AMGOwOuFCOz8wn9qblxM=",
  },
];

function Slider({ width, height }) {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const previousBtn = () => {
    setCurrentImgIndex(
      currentImgIndex === 0 ? IMG_OBJ.length - 1 : currentImgIndex - 1
    );
  };
  const nextBtn = () => {
    setCurrentImgIndex(
      currentImgIndex === IMG_OBJ.length - 1 ? 0 : currentImgIndex + 1
    );
  };
  return (
    <div className="carousel">
      <BsArrowLeftCircleFill className="leftArrow" onClick={previousBtn} />

      {IMG_OBJ.map((img, idx) => {
        return (
          <img
            key={idx}
            src={img.src}
            alt="neImg"
            className={currentImgIndex === idx ? "slide" : "slide slide-hidden"}
            // onMouseEnter={}
            // onMouseLeave={() => console.log("Mouse Leave")}
            style={{ width: `${width}px`, height: `${height}px` }}
          />
        );
      })}
      <BsArrowRightCircleFill className="rightArrow" onClick={nextBtn} />

      <span className="radioBtns-container">
        {IMG_OBJ.map((_, idx) => {
          return (
            <button
              onClick={() => setCurrentImgIndex(idx)}
              key={idx}
              className={
                currentImgIndex === idx
                  ? "radioBtn"
                  : "radioBtn radioBtn-active"
              }
            ></button>
          );
        })}
      </span>
    </div>
  );
}

// Slider.propTypes = {
//   width: PropTypes.number.isRequired,
//   height: PropTypes.number.isRequired,
// };

export default Slider;
