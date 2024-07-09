import ButtonDarkBlue from "../globalComponents/molecules/ButtonDarkBlue";
import CallSvg from "../globalComponents/molecules/CallSvg";
import Heading from "../globalComponents/molecules/Heading";
import InputCustom from "../globalComponents/molecules/InputCustom";
import SelectOption from "../globalComponents/molecules/SelectOption";
const OptionArray = ["Noida", "Delhi", "Gurgaon", "Bangalore"];
const COUNTRY_CODE = ["+01", "+41", "+61"];

const ContactExpertForm = ({ className }) => {
  return (
    <div className={` col-md-12  col-sm-12 col-xs-12 px-5`}>
      <div className="d-flex my-2 ">
        <div>
          <CallSvg
            style={{
              width: "30px",
              height: "30px",
              transform: "rotate(-45deg)",
              marginRight: "0.25rem",
              border: "1px solid orange",
              borderRadius: "50%",
              padding: "0.25rem",
              color: "var(--global-logo-color)",
            }}
          />
        </div>

        <Heading
          text={"Contact our Real Estate Experts"}
          fontSize={"1.rem"}
          color="111"
          fontWeight="600"
          style={{ lineHeight: "1.5rem" }}
        />
      </div>

      <form
        onClick={(e) => e.preventDefault()}
        className={`${className} property-contact-form border rounded-3 p-3`}
      >
        <InputCustom placeholder="Enter Name" className="px-3 rounded-2" />
        <InputCustom placeholder="Enter Email" className="px-3 rounded-2" />
        <div className="col-lg-12 d-flex justify-content-between">
          <div className="">
            <SelectOption
              data={COUNTRY_CODE}
              className={"px-2  rounded-2 w-100"}
              selectText="+91"
            />
          </div>
          <div className="">
            <InputCustom
              placeholder="Phone Number"
              className="px-4 rounded-2  w-100"
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
    </div>
  );
};

export default ContactExpertForm;
