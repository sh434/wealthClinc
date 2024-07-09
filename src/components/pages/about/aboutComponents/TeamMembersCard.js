import React, { useState } from 'react';
import Heading from "../../../globalComponents/molecules/Heading";
import CardOpener from "../../../globalComponents/cardOpener/CardOpener";
import useApiFetcher from "../../../../hooks/useApiFetcher";
import { API_URL, getFullUrl } from "../../../../assets/constants/apiUrls";

const TeamMembersCard = () => {
  const [activeIndex, setActiveIndex] = useState(1); // Set the second card (index 1) as active initially
  const url = getFullUrl(`${API_URL.TEAMS}${API_URL.POPULATE}`);
  const [teams, error, isLoading] = useApiFetcher(url);

  if (error) return <div>{error.message}</div>;
  if (isLoading) return null;

  const CARD_OPENER_DATA = teams;

  return (
    <section className=" mb-5">
      <header>
        <h2 className="p-3 text-center" style={{color:"#f37535"}}>Our Team ___</h2>
      </header>

      <div className="grid-container">
        {CARD_OPENER_DATA.map((item, idx) => (
          <CardOpener 
            key={idx} 
            data={item} 
            index={idx} 
            isActive={idx === activeIndex} 
            setActiveIndex={setActiveIndex} 
          />
        ))}
      </div>
    </section>
  );
};

export default TeamMembersCard;
