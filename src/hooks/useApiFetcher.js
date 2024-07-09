import { useEffect, useState } from "react";
import { getMethod } from "../services";

// const useApiFetcher = (url, cb) => {
//   useEffect(() => {
//     getMethod(url)
//       .then((res) => cb(res))
//       .catch((err) => cb(err));
//   }, [url, cb]);
// };

const useApiFetcher = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      setError(null);
      try {
        const responseData = await getMethod(url);
        return setData(responseData.data);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return [data, error, isLoading];
};

export default useApiFetcher;
