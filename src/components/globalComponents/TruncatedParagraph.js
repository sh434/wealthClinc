import React, { useState } from "react";

const TruncatedParagraph = ({ text, maxLines = 3 }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const containerStyle = {
    overflow: "hidden",
    // textOverflow: "ellipsis",
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: maxLines,
    maxHeight: `calc(${maxLines} * 1.2em)`, // Adjust based on your font size
  };

  const readMoreButtonStyle = {
    cursor: "pointer",
    color: "blue",
  };

  const handleReadMore = () => {
    setIsExpanded(true);
  };

  return (
    <div>
      <div style={containerStyle}>{text}</div>
      {!isExpanded && text.length > maxLines * 80 && (
        <div onClick={handleReadMore} style={readMoreButtonStyle}>
          Read More
        </div>
      )}
    </div>
  );
};

export default TruncatedParagraph;
