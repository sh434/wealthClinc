import TextBg from "../../../globalComponents/molecules/TextBg";
import Heading from "../../../globalComponents/molecules/Heading";
import PerkCard from "./PerkCard";

import "./perkAndBeneFits.css";

const PerkAndBeneFits = ({ data }) => {
  const {
    Benefits_Perks,
    Benefits_Perks_Heading,
    Benefits_And_Perks_Description,
  } = data;

  return (
    <div className="container">
      <TextBg text={Benefits_Perks_Heading} fontWeight={900} fontSize="4rem" />
      <div className="row center-item">
        <Heading
          className="text-container-description col-md-8"
          text={Benefits_And_Perks_Description}
          fontSize="16px"
          color="#000"
        />
      </div>
      <div className="row">
        {Benefits_Perks?.map((item) => (
          <PerkCard key={item?.id} data={item} />
        ))}
      </div>
    </div>
  );
};
export default PerkAndBeneFits;
