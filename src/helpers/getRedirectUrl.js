export const generateEventDetailsURL = (eventStatus) =>
  `/event/${eventStatus}/EventName`;

export const generateBlogDetailsURL = (blogName) => `/blogs/detail/${blogName}`;

export const generatePropertyDetailsURL = (cityName, propertyName) =>
  `/${cityName}/${propertyName}/`;
