import { FaCommentAlt } from "react-icons/fa";
import { BiLike } from "react-icons/bi";
import { FaRegShareFromSquare } from "react-icons/fa6";
import { useState } from "react";

import handleShareClick from "../../../services/shareContentSlug";
import "./blogOverview.css";

const CommentBtn = () => {
  return (
    <div className="blog-btn-box">
      <div className="inside-blog-btn-container">
        <div>
          <FaCommentAlt className="blog-btn-icons" />
        </div>
        <div className="px-1">10</div>
      </div>
    </div>
  );
};
export default CommentBtn;

export function LikeBtn() {
  const [like, setLike] = useState(0);

  const handleLikeBtn = () => {
    setLike(like + 1);
  };

  return (
    <div className="blog-btn-box">
      <div className="inside-blog-btn-container">
        <div>
          <BiLike className="blog-btn-icons" onClick={handleLikeBtn} />
        </div>
        <div className=" px-1 pt-1">{like}</div>
      </div>
    </div>
  );
}

export function ShareBtn({ ...props }) {
  return (
    <div
      className="blog-btn-box"
      {...props}
      onClick={() => handleShareClick(window.location.href)}
    >
      <div className="inside-blog-btn-container">
        <div>
          <FaRegShareFromSquare className="blog-btn-icons" />
        </div>
      </div>
    </div>
  );
}
