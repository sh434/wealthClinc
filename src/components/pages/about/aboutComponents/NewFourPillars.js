import NewReadMoreCard from "./NewReadMoreCard";
import "./newFourPillars.css";

const MyDynamicComponent = () => {
  // Define an array of objects containing the data for each dynamic component
  const dynamicData = [
    {
      color: "#000000",
      img: "https://www.squareyards.com/assets/images/insight-tool-img/price-trend-cityName-img.svg",
      readMoreTitle: "RELIABILITY",
      readMoreDesc:
        "There are many a slip between the cup and the lips and it can’t be truer for realty investment. Buying a property cost a lot and any misstep can hurt you really bad. Reliability and Authenticity is the key for a successful and tension-free investment and wealth clinic help you achieve that. We exclusively work with trusted and experienced developers to deliver the project you aspire in fully transparent and legal ways.  It’s not every day that you buy property and we promise to make your day – the day you decide to connect with us",
      bgColor: "rgb(223 145 64)",
      txtColor: "#000",
    },
    {
      color: "#000000",
      img: "https://www.squareyards.com/assets/images/insight-tool-img/valuation-report.svg",
      readMoreTitle: "RELATIONSHIP",
      readMoreDesc:
        "Wealth Clinic is not a transaction machine or software but a business with a human touch. We build long-term associations and relationships with project developers, clients, and the people that serve them. And our large base of loyal clients and developers acquired over the years is a glittering proof of that.",
      bgColor: "rgb(223 145 64)",
      txtColor: "#000",
    },

    {
      color: "#000000",
      img: "https://www.squareyards.com/assets/images/insight-tool-img/heatMap-home-img.svg",
      readMoreTitle: "PASSION",
      readMoreDesc:
        "We don’t sell. We serve. With Passion. We have a team of experienced and dedicated real estate advisors and facilitators to handhold you every step of the way. From the customized selection of property to financial planning, from complicated documentation processes to transactions, we do it all with passion. Unlike others in this business, we build relationships with our esteemed clients, and providing after-sale service is one way to prove it.",
      bgColor: "rgb(223 145 64)",
      txtColor: "#000",
    },
    {
      color: "#000000",
      img: "https://www.squareyards.com/assets/images/insight-tool-img/review-rating-img.svg",
      readMoreTitle: "INNOVATION",
      readMoreDesc:
        "Every living soul has real state dreams with varied needs, aspirations, and budgets. Our job is to find and offer innovative property solutions to each with detailed and careful Project Selection under a given budget. For aspirations that go beyond budget, we curate customized schemes and financial planning to turn your realty dreams into reality.",
      bgColor: "rgb(223 145 64)",
      txtColor: "#000",
    },
  ];

  return (
    <div className="container-fluid">
      <div className="row bg-fourPillars">
        <div className="center-item-fourPillars TopBottomPadding">
          {/* Use map function to loop through the dynamicData array */}
          {dynamicData.map((item, index) => (
            <div className="col-md-3 col-xs-12" key={index}>
              <NewReadMoreCard
                color={item.txtColor}
                img={item.img}
                readMoreTitle={item.readMoreTitle}
                readMoreDesc={item.readMoreDesc}
                bgColor={item.bgColor}
                txtColor={item.txtColor}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyDynamicComponent;
