import Heading from "../../../globalComponents/molecules/Heading";

// import { Amenities_Data_1 } from "../../../../assets/constants/properties";
import { EMPTY_OBJECT } from "../../../../assets/constants";
import "./amenities.css";
// import useApiFetcher from "./../../../../hooks/useApiFetcher";

// const LOGO =
//   "https://static.squareyards.com/assets/images/svg/amenities/safety/am-ico-cctvvide-active.svg";

const Amenities = ({ data }) => {
  // const Amenities_Data1 = data?.amenities?.data;
  // const { Title, amenity_category } = Amenities_Data1[0]?.attributes?.Title;

  // const [amenities_Data2, error, isLoading] = useApiFetcher(
  //   "https://bold-approval-c005df0fb8.strapiapp.com/api/amenities?populate=*"
  // );
  // if (error) <div>{error.message}</div>;
  // if (!amenities_Data2 && isLoading) return null;

  // const Amenities_Data1 = getAmenitiesData(amenities_Data2);

  // console.log("====", Amenities_Data1);

  const AMENITIES_ARRAY = data?.amenities?.data;

  const extractAmenities = AMENITIES_ARRAY?.reduce((acc, amenities) => {
    const { Category_Name = "" } =
      amenities?.attributes?.amenity_category?.data?.attributes || EMPTY_OBJECT;

    if (!acc[Category_Name]) acc[Category_Name] = []; //{"Category_Name":[]}
    acc[Category_Name].push(amenities);
    return acc;
  }, {});

  const Amenities_Data = Object.entries(extractAmenities)?.map(
    ([mainTitle, categories]) => {
      const subCategories = categories?.map((item) => {
        const { Title = "", Icon } = item?.attributes || EMPTY_OBJECT;

        return {
          title: Title,
          img: Icon?.data?.attributes?.url,
        };
      });

      const mainCategoryImg =
        categories[0]?.attributes?.amenity_category?.data?.attributes?.Image
          ?.data?.attributes?.url;

      return {
        title: mainTitle,
        img: mainCategoryImg,
        categories: subCategories,
      };
    }
  );

  return (
    <div className="container">
      {Amenities_Data?.map((ele, idx) => {
        return (
          <div className="row" key={idx}>
            <div className="col-md-3 center-item border amenitiesCategoryHeader">
              <AmenitiesBox title={ele?.title} img={ele?.img} />
            </div>
            <div className="col-md-9 border ">
              <AmenitiesDetails data={ele?.categories} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Amenities;

function AmenitiesBox({ title, img }) {
  return (
    <div className="amenitiesBox">
      {/* Safety */}
      <div className="amenitiesImgBox">
        <img src={img} alt="" />
      </div>
      <Heading
        fontSize="0.75rem"
        fontWeight="700"
        text={title}
        // className="world"
      />
    </div>
  );
}

function AmenitiesDetails({ data }) {
  // console.log(data);
  return (
    <div className="row amenitiesDetailsBox">
      {data.map((item, idx) => {
        return (
          <div className=" col-md-4 p-2 amenitiesDetailsImgBox" key={idx}>
            <img src={item?.img} alt="" className="col-md-2" />
            <div className="col-md-10">{item?.title}</div>
          </div>
        );
      })}
    </div>
  );
}

// export function getAmenitiesData(amenitiesData) {
//   return amenitiesData?.map((item) => {
//     const Title = item?.attributes?.Title;
//     const Img = item?.attributes?.Icon;
//     const categories =
//       item?.attributes?.amenity_category?.data?.attributes?.Category_Name;
//     return {
//       title: Title,
//       img: Img,
//       categories: [{ title: categories }],
//     };
//   });
// }
