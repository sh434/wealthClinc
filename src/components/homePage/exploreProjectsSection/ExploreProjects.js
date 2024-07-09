import { EXPLORE_PROJECTS_DATA } from "../../../assets/constant";
import "./exploreProjects.css";

const ExploreProjects = () => {
  const addStyle = {
    position: "relative",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    backgroundImage:
      "url('https://knowledge.wharton.upenn.edu/wp-content/uploads/2023/07/7.12.23-wachter-corporate-real-estate-GettyImages-136333671.jpg')",
    backgroundBlendMode: "darken",
    height: "550px",
    overflow: "hidden",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <section className="container-fluid border">
      <div className="row exploreProject ">
        {EXPLORE_PROJECTS_DATA.map((item, idx) => {
          const { img, title } = item;
          return (
            <div
              key={idx}
              className="col-md-3 col-sm-6 p-0 overflow-hidden exploreImgContainer"
            >
              <div
                className="  newImgDiv"
                style={{ ...addStyle, backgroundImage: `url(${img})` }}
              >
                {/* <img src={IMG_1} alt="" className="p-0" /> */}
                <div className="exploreSectionText">{title}</div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ExploreProjects;
