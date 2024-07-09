import { useParams } from "react-router-dom";

import PropertyDetailsCard from "./propertyDetailsComponent/PropertyDetailsCard";
import PropertyMenuDetails from "./propertyMenu/PropertyMenuDetails";
import MetaTagHelmet from "../../globalComponents/MetaTagHelmet/MetaTagHelmet";
import Header from "../../globalComponents/header/Header";

import useApiFetcher from "../../../hooks/useApiFetcher";
import useScrollOnTop from "../../../hooks/useScrollOnTop";
import {
  API_URL,
  getFullUrlBySlug,
  // getPropertyDetailsUrlById,
  // getPropertyDetailsUrlByPropertyName,
} from "../../../assets/constants/apiUrls";
// import { slugToText } from "../../../services/slug";
import { EMPTY_OBJECT } from "../../../assets/constants";
import "./propertyDetails.css";

const PropertyDetails = () => {
  useScrollOnTop(0);
  const { propertyName: projectName } = useParams();

  // const location = useLocation();
  // const { propertyId } = location?.state;
  // const url = getPropertyDetailsUrlByPropertyName(slugToText(projectName));
  // const [propertyDetails, error, isLoading] = useApiFetcher(url);

  const [propertyDetails, error, isLoading] = useApiFetcher(
    getFullUrlBySlug(API_URL?.PROPERTIES, projectName)
  );

  if (error) return <div>{error?.message}</div>;
  if (isLoading) return <div>Loading...</div>;
  if (!propertyDetails) return <div>No Data</div>;

  const propertyParams = propertyDetailsParam(propertyDetails[0]);

  const {
    Meta_Title = "",
    Meta_Description = "",
    Meta_Link = "",
    projectId,
  } = propertyParams || EMPTY_OBJECT;

  return (
    <section className="container-fluid">
      <MetaTagHelmet
        title={Meta_Title}
        description={Meta_Description}
        Meta_Link={Meta_Link}
      />
      <Header className="headerStyle" />
      <PropertyDetailsCard propertyDetail={propertyParams} />
      <div className="row PropertyMenuDetails-container  px-5">
        <div className="col-lg-12 mb-5 property-menu-container py-3">
          <PropertyMenuDetails projectId={projectId} />
        </div>
      </div>
    </section>
  );
};

export default PropertyDetails;

export function propertyDetailsParam(propertyDetails) {
  const {
    Project_Name = "",
    Min_Price = "",
    Max_Price = "",
    Project_Configuration,
    Address = "",
    Project_Disclaimer,
    Image,
    Meta_Title = "",
    Meta_Description,
    Meta_Keyword = "",
    Meta_Link = "",
  } = propertyDetails?.attributes || EMPTY_OBJECT;

  return {
    Project_Name,
    Min_Price,
    Max_Price,
    Project_Configuration,
    Address,
    Project_Disclaimer,
    Image,
    projectId: propertyDetails?.id,
    Meta_Title,
    Meta_Description,
    Meta_Keyword,
    Meta_Link,
  };
}
