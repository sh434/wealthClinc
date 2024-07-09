import { Link } from "react-router-dom";
import {
  API_URL,
  generateSortedUrl,
} from "../../../../assets/constants/apiUrls";
import Heading from "../../../globalComponents/molecules/Heading";

import useApiFetcher from "./../../../../hooks/useApiFetcher";
import "./sideContainer.css";

export const BLOGS_CATEGORIES = [
  {
    title: "Property Advice (30) ",
  },

  {
    title: "Home Decoration (10) ",
  },

  {
    title: "Vastu (8) ",
  },

  {
    title: "Delhi NCR (10)",
  },

  {
    title: "Investment Guide (19)",
  },
  {
    title: "Real Estate News (56)",
  },
];

const Categories = () => {
  const url = generateSortedUrl({
    endPoint: API_URL.BLOGS_CATEGORIES,
    sortBy: "Category_Name",
  });

  const [categories, error, isLoading] = useApiFetcher(url);

  if (error) return <div>{error?.message}</div>;
  if (isLoading) return <div>Data Loading...</div>;
  if (!categories) return null;

  const BLOGS_CATEGORIES = categories?.map((ele) => ({
    title: ele?.attributes?.Category_Name,
    id: ele?.id,
  }));

  return (
    <div className="border-dark mb-5 mt-3">
      <div>
        <Heading
          text={"Categories"}
          fontSize={"1.25rem"}
          color="#666"
          lineHeight="2.2"
        />
      </div>
      {BLOGS_CATEGORIES?.map((title, idx) => {
        return (
          <div className="categories-container" key={idx}>
            <Link
              to={"/blogs"}
              state={{ blogsCategories: title?.title }}
              className="del-underLine d-flex vertical-center"
            >
              <Heading
                text={title?.title}
                fontSize="1rem"
                color="#555"
                className="categories-heading"
              />
              <BlogsCategoriesCounter blogCategories={title?.title} />
            </Link>
          </div>
        );
      })}
    </div>
  );
};
export default Categories;

function BlogsCategoriesCounter({ blogCategories }) {
  const newUrl = (name) =>
    `https://bold-approval-c005df0fb8.strapiapp.com/api/blogs?filters[$and][0][blog_categories][Category_Name][$eq]=${name}&pagination[limit]=160`;

  const [blogs, error, isLoading] = useApiFetcher(newUrl(blogCategories));
  if (error) return <div>{error.message}</div>;
  if (!blogs && isLoading) return null;
  return <div>({blogs.length})</div>;
}
