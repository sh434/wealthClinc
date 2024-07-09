import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";
import PropTypes from "prop-types";
import { ButtonDarkBlue } from "./../../globalComponents/molecules/ButtonDarkBlue";

import { postMethod } from "../../../services/api.service";
import { API_URL, getFullUrl } from "../../../assets/constants/apiUrls";
import { EMPTY_ARRAY } from "../../../assets/constants";

const COMMENT_MESSAGE_ON_SUCCESS = "Comment is added";

const Comments = ({ initialComments, BLOG_ID }) => {
  const url = getFullUrl(API_URL.COMMENTS);
  const [comments, setComments] = useState(initialComments);
  const [newComment, setNewComment] = useState("");
  const [username, setUsername] = useState("");

  const comment = {
    blogId: BLOG_ID,
    UserName: username,
    comments: newComment,
    // date: new Date().toLocaleString(),
    publishedAt: null,
  };

  const handleCommentSubmit = async (e) => {
    e.preventDefault();

    if (!username || !newComment) {
      toast.error("Please enter your username and comment.");
      return;
    }
    postMethod(url, { data: { ...comment } }, COMMENT_MESSAGE_ON_SUCCESS);
    // setComments([...comments, comment]);
    setComments([...comments]);
    setNewComment("");
    toast.success("Comment submitted successfully!");
  };

  return (
    <section className="comments-section mt-4">
      <h3>Comments</h3>

      <form onSubmit={handleCommentSubmit} className="mb-4">
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Your Name
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="comment" className="form-label">
            Leave a Comment
          </label>
          <textarea
            className="form-control"
            id="comment"
            rows="3"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            required
          />
        </div>
        <div className="col-md-1">
          <ButtonDarkBlue name="Submit" className="rounded-3" />
        </div>
      </form>

      <div className="comments-list">
        {comments?.map((comment) => {
          const { blogId, UserName, comments } = comment;
          return (
            <div key={blogId} className="display-comments mb-3">
              <p>
                <strong>{UserName}</strong>
                <span className="text-muted">
                  on {new Date().toLocaleString()} {comment.date}
                </span>
              </p>
              <p>{comments}</p>
            </div>
          );
        })}
      </div>
      <ToastContainer />
    </section>
  );
};

Comments.propTypes = {
  initialComments: PropTypes.array,
};

Comments.defaultProps = {
  initialComments: EMPTY_ARRAY,
};

export default Comments;
