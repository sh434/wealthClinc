import Heading from "../../globalComponents/molecules/Heading";
import QueryForm2 from "../../globalComponents/queryForm2/QueryForm2";

import "./QuerySectionTemplate.css";

const QuerySectionTemplate = () => {
  return (
    <section className="m-0 my-5 d-flex flex-raw QuerySectionTemplate">
      <div className="container">
        <div className="enquiryFormTitle">
          <Heading
            text={"ANY ENQUIRIES"}
            fontWeight={"700"}
            fontSize={"2.4rem"}
            color={"var(--global-heading-color)"}
            className="callback"
          />
          <h4 className="text-white text-center">Fill This Query Form</h4>
        </div>
        <div className="row">
          <div className="col-md-5">
            <QueryForm2 />
          </div>
          <div className="col-md-7  vertical-center center-item">
            <div className="fixedHeight">
              <script
                src="https://static.elfsight.com/platform/platform.js"
                data-use-service-core
                defer
              ></script>
              <div
                class="elfsight-app-ee758e10-29a4-40d4-b0e5-72869c5ed57b"
                data-elfsight-app-lazy
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* <EarthSection /> */}
      {/* <EarthWithStar /> */}
    </section>
  );
};

export default QuerySectionTemplate;

/* <div class="google-reviews-container">
 <script async src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap"></script>
 <iframe
   width="600"
   height="450"
   id="frame"
   frameborder="0"
   allowfullscreen
   src="https://www.google.com/maps/embed?place_id=YOUR_PLACE_ID&reviews=embed&zoom=16&maptype=satellite"
 ></iframe>
</div> */
