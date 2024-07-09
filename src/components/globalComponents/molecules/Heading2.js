const Heading2 = ({
  text,
  fontWeight = "bold",
  color = "black",
  fontSize = "2.5rem",
}) => {
  const fontStyle = {
    fontSize: fontSize,
    color: color,
    fontWeight: fontWeight,
  };

  return (
    <h1 className="text-darkBlue" style={fontStyle}>
      {text}
    </h1>
  );
};

export default Heading2;
