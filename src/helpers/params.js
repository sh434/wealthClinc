import { EMPTY_OBJECT } from "../assets/constants";
import { formatIndianCurrency } from "./helper";

export const propertyParams = (property) => {
  const {
    Project_Name,
    Min_Price,
    Max_Price,
    Project_Configuration,
    Address,
    Project_Disclaimer,
    Image,
    Priority,
  } = property?.attributes;
  const img = Image?.data[0]?.attributes?.url || EMPTY_OBJECT;
  // const [projectName,address,projectDisclaimer] = []
  const propertyId = property?.id;
  const configurations = Project_Configuration.split(" | ");
  const maxPrice = formatIndianCurrency(Max_Price);
  const minPrice = formatIndianCurrency(Min_Price);

  return {
    Project_Name,
    Min_Price,
    Max_Price,
    Project_Configuration,
    Address,
    Project_Disclaimer,
    Image,
    configurations,
    propertyId,
    maxPrice,
    minPrice,
    img,
    Priority,
  };
};
