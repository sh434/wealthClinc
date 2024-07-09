import TextBg from "../../globalComponents/molecules/TextBg";

import useApiFetcher from "../../../hooks/useApiFetcher";
import { API_URL, getFullUrl } from "../../../assets/constants/apiUrls";
// import { CUSTOMER_VIDEO_URL } from "../../../assets/constant/happyCustomer";
import RecentPost from "../blogPage/blogsComponents/RecentPost";
import RecentProperty from "../blogPage/blogsComponents/RecentProperty";
import "./happyCustomer.css";

const url = getFullUrl(`${API_URL.HAPPY_CUSTOMER}${API_URL.POPULATE}`);

const HappyCustomer = () => {
  const [happyCustomer, error, isLoading] = useApiFetcher(url);
  if (error) return <div>{error.message}</div>;
  if (isLoading) return null;
  const CUSTOMER_VIDEO_URL = happyCustomer;
  const ytUrl = happyCustomer[0]?.attributes?.YouTube_link;

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8">
            <TextBg text={"ALL Reviews"} fontWeight={900} fontSize="4rem" />
          </div>
          <div className="col-md-4"></div>
        </div>
        <div className="row">
          <div class="col-lg-8 col-md-8">
            <div className="carousel">
              <div>
                <iframe
                  title="YouTube Video"
                  src={ytUrl}
                  allowFullScreen
                  name="slider1"
                />
              </div>
              <span className="scroll_x">
                {CUSTOMER_VIDEO_URL?.map((item, idx) => (
                  <Testimonials key={idx} item={item} />
                ))}
              </span>
            </div>
          </div>
          <div className="col-md-1"></div>
          <div className="col-lg-3 col-md-3">
            <RecentPost />
            <RecentProperty />
          </div>
        </div>
      </div>
    </>
  );
};

export default HappyCustomer;

function Testimonials({ item }) {
  const { YouTube_link, YouTube_Thumbnail } = item?.attributes;
  const { url } = YouTube_Thumbnail?.data?.attributes;
  const [url1, imgSrc] = [YouTube_link, url];
  return (
    <>
      <a href={url1} target="slider1">
        <img alt="" src={imgSrc} />
      </a>
    </>
  );
}
