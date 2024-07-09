// import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { TfiUser } from "react-icons/tfi";

import Comments from "./Comments";
import CommentBtn, { LikeBtn, ShareBtn } from "./CommentsBtn";
import CkEditorContentDisplay from "../../globalComponents/CkEditorContentDisplay/CkEditorContentDisplay";

import useApiFetcher from "../../../hooks/useApiFetcher";
import {
  API_URL,
  getFullUrl,
  getFullUrlLocal,
} from "../../../assets/constants/apiUrls";
import { getMonthName, splitDate } from "../../../helpers/helper";
import { EMPTY_ARRAY, EMPTY_OBJECT } from "../../../assets/constants";
import "./blogOverview.css";

// const initialComments = [
//   {
//     blogId: 2,
//     userName: "Anuj Garg",
//     comment: "Nice Property",
//     date: new Date().toLocaleString(),
//   },
//   {
//     blogId: 1,
//     userName: "Kaural Rana",
//     comment: "Great post!",
//     date: new Date().toLocaleString(),
//   },
// ];

const url = (blogId) =>
  getFullUrl(`${API_URL.BLOG_SUMMARY_PAGE}/${blogId}${API_URL.POPULATE}`);

const BlogOverview = () => {
  // const { blogName: blogSlug } = useParams();

  const location = useLocation();
  const { blogId } = location?.state;

  // const [blogDescription, error, isLoading] = useApiFetcher(getFullUrlBySlug(API_URL?.BLOGS,blogSlug));

  const [blogDescription, error, isLoading] = useApiFetcher(url(blogId));
  const [comments, commentError, isCommentLoading] = useApiFetcher(
    getFullUrlLocal(`/api/comments?filters[$and][0][blogId][$eq]=${blogId}`)
  );

  if (error) return <div>{error.message}</div>;
  if (isLoading && !blogDescription) return null;

  if (commentError)
    return <div>Error fetching comments: {commentError.message}</div>;
  if (isCommentLoading) return <div>Loading comments...</div>; // Provide a loading indicator

  const {
    Title = "",
    Description,
    Image,
    Pubish_Date,
  } = blogDescription?.attributes || EMPTY_OBJECT;
  const [year, month, date] = splitDate(Pubish_Date);
  const img = Image?.data?.attributes?.url;
  const monthName = getMonthName(month);

  //   const navigate = useNavigate();

  //   const handleBack = function () {
  //     navigate("/blogs");
  //   };
  let displayInitialComments;
  if (comments)
    displayInitialComments =
      comments.length > 0 ? getCommentStructured(comments) : EMPTY_ARRAY;

  return (
    <>
      {/* <div>
        <button onClick={handleBack}>Back to blogs</button>
      </div> */}
      <div className="mt-4 mb-4 BlogBgColor pb-2">
        <section>
          <div className="blogImgContainer">
            <div className="imgForBlog">
              <img className="imgBlogStyle" alt="" src={img} />
              <div className="secDate">
                <p className="dateBlog">{date}</p>
                <p className="monthBlog">
                  {monthName} {year}
                </p>
                <p className="ProfileBlog">
                  <TfiUser className="ProfileIcon" /> By Admin
                </p>
              </div>

              <div className="blog-btns-container">
                <LikeBtn />
                <ShareBtn />
                <CommentBtn />
              </div>
            </div>
          </div>

          <section className="blogPad">
            <h2>{Title}</h2>

            {Description?.map((item, idx) => (
              <CkEditorContentDisplay key={idx} content={item} />
            ))}
          </section>

          {
            <Comments
              BLOG_ID={blogId}
              initialComments={displayInitialComments}
            />
          }
        </section>
      </div>
    </>
  );
};

export default BlogOverview;

function getCommentStructured(comments) {
  return comments?.map((userComment) => {
    const { blogId, UserName, comments } = userComment?.attributes;
    return { blogId, UserName, comments };
  });
}
