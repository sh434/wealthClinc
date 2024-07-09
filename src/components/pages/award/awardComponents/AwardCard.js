import React from 'react';
import "./awardsCard.css";

const AwardCard = ({ data }) => {
  const { Award_Title, Award_Image } = data?.attributes;
  const img = Award_Image?.data?.attributes?.url;

  return (
    <div className="award-card col-md-4">
      <div className="card-image">
        <img src={img} alt={Award_Title} />
        <div className="overlay">
          <div className="card__head">{Award_Title}</div>
        </div>
      </div>
    </div>
  );
};

export default AwardCard;
