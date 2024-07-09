import { AiOutlineEnvironment } from "react-icons/ai";

import Heading from "../../../globalComponents/molecules/Heading";
import EthosCard from "./EthosCard/EthosCard";

import { EMPTY_OBJECT } from "../../../../assets/constants";
import "./ethos.css";

export const Ethos = ({ data }) => {
  const { Ethos_Heading, Ethos_Description, Add_Ethos } = data || EMPTY_OBJECT;

  return (
    <div className="container ourEthos">
      <div className="row center-item mtb">
        <div className="col-md-3">
          <div className="ethos-BG">
            <Heading
              text={Ethos_Heading}
              color="#fff"
              fontWeight="700"
              fontSize="36px"
              className="ethos-heading"
            />
            <p className="ehtospara">{Ethos_Description}</p>
            <div>
              <AiOutlineEnvironment
                className="icon iconPlacementEhos"
                size={62}
                color={"#f37535"}
              />
            </div>
          </div>
        </div>
        <div className="col-md-9 ethosCard">
          {Add_Ethos?.map((item, idx) => (
            <EthosCard key={idx} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Ethos;
