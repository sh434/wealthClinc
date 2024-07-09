import { EMPTY_OBJECT } from "../../../../assets/constants";
import Heading from "../../../globalComponents/molecules/Heading";

import "./common.css";

const AboutBuilder = ({ data }) => {
  if (!data?.builder?.data) return <div>No Details About Builder</div>;
  const {
    Builder_Experience,
    Builder_Disclaimer,
    Builder_Image,
    Total_Projects_of_Builder,
  } = data?.builder?.data?.attributes;
  const { url, alternativeText } =
    Builder_Image?.data?.attributes || EMPTY_OBJECT;

  return (
    <div className="row">
      <div className="col-md-11">
        <div className="row p-3">
          <div className="col-md-4 p-0 m-0">
            <img
              alt={alternativeText || ""}
              src={url} //"https://www.wealth-clinic.com/profile_media/84/36561706079320.png"
            />
          </div>
          <div className="col-md-4 fw-bold p-3">
            Total Projects {Total_Projects_of_Builder}
          </div>
          <div className="col-md-4 fw-bold p-3">
            Experience {Builder_Experience} Years
          </div>
        </div>

        <Heading
          fontSize="1rem"
          color="#777"
          showLine="5"
          lineHeight="2"
          className="my-3 aboutBuilder-Headline"
          text={Builder_Disclaimer}
        />
      </div>
    </div>
  );
};

export default AboutBuilder;
