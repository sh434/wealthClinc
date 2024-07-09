import Heading from "../../../globalComponents/molecules/Heading";
import SideContainerCard from "./SideContainerCard";

import CustomLink from "../../../CustomLink";

import useApiFetcher from "../../../../hooks/useApiFetcher";
import { formatIndianCurrency } from "../../../../helpers/helper";
import { generatePropertyDetailsURL } from "./../../../../helpers/getRedirectUrl";
import {
  API_URL,
  generateSortedUrl,
} from "./../../../../assets/constants/apiUrls";
import {
  EMPTY_ARRAY,
  EMPTY_OBJECT,
} from "./../../../../assets/constants/index";
// import { CARDS_DATA } from "../../../../assets/constant";

const RecentProperty = () => {
  const recentPropertySortingParams = {
    endPoint: API_URL.PROPERTIES,
    sortBy: "createdAt",
    order: "desc",
    paginationLimit: 10,
  };

  const url = generateSortedUrl(recentPropertySortingParams);
  const [recentProperties, error, isLoading] = useApiFetcher(url);

  if (error) return <div>{error.message}</div>;
  if (isLoading) return <div>Loading Data...</div>;
  if (!recentProperties) return null;

  const CARDS_DATA =
    recentProperties?.map(sortingPropertyFields) || EMPTY_ARRAY;

  return (
    <div className=" border-dark">
      <div>
        <Heading text={"Recent Property"} fontSize={"1.25rem"} color="#666" />
      </div>

      <div
        className="row m-0  sidebar-Scroller"
        style={{ height: "260px", overflowY: "scroll" }}
      >
        {CARDS_DATA?.map((item) => {
          const { id, city = "", slug } = item || EMPTY_OBJECT;
          return (
            <CustomLink
              to={generatePropertyDetailsURL(city, slug)}
              state={{ propertyId: id }}
              key={id}
              className="del-underLine"
            >
              <SideContainerCard data={item} />
            </CustomLink>
          );
        })}
      </div>
    </div>
  );
};

export default RecentProperty;

const sortingPropertyFields = (data) => {
  const {
    Project_Name,
    Address,
    Min_Price,
    Max_Price,
    Image,
    create_city,
    Slug_Url,
  } = data?.attributes || EMPTY_OBJECT;

  const price = `₹ ${formatIndianCurrency(
    Min_Price
  )} - ₹ ${formatIndianCurrency(Max_Price)}`;

  return {
    id: data?.id,
    name: Project_Name,
    img: Image?.data[0]?.attributes?.url,
    details: Address,
    city: create_city?.data?.attributes?.City_Name,
    price,
    slug: Slug_Url,
  };
};
