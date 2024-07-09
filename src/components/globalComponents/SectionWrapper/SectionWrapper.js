import "./sectionWrapper.css";

const SectionWrapper = ({ title, children }) => {
  return (
    <div className="section-wrapper">
      <h3 className="section-title">{title}</h3>
      <div className="section-content">{children}</div>
    </div>
  );
};

export default SectionWrapper;
