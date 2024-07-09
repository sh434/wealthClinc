import { Link, useLocation } from "react-router-dom";
import "./breadCrumb.css";

const BreadCrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <div className="breadcrumb flat">
      <Link to="/">Home</Link>
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;
        return (
          <div key={name}>
            {!isLast ? <Link to={routeTo}>{name}</Link> : <Link>{name}</Link>}
            {/* {!isLast && <span> / </span>} */}
          </div>
        );
      })}
    </div>
  );
};

export default BreadCrumb;
