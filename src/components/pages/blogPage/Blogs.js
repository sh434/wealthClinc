import { useLocation } from "react-router-dom";

import Heading from "../../globalComponents/molecules/Heading";
import MetaTagHelmet from "../../globalComponents/MetaTagHelmet/MetaTagHelmet";
import Categories from "./blogsComponents/CategoriesPost";
import RecentPost from "./blogsComponents/RecentPost";
import RecentProperty from "./blogsComponents/RecentProperty";

import useMetaTags from "../../../hooks/useMetaTags";
import "./blogPage.css";

const Blog = ({ children }) => {
  // const { blogName } = useParams();
  const { state } = useLocation();
  const categoriesName = state?.blogsCategories || "";

  const { title, description, link } = useMetaTags(
    `/api/blogs/${state?.blogId}`
  );

  return (
    <section className="container-fluid  p-5">
      <MetaTagHelmet title={title} description={description} link={link} />
      <div className="row">
        <div className=" col-md-8 center-item">
          <Heading
            fontSize="1.25rem"
            text={categoriesName || "All Blogs"}
            color="#EF750F"
            className="border"
            style={{
              padding: "0.25rem 1rem ",
              // boxShadow: "0 0 8px rgba(0,0,0,0.2)",
            }}
          />
        </div>
        <div className="col-md-8 col-xs-12">{children}</div>
        <div className="col-md-1 col-xs-12"></div>

        <div className="col-md-3 col-xs-12">
          <Categories />
          <RecentPost />
          <RecentProperty />
        </div>
      </div>
    </section>
  );
};

export default Blog;

// if url is blogs/:blogName if (blogName) present in Api the show the api dat in BlogOverview components and in which we will get back button
//which redirect to the previous page how i can achieve this
