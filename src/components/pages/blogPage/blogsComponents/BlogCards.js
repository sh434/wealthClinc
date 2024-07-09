import { useLocation } from "react-router-dom";
import BlogCard from "./BlogCard";

import useApiFetcher from "../../../../hooks/useApiFetcher";
import {
  API_URL,
  getBlogsByCategories,
  getFullUrl,
} from "../../../../assets/constants/apiUrls";

export const BlogCards = () => {
  const { state } = useLocation();
  const categoriesName = state?.blogsCategories;

  const url = categoriesName
    ? getBlogsByCategories(categoriesName)
    : getFullUrl(`${API_URL.BLOGS}${API_URL.POPULATE}`);

  const [blogs, error, isLoading] = useApiFetcher(url);

  if (error) return <div>{error.message}</div>;
  if (isLoading || !blogs) return null;

  const blogsData = [...blogs];

  return (
    <div className="row">
      {blogsData?.map((blogInfo, idx) => (
        <BlogCard key={idx} blogInfo={blogInfo} />
      ))}
    </div>
  );
};

export default BlogCards;
