import Heading from "../molecules/Heading";

import CustomLink from "../../CustomLink/CustomLink.js";
import Card from "../card/Card.js";

import useApiFetcher from "../../../hooks/useApiFetcher.js";
import { generatePropertyDetailsURL } from "../../../helpers/getRedirectUrl.js";
import { API_URL, getFullUrl } from "../../../assets/constants/apiUrls.js";
import { EMPTY_OBJECT } from "../../../assets/constants/index.js";

const CardsContainer = () => {
  const urlForProperties = getFullUrl(
    API_URL.PROPERTIES + API_URL.POPULATE + "&pagination[limit]=6"
  );

  const [properties, isLoading, error] = useApiFetcher(urlForProperties);
  if (error) return <div>{error.message}</div>;
  if (!properties && isLoading) return null;

  const CARDS_DATA = properties;

  return (
    <section className="container my-5">
      <div>
        <Heading
          tag="h2"
          text={"Featured Properties"}
          color={"#EF750F"}
          fontWeight={700}
          className="heading"
        />
        <p className="text-wrap gh text-dark">
          Check out some of our most exclusive houses, apartments, townhomes,
          penthouses, and more.
        </p>

        <div className="row g-1">
          {CARDS_DATA?.map((card) => {
            const { cityName, propertyId, Slug_Url } = propertyParams(card);
            return (
              <div
                key={propertyId}
                className="col-lg-4 col-md-6 col-sm-6 col-xs-6"
              >
                <CustomLink
                  to={generatePropertyDetailsURL(cityName, Slug_Url)}
                  className="del-underLine gh text-wrap"
                  state={{ propertyId }}
                >
                  <div>
                    <Card cardData={propertyParams(card)} />
                  </div>
                </CustomLink>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CardsContainer;

const propertyParams = (property) => {
  const {
    Slug_Url,
    Project_Name,
    Min_Price,
    Max_Price,
    Project_Configuration,
    Address,
    Project_Disclaimer,
    Image,
    create_city,
  } = property?.attributes || EMPTY_OBJECT;

  const propertyId = property?.id;
  const cityName = create_city?.data?.attributes?.City_Name;
  const img = Image?.data[0]?.attributes?.url;

  return {
    Slug_Url,
    Project_Name,
    Min_Price,
    Max_Price,
    Project_Configuration,
    Address,
    Project_Disclaimer,
    img,
    propertyId,
    cityName,
  };
};
