import { EMPTY_OBJECT } from "../../../../assets/constants";
import ReadMore from "../../../globalComponents/molecules/ReadMore";

const style = { textAlign: "justify" };

const Overview = ({ data }) => {
  const Text = data?.Description || EMPTY_OBJECT;
  if(!Text) return null
  return (
    <div>
      Overview
      <ReadMore
        text={Text}
        fontSize={"1rem"}
        color="#777"
        lineHeight="20px"
        showLine="5"
        style={style}
      />
    </div>
  );
};

export default Overview;
