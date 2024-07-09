import "./textOnImg.css";

const TextOnImg = (props) => {
  const { name, type, city } = props || {};

  return (
    <div className="textOnImg-container">
      {/* data-aos="zoom-in" */}
      <div className="textOnImg-child text-lg-center">
        <h5 className=" text-white fs-4">{name}</h5>
        <div className="text-white ">
          {type} | <span>{city}</span>
        </div>
      </div>
    </div>
  );
};

export default TextOnImg;
