import MetaTagHelmet from "../../globalComponents/MetaTagHelmet/MetaTagHelmet";
import TextBg from "../../globalComponents/molecules/TextBg";
import LifeAtWc from "./CareerComponents/LifeAtWc";
import Ethos from "./CareerComponents/Ethos";
import PerkAndBeneFits from "./CareerComponents/PerkAndBeneFits";
import Position from "./CareerComponents/Position";
// import CareerForm from "./CareerComponents/CareerForm";
import useApiFetcher from "./../../../hooks/useApiFetcher";

import {
  API_URL,
  getPopulatedInnerFieldsUrl,
} from "../../../assets/constants/apiUrls";
import { EMPTY_ARRAY } from "../../../assets/constants";

const url = getPopulatedInnerFieldsUrl(API_URL.CAREER, [
  "Career_Image",
  "Add_Ethos",
  "Benefits_Perks",
  "career_positions",
]);

export const Career = () => {
  const [career, error, isLoading] = useApiFetcher(url);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  const {
    Meta_Title,
    Meta_Link,
    Meta_Description,
    Career_Heading,
    Career_Description = EMPTY_ARRAY,
    Ethos_Heading,
    Ethos_Description,
    Add_Ethos,
    Benefits_Perks,
    Benefits_Perks_Heading,
    Benefits_And_Perks_Description,
    career_positions,
  } = career?.attributes || "";

  return (
    <div>
      <MetaTagHelmet
        title={Meta_Title}
        link={Meta_Link}
        description={Meta_Description}
      />
      {/* <CareerForm /> */}
      <TextBg text={Career_Heading} fontWeight={900} fontSize="6rem" />
      <LifeAtWc data={Career_Description} />
      <Ethos data={{ Ethos_Heading, Ethos_Description, Add_Ethos }} />
      <PerkAndBeneFits
        data={{
          Benefits_Perks,
          Benefits_Perks_Heading,
          Benefits_And_Perks_Description,
        }}
      />
      <Position data={{ career_positions }} />
    </div>
  );
};
export default Career;
