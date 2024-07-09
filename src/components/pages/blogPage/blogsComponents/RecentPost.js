import Heading from "../../../globalComponents/molecules/Heading";
import RecentPostSideCard from "./RecentPostSideCard";

import CustomLink from "../../../CustomLink";

import useApiFetcher from "../../../../hooks/useApiFetcher";
import {
  API_URL,
  generateSortedUrl,
} from "../../../../assets/constants/apiUrls";
import { generateBlogDetailsURL } from "../../../../helpers/getRedirectUrl";
import { EMPTY_OBJECT } from "../../../../assets/constants";

const RecentPost = () => {
  const url = generateSortedUrl({
    endPoint: API_URL?.BLOGS,
    sortBy: "createdAt",
  });

  const [recentPost, error, isLoading] = useApiFetcher(url);

  if (error) return <div>{error?.message}</div>;
  if (isLoading) return <div>Loading Data ...</div>;
  if (!recentPost) return null;

  const RECENT_POST = recentPost?.map(sortingRecentPostFields);

  return (
    <div className=" border-dark  mb-5 side-card-container">
      <div>
        <Heading text={"Recent Post"} fontSize={"1.25rem"} color="#666" />
      </div>

      <div
        className="row m-0   sidebar-Scroller"
        style={{ height: "260px", overflowY: "scroll" }}
      >
        {RECENT_POST?.map((item) => (
          <CustomLink
            to={generateBlogDetailsURL(item?.title)}
            state={{ blogId: item?.id }}
            className="del-underLine"
            key={item?.id}
          >
            <RecentPostSideCard data={item} />
          </CustomLink>
        ))}
      </div>
    </div>
  );
};

export default RecentPost;

const sortingRecentPostFields = (item) => {
  const {
    Image,
    Pubish_Date,
    Title = "",
    blog_categories,
    Slug_Url,
  } = item?.attributes || EMPTY_OBJECT;
  const img = Image?.data?.attributes?.url || "";

  return {
    id: item?.id,
    img,
    date: Pubish_Date,
    title: Title,
    category: blog_categories?.data[0]?.attributes?.Category_Name || "",
    blogSlug: Slug_Url,
  };
};
