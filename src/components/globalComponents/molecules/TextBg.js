import Heading from "./Heading";

import "./textBg.css";

const TextBg = ({ text, fontWeight, fontSize, style, className }) => {
  const newStyle = {
    textAlign: "center",
    textShadow: "5px 5px 10px rgba(0, 0, 0, .3)",
    ...style,
  };
  return (
    <div className="text-background-container">
      <Heading
        text={text}
        className={`textH1 ${className}`}
        fontSize={fontSize}
        fontWeight={fontWeight}
        style={newStyle}
      />
    </div>
  );
};

export default TextBg;
