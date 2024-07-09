import { useState, useEffect, createElement } from "react";

import SectionWrapper from "../../../globalComponents/SectionWrapper";
import Amenities from "../propertyDetailsComponent/Amenities";
import Brochure from "../propertyDetailsComponent/Brochure";
import FloorPlans from "../propertyDetailsComponent/FloorPlans";
import ContactExpertForm from "../../../contactExpertForm/ContactExpertForm";
import Overview from "../propertyDetailsComponent/Overview";
import PrizeList from "../propertyDetailsComponent/PrizeList";
import AboutBuilder from "../propertyDetailsComponent/AboutBuilder";
import Faqs from "../propertyDetailsComponent/Faqs";
import LocationMap from "../propertyDetailsComponent/LocationMap";

import useApiFetcher from "../../../../hooks/useApiFetcher";
import { getPropertyPopulatedFieldsUrlById } from "../../../../assets/constants/apiUrls";
import "./propertyMenuDetails.css";

const PropertyDetailsButtons = [
  "Overview",
  "Prize List",
  "Floor Plans",
  "Brochure",
  "Amenities",
  "Locations & Landmarks",
  "About Builder",
  "Faq's",
];

const componentMap = {
  Overview: Overview,
  Amenities: Amenities,
  Brochure: Brochure,
  "Floor Plans": FloorPlans,
  "Prize List": PrizeList,
  "About Builder": AboutBuilder,
  "Faq's": Faqs,
  "Locations & Landmarks": LocationMap,
};

const PropertyMenuDetails = ({ projectId }) => {
  const url =
    getPropertyPopulatedFieldsUrlById(
      [
        "builder",
        "Floor_Plan",
        "Add_Price_List",
        "Specifications",
        "Location_Map",
        "Brochures",
        "amenities][populate][amenity_category",
        "amenities",
      ],
      projectId
    ) + "populate[amenities][populate][Icon]=*";

  const [activeComponent, setActiveComponent] = useState("Overview");
  // const GetComponent = componentMap[activeComponent];
  const [propertyDetails, error, isLoading] = useApiFetcher(url);

  useEffect(() => {
    setActiveComponent("Overview");
  }, []);

  const handleEvent = (componentName) => {
    setActiveComponent(componentName);
  };

  if (error) return <div>{error?.message}</div>;
  if (isLoading) return <div>Loading...</div>;
  if (!propertyDetails) return <div>No Data</div>;

  const description = propertyDetails?.attributes;

  return (
    <div className="property-menu-container">
      <div className="propertyMenuDetails">
        {PropertyDetailsButtons.map((buttonName, idx) => (
          <div
            key={idx}
            onClick={() => handleEvent(buttonName)}
            className={`menu-button ${
              activeComponent === buttonName ? "active" : ""
            }`}
          >
            {buttonName}
          </div>
        ))}
      </div>

      <div className="d-flex content-container">
        {/* <div className=" propertyMenuDetails-content py-4 px-5 newBoxShadow">
          {GetComponent && (
            <GetComponent data={description} projectId={propertyId} />
          )}
        </div> */}

        <div className="row">
          <div className="col-12 col-md-8 propertyMenuDetails-content py-4 px-5 newBoxShadow">
            {PropertyDetailsButtons.map((buttonName, idx) => (
              <SectionWrapper
                key={idx}
                title={buttonName}
                isVisible={activeComponent === buttonName}
              >
                {createElement(componentMap[buttonName], {
                  data: description,
                  projectId: projectId,
                })}
              </SectionWrapper>
            ))}
          </div>

          <div className="col-12 col-lg-4 center-item">
            <ContactExpertForm className="contactExpertFormWidth p-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyMenuDetails;
