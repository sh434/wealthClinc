import axios from 'axios';
import { getFullUrlLocal } from '../assets/constants/apiUrls'; // Import your API URL utility function

export const fetchViewData = async (projectId) => {
  try {
    const fullUrl = getFullUrlLocal(`/api/views?filters[projectId][$eq]=${projectId}`);
    const response = await axios.get(fullUrl);
    const ipAddressesArray = response.data.data?.[0]?.attributes?.ipAddress || [];
    const flattenedIpArray = ipAddressesArray.flat();
    const cleanedIpArray = flattenedIpArray.filter(ip => ip.trim() !== "");
    return cleanedIpArray;
  } catch (error) {
    console.error("Failed to fetch view data:", error.response ? error.response.data : error.message);
    return [];
  }
};
