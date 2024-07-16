import {
  generatePopulatedFieldsUrlStr,
  generatePopulatedSearchedFields,
} from "../../helpers/helper";

// export const PROVIDER = "https://skilled-novelty-ca8cc2dd3d.strapiapp.com";
export const PROVIDER = "https://bold-approval-c005df0fb8.strapiapp.com";
export const LOCAL_PROVIDER = "https://bold-approval-c005df0fb8.strapiapp.com";
// "http://localhost:1337";

export const API_URL = {
  ABOUT_US: "/api/about-us",
  AWARDS: "/api/awards",
  BLOGS: "/api/blogs",
  BLOG_SUMMARY_PAGE: "/api/blogs",
  BLOGS_CATEGORIES: "/api/blog-categories",
  BUILDERS: "/api/builders",
  CAREER: "/api/career",
  CITY_NAME: "/api/create-cities",
  CLIENT_SATISFACTION: "/api/client-satisfaction",
  CONTACT_US: "/api/contact-us",
  COMMENTS: "/api/comments",
  DISCLAIMER: "/api/disclaimer",
  EVENT: "/api/events",
  HAPPY_CUSTOMER: "/api/testimonials",
  MEDIA_COVERAGES: "/api/media-coverages",
  POPULATE: "?populate=*",
  PRIVACY_POLICY: "/api/privacy-policy",
  PROPERTIES: "/api/projects",
  SOCIAL_MEDIA_ICONS: "/api/all-social-media-link",
  SUCCESS_FULL_Event: "/successfull-event",
  TEAMS: "/api/teams",
  TERM_AND_CONDITIONS: "/api/terms-and-conditions",
  UPCOMING_EVENT: "/upcoming-event",
};

export const API_FILTER_BY = {
  SLUG: "filters[Slug_Url][$eqi]",
};

export const getFullUrlBySlug = (urlEndPoint, slug) =>
  `${PROVIDER}${urlEndPoint}?${API_FILTER_BY.SLUG}=${slug}&populate=*`;

export const getFullUrl = (urlEndPoint) => `${PROVIDER}${urlEndPoint}`;

export const getFullUrlLocal = (urlEndPoint) =>
  `${LOCAL_PROVIDER}${urlEndPoint}`;

export const generatePopulatedUrl = (urlEndPoint) =>
  `${PROVIDER}${urlEndPoint}?populate=*`;

export const getCareerFullUrl = () =>
  `${PROVIDER}${API_URL.CAREER}?populate[Add_Ethos][populate]=*&populate[Benefits_Perks][populate]=*`;

export const getPopulatedInnerFieldsUrl = (urlEndPoint, fields) => {
  return `${PROVIDER}${urlEndPoint}${generatePopulatedFieldsUrlStr(fields)}`;
};

export const generateCityPropertiesApiUrl = (city) =>
  `${PROVIDER}${API_URL.PROPERTIES}?filters[$and][0][create_city][City_Name][$eq]=${city}&populate=*`;

export const generatePropertiesOnSearchFilter = (city, type, budget) =>
  `${PROVIDER}${API_URL.PROPERTIES}?filters[$and][0][create_city][City_Name][$eq]=${city}&filters[$and][1][sub_category][Title][$eq]=${type}&populate=*`;

// wealth clinic serachBar url
// https://www.wealth-clinic.com/search?searchcity=Gurugram&buildingTypeSale=Commercial&property_budget=0-25l&sterm=noida

// https://bold-approval-c005df0fb8.strapiapp.com/api/projects/2?populate[amenities][populate]=*

export const getPropertyDetailsUrlById = (id) =>
  getFullUrl(`${API_URL?.PROPERTIES}/${id}/${API_URL?.POPULATE}`);

export const getPropertyDetailsUrlByPropertyName = (propertyName) =>
  getFullUrl(
    `${API_URL?.PROPERTIES}?filters[Project_Name][$eqi]=${propertyName}&populate=*`
  );

export const getPropertyPopulatedFieldsUrlById = (fields, id) => {
  return `${PROVIDER}${
    API_URL?.PROPERTIES
  }/${id}${generatePopulatedFieldsUrlStr(fields)}`;
};

// !--------------BLOGS-PAGE-------------------------------

//bold-approval-c005df0fb8.strapiapp.com/api/projects?sort=createdAt:desc&pagination[limit]=10
export const getBlogsByCategories = (CategoriesName) => {
  return `${PROVIDER}${API_URL.BLOGS}?filters[$and][0][blog_categories][Category_Name][$eq]=${CategoriesName}&populate=*`;
};

// export const get

// !--------------GLOBAL-------------------------------
export const generateSortedUrl = ({
  endPoint,
  sortBy: fieldName,
  order = "desc",
  paginationLimit = 10,
}) => {
  return `${PROVIDER}${endPoint}?sort=${fieldName}:${order}&pagination[limit]=${paginationLimit}&populate=*`;
};

// !------------SearchBar Url----------------------------------

export const generateSearchedBarUrl = (
  city,
  types,
  searchField,
  budget,
  categories
) => {
  const filterFields = generatePopulatedSearchedFields(
    city,
    types,
    searchField,
    budget,
    categories
  );
  // console.log(filterFields);
  return `${PROVIDER}${API_URL?.PROPERTIES}?${filterFields}populate=*`;
};

export const getSortQueryByField = ({
  sortBy: FIELD_NAME,
  order,
  dataLimit = 10,
}) => {
  return order
    ? `&sort=${FIELD_NAME}:${order}&pagination[limit]=${dataLimit}`
    : "";
};
