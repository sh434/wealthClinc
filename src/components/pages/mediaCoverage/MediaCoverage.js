import MasonryCards from "./../../masonryCards/MasonryCards";

import useApiFetcher from "./../../../hooks/useApiFetcher";
import useWindowSize from "./../../../hooks/useWindowSize";
import { API_URL, getFullUrl } from "../../../assets/constants/apiUrls";
// import { MEDIA_COVERAGE } from "../../../assets/constant/mediaCoverage";

const url = getFullUrl(`${API_URL.MEDIA_COVERAGES}?populate=*`);

const MediaCoverage = () => {
  const [isMobileSize] = useWindowSize();
  const responsivePadding = isMobileSize < 571 ? "" : "p-5";

  const [media, error, isLoading] = useApiFetcher(url);
  if (error) return <div>{error.message}</div>;
  if (isLoading) return null;

  const MEDIA_COVERAGE1 = media;

  return (
    <div className={`container-fluid my-5 ${responsivePadding}`}>
      <div className="row">
        {/* {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, idx) => (
          <MediaCard key={idx} />
        ))} */}
        <MasonryCards data={MEDIA_COVERAGE1} imgType="img3" />
      </div>
    </div>
  );
};

export default MediaCoverage;
