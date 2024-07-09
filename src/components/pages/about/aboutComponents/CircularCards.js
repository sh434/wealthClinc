import NewReadMoreCard from "./NewReadMoreCard";

import Relationship from "../../../../assets/dependable.png";
import Innovation from "../../../../assets/innovation.png";
import RELIABILITY from "../../../../assets/high-five.png";
import PASSION from "../../../../assets/passionate.png";
import "./circularCards.css";

const CircularCards = (props) => {
  return (
    <div className="container-fluid bgArrow">
      <div className="row bg-fourPillars">
        <div className="centerItemFourPillars TopBottomPadding">
          <div className="col-md-6 col-xs-12 card1">
            <center>
              <NewReadMoreCard
                color={"#ef750f"}
                img={RELIABILITY}
                readMoreTitle={"RELIABILITY"}
                readMoreDesc={
                  "Wealth Clinic is not a transaction machine or software but a business with a human touch. We build long-term associations and relationships with project developers, clients, and the people that serve them. And our large base of loyal clients and developers acquired over the years is a glittering proof of that."
                }
                bgColor={"#ffffff"}
                txtColor={"#000"}
              />
            </center>
          </div>

          <div className="col-md-6 col-xs-12 card2">
            <center>
              <NewReadMoreCard
                color={"#ef750f"}
                img={Relationship}
                readMoreTitle={"RELATIONSHIP"}
                readMoreDesc={
                  "Wealth Clinic is not a transaction machine or software but a business with a human touch. We build long-term associations and relationships with project developers, clients, and the people that serve them. And our large base of loyal clients and developers acquired over the years is a glittering proof of that."
                }
                bgColor={"#ffffff"}
                txtColor={"#000"}
              />
            </center>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 col-xs-12 card3">
          <center>
            <NewReadMoreCard
              color={"#ef750f"}
              img={PASSION}
              readMoreTitle={"PASSION"}
              readMoreDesc={
                "Wealth Clinic is not a transaction machine or software but a business with a human touch. We build long-term associations and relationships with project developers, clients, and the people that serve them. And our large base of loyal clients and developers acquired over the years is a glittering proof of that."
              }
              bgColor={"#ffffff"}
              txtColor={"#000"}
            />
          </center>
        </div>

        <div className="col-md-6 col-xs-12 card4">
          <center>
            <NewReadMoreCard
              color={"#ef750f"}
              img={Innovation}
              readMoreTitle={"INNOVATION"}
              readMoreDesc={
                "Wealth Clinic is not a transaction machine or software but a business with a human touch. We build long-term associations and relationships with project developers, clients, and the people that serve them. And our large base of loyal clients and developers acquired over the years is a glittering proof of that."
              }
              bgColor={"#ffffff"}
              txtColor={"#000"}
            />
          </center>
        </div>
      </div>
    </div>
  );
};

export default CircularCards;
