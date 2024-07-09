const URL = {
  ABOUT: "/about",
  AWARD: "/award",
  BLOGS: "/blogs",
  BLOG_SUMMARY_PAGE: "/blogs/detail/:blogName",
  CAREER: "/career",
  CITY: "/:city",
  CONTACT_US: "/contact-us",
  DISCLAIMER: "/disclaimer",
  EVENT: "/event",
  // EVENT: "/event",
  EVENT_STATUS_AND_NAME: "event/:eventStatus/EventName",
  FIND_PROPERTY: "/properties",
  GALLERY: "/wc-gallery",
  HOME: "/",
  HAPPY_CUSTOMER: "/happy-customer",
  MEDIA_COVERAGE: "/mediacoverage",
  OUR_TEAM: "/our-team",
  PROPERTY_DETAILS: "/:cityName/:propertyName",
  PRIVACY_POLICY: "/privacy-policy",
  SUCCESS_FULL_Event: "/event/successfull-event",
  SEARCH: "/search",
  TERMS_AND_CONDITIONS: "/terms-and-conditions",
  UPCOMING_EVENT: "/event/upcoming-event",
  EMI_CALCULATOR: "/emi-calculator",
};

export const URL_PARAMS = {
  PROPERTY_TYPE: "property-type",
  CATEGORY: "category",
};

export default URL;

export const getPropertiesByCity = (cityName) => `/${cityName}`;

export const getPropertyDetails = (cityName, propertyName) =>
  `/${cityName}/${propertyName}`;

export const getBlogDetails = (propertyName) =>
  `${URL.BLOG_SUMMARY_PAGE}/${propertyName}`;

export const getUpcomingEvent = () => `/event/upcoming-event`;

export const getSuccessFullEvent = () => `/event/successfull-event`;

export const getEventSummary = (eventStatus) =>
  `/event/${eventStatus}/EventName`;
