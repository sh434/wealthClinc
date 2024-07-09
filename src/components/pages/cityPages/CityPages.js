import { useEffect, useState } from "react";
import {
  Link,
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";

// import MetaTagHelmet from "../../globalComponents/MetaTagHelmet/MetaTagHelmet";
import BreadCrumb from "../../globalComponents/BreadCrumb/BreadCrumb";
import CustomDropDown from "./../../globalComponents/customDropDown/CustomDropDown";
import Heading from "../../globalComponents/molecules/Heading";
import PropertyForm from "./propertyCard/PropertyForm";
import { PropertyCard } from "./propertyCard/PropertyCard";
import MetaTagHelmet from "../../globalComponents/MetaTagHelmet/MetaTagHelmet";

import useApiFetcher from "./../../../hooks/useApiFetcher";
// import useMetaTags from "../../../hooks/useMetaTags";
import { slugToText } from "../../../services/slug";
import { getPropertyWithPriority } from "./propertyCard/property.services";


import {
  getFullUrl,
  generateSearchedBarUrl,
  getSortQueryByField,
  API_URL,
} from "../../../assets/constants/apiUrls";
import useDeviceSize from "../../../hooks/useDeviceSize";
import URL, { URL_PARAMS } from "../../../assets/constants/url";
import { EMPTY_ARRAY, EMPTY_OBJECT } from "./../../../assets/constants/index";
import { SORTED_BY_OPTIONS } from "../../../assets/constants/filters";
import useMetaTagsInArray from "../../../hooks/useMetaTagsInArray";
import "./cityPages.css";

const SORTED_BTN_LABELS = [
  SORTED_BY_OPTIONS.LOW_PRICE,
  SORTED_BY_OPTIONS.HIGH_PRICE,
  SORTED_BY_OPTIONS.A_TO_Z,
];

// const urlForAllProperties = getFullUrl(API_URL.PROPERTIES + API_URL.POPULATE);

const CityPages = ({ setCityName }) => {
  const isMobile = useDeviceSize();
  let { city: selectedCity } = useParams();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const category = searchParams.get(URL_PARAMS.CATEGORY);
  const propertyType = searchParams.get(URL_PARAMS.PROPERTY_TYPE);

  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [order, setOrder] = useState(null);
  const [apiUrl, setApiUrl] = useState(null);

  const [allCities] = useApiFetcher(getFullUrl(API_URL.CITY_NAME));

  const { title, description, link } = useMetaTagsInArray(
    `/api/create-cities?filters[City_Name][$eqi]=${selectedCity}`
  );

  useEffect(() => {
    if (allCities && selectedCity) {
      const isCityExist = allCities?.find(
        (city) =>
          city?.attributes?.City_Name.toLowerCase() ===
          slugToText(selectedCity.toLowerCase())
      );
      // setInitialMeta("city exist");
      setCityName(selectedCity);

      if (!isCityExist) {
        navigate("/404");
      }
    }
  }, [allCities, selectedCity, navigate, setCityName]);

  useEffect(() => {
    const { pathname, state } = location;
    let initialApiUrl;

    if (pathname === URL.SEARCH && state) {
      const { cityName, selectType, searchBarValue, budget } =
        state || EMPTY_OBJECT;

      initialApiUrl = generateSearchedBarUrl(
        cityName || EMPTY_ARRAY,
        selectType || EMPTY_ARRAY,
        searchBarValue || EMPTY_OBJECT,
        budget || EMPTY_OBJECT
      );
    }

    // if (pathname.includes(URL.SEARCH) && propertyName) {
    //   initialApiUrl = generateSearchedBarUrl(EMPTY_ARRAY, [propertyName]);
    // }
    if (selectedCity && selectedCity !== pathname.includes(URL.SEARCH)) {
      initialApiUrl = generateSearchedBarUrl([slugToText(selectedCity)]);
    }

    if (searchParams && category) {
      initialApiUrl = getFullUrl(
        `/api/projects?filters[$and][0][property_type][Title][$eqi]=${slugToText(
          category
        )}&populate=*`
      );
    }

    if (searchParams && propertyType) {
      initialApiUrl = generateSearchedBarUrl(EMPTY_ARRAY, [
        slugToText(propertyType),
      ]);
    }

    setApiUrl(initialApiUrl);
  }, [selectedCity, location, category, searchParams, propertyType]);

  useEffect(() => {
    if (order) {
      let sortedParams;

      if (order === SORTED_BY_OPTIONS.LOW_PRICE) {
        sortedParams = { sortBy: "Min_Price", order: "ASC" };
      }
      if (order === SORTED_BY_OPTIONS.HIGH_PRICE) {
        sortedParams = { sortBy: "Min_Price", order: "DESC" };
      }

      if (order === SORTED_BY_OPTIONS.A_TO_Z) {
        sortedParams = { sortBy: "Project_Name", order: "ASC" };
      }

      const sortedField = getSortQueryByField(sortedParams);

      setApiUrl((prevUrl) => {
        return `${prevUrl}${sortedField}`;
      });
    }
  }, [order]);

  const [properties, error, isLoading] = useApiFetcher(apiUrl);
  if (isLoading) return <div>Loading....</div>;
  if (error) return <div>{error?.message}</div>;
  if (!properties) return <div>No Data</div>;

  const priorityProperty = order
    ? properties
    : getPropertyWithPriority(properties);

  return (
    <>
      <MetaTagHelmet title={title} description={description} link={link} />
      <BreadCrumb />
      <section className="container-fluid px-5">
        <div className="col-md-7 ">
          <div className="row">
            <div className="col-md-2 border">
              <CustomDropDown
                text={"SORT BY"}
                selectType={"enabled"}
                data={SORTED_BTN_LABELS}
                styleMenu={{ height: "104px", width: "180px" }}
                children={<DropdownBtn value={setOrder} />}
                isDropDownOpen={open}
                setIsDropDownOpen={() => setOpen(!open)}
              />
            </div>

            <div className="col-md-2"></div>

            {selectedCity &&
              selectedCity !== "properties" &&
              selectedCity !== URL.SEARCH && (
                <div className="col-md-4 center-item">
                  <Heading
                    tag="h2"
                    text={`New Projects in ${selectedCity}`}
                    className="projectCount text-capitalize"
                    fontSize="1.25rem"
                  />
                </div>
              )}

            {/* {city === undefined || (city === null && null)} */}
            <div className="col-md-3 center-item projectCount">
              Showing Total Projects {properties?.length}
            </div>
          </div>
        </div>
        <div className="row center-item">
          {properties.length ? (
            <div className=" col-lg-9 col-md-12  col-sm-12 col-xs-12  propertyCardsContainer">
              {priorityProperty?.map((property) => (
                <PropertyCard
                  key={property?.id}
                  cityName={selectedCity}
                  propertyInfo={property}
                />
              ))}
            </div>
          ) : (
            <Heading
              className="col-lg-9 col-md-12  col-sm-12 col-xs-12 center-item h-100"
              text="Sorry, no results found!"
              lineHeight="4rem"
              color="#ef750f"
              fontSize={isMobile ? "1.5rem" : "2rem"}
            />
          )}

          <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12">
            <PropertyForm className={"p-2"} />
          </div>
        </div>
      </section>
    </>
  );
};

export default CityPages;

function DropdownBtn({ text, value: setValue }) {
  const { pathname, search, state } = useLocation();
  return (
    <Link
      to={pathname + search}
      state={state}
      onClick={() => setValue(text)}
      className="sorted-Filter del-underLine"
    >
      {text}
    </Link>
  );
}
