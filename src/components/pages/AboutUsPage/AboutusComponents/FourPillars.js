import ReadMoreCard from "./ReadMoreCard";
import "./fourPillars.css";

const FourPillars = (props) => {
  return (
    <div className="container-fluid">
      <div className="row bg-fourPillars">
        <div className="center-item-fourPillars TopBottomPadding">
          <div className="col-md-3 col-xs-12">
            <ReadMoreCard
              color={"#ffedba"}
              img="https://www.squareyards.com/assets/images/insight-tool-img/price-trend-cityName-img.svg"
              readMoreTitle={"RELIABILITY"}
              readMoreDesc={
                "There are many a slip between the cup and the lips and it can’t be truer for realty investment. Buying a property cost a lot and any misstep can hurt you really bad. Reliability and Authenticity is the key for a successful and tension-free investment and wealth clinic help you achieve that."
              }
              bgColor={"rgb(237 196 81)"}
              txtColor={"#000"}
            />
          </div>
          <div className="col-md-3 col-xs-12">
            <ReadMoreCard
              color={"#c5f4e5"}
              img="https://www.squareyards.com/assets/images/insight-tool-img/valuation-report.svg"
              readMoreTitle={"RELATIONSHIP"}
              readMoreDesc={
                "There are many a slip between the cup and the lips and it can’t be truer for realty investment. Buying a property cost a lot and any misstep can hurt you really bad. Reliability and Authenticity is the key for a successful and tension-free investment and wealth clinic help you achieve that."
              }
              bgColor={"rgb(79 213 169)"}
              txtColor={"#000"}
            />
          </div>
          <div className="col-md-3 col-xs-12">
            <ReadMoreCard
              color={"#ffd9f8"}
              img="https://www.squareyards.com/assets/images/insight-tool-img/heatMap-home-img.svg"
              readMoreTitle={"PASSION"}
              readMoreDesc={
                "There are many a slip between the cup and the lips and it can’t be truer for realty investment. Buying a property cost a lot and any misstep can hurt you really bad. Reliability and Authenticity is the key for a successful and tension-free investment and wealth clinic help you achieve that."
              }
              bgColor={"rgb(231 123 210)"}
              txtColor={"#000"}
            />
          </div>
          <div className="col-md-3 col-xs-12">
            <ReadMoreCard
              color={"#ffdebc"}
              img="https://www.squareyards.com/assets/images/insight-tool-img/valuation-report.svg"
              readMoreTitle={"INNOVATION"}
              readMoreDesc={
                "There are many a slip between the cup and the lips and it can’t be truer for realty investment. Buying a property cost a lot and any misstep can hurt you really bad. Reliability and Authenticity is the key for a successful and tension-free investment and wealth clinic help you achieve that."
              }
              bgColor={"rgb(223 145 64)"}
              txtColor={"#000"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FourPillars;
