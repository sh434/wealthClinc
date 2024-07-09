import { Link } from "react-router-dom";
import { slugFormat } from "./../../services/slug";

const CustomLink = ({ to, children, ...props }) => {
  return (
    <Link
      to={slugFormat(to).toLowerCase()}
      className="del-underLine"
      {...props}
    >
      {children}
    </Link>
  );
};

export default CustomLink;
