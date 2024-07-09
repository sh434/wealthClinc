import Heading from "../../../globalComponents/molecules/Heading";
import ProfilerSection from "./ProfilerSection";

import CustomLink from "../../../CustomLink/CustomLink";

import { generateBlogDetailsURL } from "../../../../helpers/getRedirectUrl";
import styles from "./blogCard2.module.css";
import { EMPTY_OBJECT } from "../../../../assets/constants";

const blogTextContainer = {
  color: "#888",
  // minHeight: "44px",
  lineHeight: " 1rem",
  overflow: "hidden",
  textOverflow: "ellipsis",
  display: "-webkit-box",
  WebkitBoxOrient: " vertical",
  WebkitLineClamp: "5",
  maxHeight: "calc(4 * 1.25em)",
  minHeight: "calc(4 * 1.25em)",
  margin: "0.25rem",
};
const blogCardHeading = { height: "54px" };

const BlogCard = ({ blogInfo }) => {
  const {
    // Slug_Url,
    Title = "",
    Pubish_Date,
    Description,
    Image,
  } = blogInfo?.attributes || EMPTY_OBJECT;
  const description = Description[0].children[0].text || "";
  const img = Image?.data?.attributes?.formats?.thumbnail?.url || "";

  const blogId = blogInfo?.id;

  return (
    <div className="col-lg-4 col-md-6  col-sm-4 col-xs-6">
      <CustomLink
        to={generateBlogDetailsURL(Title)}
        // to={generateBlogDetailsURL(Slug_Url)}

        state={{ blogId }}
        className="del-underLine"
      >
        <div className={styles.blogCard}>
          {/* <Profiler2nd /> */}

          <img src={img} alt="" />
          <div className="px-1">
            <Heading
              className="text-center heading"
              text={Title}
              fontSize={"1rem"}
              showLine="5"
              color="#EF750F"
              style={blogCardHeading}
            />

            <div style={blogTextContainer}>{description}</div>
            <div className="mt-3">
              <ProfilerSection name="By Admin" date={Pubish_Date} />
            </div>
            {/* send key={blog.id} to={"/blogs/detail/blog/slug} from link to */}

            <button className={styles.blogCardBtn}>Read More</button>
          </div>
        </div>
      </CustomLink>
    </div>
  );
};

export default BlogCard;
