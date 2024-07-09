import { Link } from "react-router-dom";

import CustomLink from "../../CustomLink";
import Heading from "../../globalComponents/molecules/Heading";

import useDeviceSize from "../../../hooks/useDeviceSize";
import searchBuilding from "../../../assets/searchBuilding.png";
import buildingRent from "../../../assets/buildingRent.png";

import { generateBlogDetailsURL } from "./../../../helpers/getRedirectUrl";
import URL from "../../../assets/constants/url";
// import { BLOGS_SECTION_CARD } from "../../../assets/constants/home";
import "./advantageSection.css";

const AdvantageSection = () => {
  const isMobile = useDeviceSize();
  return isMobile ? (
    <section id="About" className="companyWork my-5">
      <div className="text-content">
        <div>
          {/* <h1>
            Stay updated with the
            <span className="text-danger"> Real estate industry</span>
          </h1> */}
          <Heading
            text={"Blogs"}
            fontWeight={700}
            color={"var(--global-heading-color)"}
            className="ku text-center"
          />
          <h4 className="text-lg-center ku">
            Stay updated with the Real estate industry
          </h4>
        </div>
        <Link to={URL.BLOGS}>
          <button className="projectBtn btn my-3 border rounded-4 text-white">
            Blogs <i className="bi bi-arrow-right-short"></i>
          </button>
        </Link>
      </div>

      <div className="project-Card-container">
        <div>
          <img alt="" src={require("../../../assets/realState.png")} />
          <h5 className="mt-1 fw-light">JAN 31, 2024 | DELHI NCR</h5>
          <p>
            From Connectivity to Prosperity: Unveiling Noida's Infrastructure
            Marvel From Connectivity to Prosperity: Unveiling Noida's
            Infrastructure Marvel
          </p>

          <button className="btn btn-outline-dark border rounded-4 w-75 mx-auto mb-3">
            Explore
          </button>
        </div>

        <div>
          <img src={searchBuilding} alt="" />
          <h5 className="mt-1 fw-bold">FEB 2, 2024 | INVESTMENT</h5>
          <p>
            Smart Investments: Why Properties in M3M The Line In Noida is the
            Commercial Hub Smart Investments: Why Properties in M3M The Line In
            Noida is the Commercial Hub
          </p>

          <button className="btn btn-outline-dark border rounded-4 w-75 mx-auto mb-3">
            Explore
          </button>
        </div>
        <div>
          <img src={buildingRent} alt="" />
          <h5 className="mt-1 fw-bold">FEB 6, 2024 | REAL ESTATE NEWS</h5>
          <p>
            Investing in Tomorrow: Commercial Real Estate Trends in Noida's
            Orion 132 Investing in Tomorrow: Commercial Real Estate Trends in
            Noida's Orion 132
          </p>
          <button className="btn btn-outline-dark border rounded-4 w-75 mx-auto mb-3">
            Explore
          </button>
        </div>
        <div>
          <img src={require("../../../assets/building.png")} alt="" />
          <h5 className="mt-1 fw-bold">FEB 6, 2024 | REAL ESTATE NEWS</h5>
          <p>
            From Connectivity to Prosperity: Unveiling Noida's Infrastructure
            Marvel From Connectivity to Prosperity: Unveiling Noida's
            Infrastructure Marvel
          </p>
          <button className="btn btn-outline-dark border rounded-4 w-75 mx-auto mb-3">
            Explore
          </button>
        </div>
      </div>
    </section>
  ) : (
    <section id="About" className="companyWork my-5">
      <div className="text-content">
        <div>
          {/* <h1>
            Stay updated with the
            <span className="text-danger"> Real estate industry</span>
          </h1> */}
          <Heading
            text={"Blogs"}
            fontWeight={700}
            color={"var(--global-heading-color)"}
            className="ku text-center"
          />
          <h4 className="text-lg-center ku">
            Stay updated with the Real estate industry
          </h4>
        </div>
        <Link to={URL.BLOGS}>
          <button className="projectBtn btn my-3 border rounded-4 text-white">
            Blogs <i className="bi bi-arrow-right-short"></i>
          </button>
        </Link>
      </div>

      <div className="project-Card-container">
        <div>
          <img alt="" src={require("../../../assets/realState.png")} />
          <h5 className="mt-1 fw-light">JAN 31, 2024 | DELHI NCR</h5>
          <p>
            From Connectivity to Prosperity: Unveiling Noida's Infrastructure
            Marvel From Connectivity to Prosperity: Unveiling Noida's
            Infrastructure Marvel
          </p>
          <button className="btn btn-outline-dark border rounded-4 w-75 mx-auto mb-3">
            <CustomLink
              to={generateBlogDetailsURL(
                "A Beginner's Guide to the Cost of Living in Noida"
              )}
              state={{ blogId: 10 }}
              className="del-underLine"
            >
              Explore
            </CustomLink>
          </button>
        </div>

        <div>
          <img src={searchBuilding} alt="" />
          <h5 className="mt-1 fw-bold">FEB 2, 2024 | INVESTMENT</h5>
          <p>
            Smart Investments: Why Properties in M3M The Line In Noida is the
            Commercial Hub Smart Investments: Why Properties in M3M The Line In
            Noida is the Commercial Hub
          </p>
          <CustomLink
            to={generateBlogDetailsURL(
              "An increase in housing prices is expected by almost 56% of Indians in 2022"
            )}
            state={{ blogId: 59 }}
            className="del-underLine"
          >
            <button className="btn btn-outline-dark border rounded-4 w-75 mx-auto mb-3">
              Explore
            </button>
          </CustomLink>
        </div>
        <div>
          <img src={buildingRent} alt="" />
          <h5 className="mt-1 fw-bold">FEB 6, 2024 | REAL ESTATE NEWS</h5>
          <p>
            Investing in Tomorrow: Commercial Real Estate Trends in Noida's
            Orion 132 Investing in Tomorrow: Commercial Real Estate Trends in
            Noida's Orion 132
          </p>
          <CustomLink
            to={generateBlogDetailsURL(" almost 56% of Indians in 2022")}
            state={{ blogId: 25 }}
            className="del-underLine"
          >
            <button className="btn btn-outline-dark border rounded-4 w-75 mx-auto mb-3">
              Explore
            </button>
          </CustomLink>
        </div>
        <div>
          <img src={require("../../../assets/building.png")} alt="" />
          <h5 className="mt-1 fw-bold">FEB 6, 2024 | REAL ESTATE NEWS</h5>
          <p>
            From Connectivity to Prosperity: Unveiling Noida's Infrastructure
            Marvel From Connectivity to Prosperity: Unveiling Noida's
            Infrastructure Marvel
          </p>
          <CustomLink
            to={generateBlogDetailsURL(" new almost 56% of Indians in 2022")}
            state={{ blogId: 52 }}
            className="del-underLine"
          >
            <button className="btn btn-outline-dark border rounded-4 w-75 mx-auto mb-3">
              Explore
            </button>
          </CustomLink>
        </div>
      </div>
    </section>
  );
};

export default AdvantageSection;

export function BlogsSectionCard({ blogs }) {
  return (
    <>
      {blogs.map((blog) => (
        <div key={blog.id}>
          <img src={blog.image} alt={blog.title} />
          <h5 className="mt-1 fw-bold">
            {blog.date} | {blog.category}
          </h5>
          <p>{blog.description}</p>
          <CustomLink
            to={generateBlogDetailsURL(blog.title)}
            state={{ blogId: blog.id }}
            className="del-underLine"
          >
            <button className="btn btn-outline-dark border rounded-4 w-75 mx-auto mb-3">
              Explore
            </button>
          </CustomLink>
        </div>
      ))}
    </>
  );
}
