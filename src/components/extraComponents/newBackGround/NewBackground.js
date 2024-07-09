import TemplateBackGroundImage from "../../assets/templateBackgroundImg.jpg";
import "./NewBackground.css";

const NewBackground = () => {
  return (
    <div className="container">
      <div className="w-75 backgroundIMG">
        <img src={TemplateBackGroundImage} alt="" />
      </div>
    </div>
  );
};

export default NewBackground;
