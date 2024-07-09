import axios from "axios";

export async function getMethod(url) {
  try {
    const responseData = await axios.get(url);
    return responseData.data;
  } catch (err) {
    return err;
  }
}
