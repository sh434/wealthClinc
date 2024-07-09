import { COMMERCIAL_PROPERTY, RESIDENTIAL_PROPERTY } from "../assets/IMG";
import { EMPTY_ARRAY } from "../assets/constants";
import { SORTED_BY_PROPERTY_TYPE } from "../assets/constants/filters";

export const getPropertyType = (btnValue) => {
  if (btnValue === SORTED_BY_PROPERTY_TYPE.COMMERCIAL) {
    return COMMERCIAL_PROPERTY;
  }
  if (btnValue === SORTED_BY_PROPERTY_TYPE.RESIDENTIAL) {
    return RESIDENTIAL_PROPERTY;
  }
  return EMPTY_ARRAY;
};
