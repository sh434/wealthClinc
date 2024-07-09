import ButtonDarkBlue from "../../../globalComponents/molecules/ButtonDarkBlue";
import CallSvg from "../../../globalComponents/molecules/CallSvg";
import Heading from "../../../globalComponents/molecules/Heading";
import InputCustom from "../../../globalComponents/molecules/InputCustom";
import SelectOption from "../../../globalComponents/molecules/SelectOption";

import useDeviceSize from "../../../../hooks/useDeviceSize";

const OptionArray = ["Noida", "Delhi", "Gurgaon", "Bangalore"];
const COUNTRY_CODE = ["+01", "+41", "+61"];

const iconStyle = {
  width: "30px",
  height: "30px",
  transform: "rotate(-45deg)",
  marginRight: "0.25rem",
  border: "1px solid orange",
  borderRadius: "50%",
  padding: "0.25rem",
  color: "var(--global-logo-color)",
};

const PropertyForm = ({ className }) => {
  const isMobile = useDeviceSize();
  return (
    <div className="cityPageForm col-md-12 px-4 ">
      <div className="d-flex my-4 center-item">
        <div>
          <CallSvg style={iconStyle} />
        </div>

        <Heading
          text={"Contact our Real Estate Experts"}
          fontSize={isMobile ? "1.25rem" : "1.5rem"}
          color="111"
          fontWeight="600"
          style={{ lineHeight: "1.5rem" }}
        />
      </div>

      <form
        onClick={(e) => e.preventDefault()}
        className={`border rounded-3  ${className}`}
      >
        <InputCustom placeholder="Enter Name" className="px-3 rounded-2" />
        <InputCustom placeholder="Enter Email" className="px-3 rounded-2" />

        <div className="col-lg-12 d-flex justify-content-between">
          <SelectOption
            data={COUNTRY_CODE}
            className={"px-2  rounded-2 w-100"}
            selectText="+91"
          />
          <div className="col-md-9">
            <InputCustom
              placeholder="Phone Number"
              className="px-3 pr-4 rounded-2  w-100"
            />
          </div>
        </div>
        <SelectOption
          data={OptionArray}
          className={"rounded-2"}
          selectText="Select"
        />
        <ButtonDarkBlue name="Contact Now" className={"px-3 rounded-2"} />
      </form>

      {/* <div>Enable update through WhatsApp</div> */}

      {/* </div> */}
    </div>
  );
};

export default PropertyForm;
