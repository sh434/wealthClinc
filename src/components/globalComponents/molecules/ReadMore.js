import { useState } from "react";

import CkEditorContentDisplay from "../CkEditorContentDisplay/CkEditorContentDisplay";
import Heading from "./Heading";

const defaultBtnStyle = {
  border: "none",
  color: "#ef750f",
  padding: ".25rem .5rem",
};
// WebkitLineClamp: 1,

const ReadMore = ({
  className,
  color,
  fontSize,
  fontWeight,
  style,
  text,
  lineHeight,
  showLine,
  ckEditorDescription,
  btnStyle,
}) => {
  const [isReadMoreExpended, setIsReadMoreExpended] = useState(true);
  const toggleReadMoreBtn = () => setIsReadMoreExpended(!isReadMoreExpended);

  return (
    <div>
      {ckEditorDescription ? (
        <div
          style={{
            height: isReadMoreExpended ? lineHeight : "auto",
            overflow: "hidden",
            transition: "1s",
          }}
        >
          {ckEditorDescription?.map((item, idx) => (
            <CkEditorContentDisplay key={idx} content={item} />
          ))}
        </div>
      ) : (
        <Heading
          className={`my-3 aboutBuilder-Headline ${className}`}
          color={color}
          fontSize={fontSize}
          fontWeight={fontWeight}
          style={style}
          text={text}
          lineHeight={lineHeight}
          showLine={!isReadMoreExpended ? "200" : `${showLine}`}
        />
      )}

      <button
        className="fw-bold"
        style={{ ...defaultBtnStyle, ...btnStyle }}
        onClick={toggleReadMoreBtn}
      >
        {isReadMoreExpended ? "Read More" : "Read Less"}
      </button>
    </div>
  );
};

export default ReadMore;
