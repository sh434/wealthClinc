import Heading from "../../../globalComponents/molecules/Heading";
import CardOpener from "../../../globalComponents/cardOpener/CardOpener";
import { CARD_OPENER_DATA } from "../../../../assets/constant";

const TeamMembersCard = () => {
  return (
    <div className="row">
      <div className="col-md-12">
        <Heading
          text="Meet Our Team"
          fontWeight="700"
          color=""
          fontSize=""
          style={{ textAlign: "center", marginTop: "100px" }}
        />
        <Heading
          text="Remember to personalize these templates and prompts with specific details about your team members to create unique and engaging bios!"
          fontWeight="400"
          color="#888"
          fontSize="14px"
          style={{ textAlign: "center", margin: "10px" }}
        />
      </div>

      <div className="col-md-12 d-flex">
        {CARD_OPENER_DATA.map((item, idx) => (
          <CardOpener key={idx} data={item} />
        ))}
      </div>
    </div>
  );
};
export default TeamMembersCard;
