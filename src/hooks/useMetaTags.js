import { useEffect, useState } from "react";

import useApiFetcher from "./useApiFetcher";
import { getFullUrl } from "../assets/constants/apiUrls";
import { INITIAL_META_TAG } from "../assets/constants/metaTags";

const useMetaTags = (urlEndPoint) => {
  const [initialMetaTag, setInitialMetaTag] = useState(INITIAL_META_TAG);
  const [metaTagData] = useApiFetcher(getFullUrl(urlEndPoint));

  useEffect(() => {
    if (metaTagData) {
      const { Meta_Description, Meta_Link, Meta_Title } =
        metaTagData?.attributes || "";
      const updateMetaTag = {
        title: Meta_Title,
        description: Meta_Description,
        link: Meta_Link,
      };
      setInitialMetaTag(updateMetaTag);
    }
  }, [metaTagData]);

  return initialMetaTag;
};

export default useMetaTags;
