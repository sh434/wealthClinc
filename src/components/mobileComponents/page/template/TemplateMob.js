import Header from "../../HeaderMob";
import Heading from "../../../globalComponents/molecules/Heading";
import MobileSearchBar from "./MobileSearchBar";

const TemplateMob = ({ searchBar, text }) => {
  return (
    <section className="container-fluid p-0">
      <div className="image-container">
        <div>
          <div className="header-container">
            <Header />
          </div>
          <div className="searchBar-container">
            {text && text !== "" ? (
              <Heading tag="h1" text={text} className="yu" />
            ) : null}

            {searchBar === "enabled" ? (
              <div className="d-flex justify-content-center">
                <div className="row height d-flex">
                  <div className="col-md-8">
                    <MobileSearchBar />
                  </div>
                </div>
              </div>
            ) : null}

            <p className="kj">The Most Followed Real Estate Brand In India</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TemplateMob;
