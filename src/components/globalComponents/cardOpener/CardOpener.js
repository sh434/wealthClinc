import React, { useEffect } from 'react';
import useDeviceSize from "../../../hooks/useDeviceSize";
import { EMPTY_OBJECT } from "../../../assets/constants";
import Heading from "../molecules/Heading"; // Adjust the import path as necessary
import "./cardOpener.css";

const CardOpener = ({ data, index, isActive, setActiveIndex }) => {
  const { Name, Designation, Profile_Image } = data?.attributes || EMPTY_OBJECT;
  const img = Profile_Image?.data?.attributes?.url;
  const name = Name || "Unknown Name";
  const jobTitle = Designation || "Unknown Job Title";

  useEffect(() => {
    if (isActive) {
      setActiveIndex(index); 
    }
  }, [isActive, index, setActiveIndex]);

  const handleMouseOver = () => {
    setActiveIndex(index); 
  };

  return  (
    <div
      className={`grid-item ${isActive ? 'active' : ''}`}
      onMouseOver={handleMouseOver}
    >
      <div className="grid-item-content">
        <img alt="" src={img || 'defaultImagePath'} />
        <h3>{name}</h3>
        <span>{jobTitle}</span>
      </div>
    </div>
  );
};

export default CardOpener;

export function TeamMembersSocialIcons() {
  return (
    <div className="social-links">
      <a href="/">
        <i className="social-sec-12 fab fa-facebook"></i>
      </a>
      <a href="/twitter">
        <i className="social-sec-12 fab fa-twitter"></i>
      </a>
      <a href="/instagram.com">
        <i className="social-sec-12 fab fa-instagram"></i>
      </a>
    </div>
  );
}
