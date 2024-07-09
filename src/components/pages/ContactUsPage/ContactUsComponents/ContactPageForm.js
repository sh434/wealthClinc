import ButtonDarkBlue from "../../../globalComponents/molecules/ButtonDarkBlue";
import InputCustom from "../../../globalComponents/molecules/InputCustom";
import SelectOption from "../../../globalComponents/molecules/SelectOption";

const OptionArray = ["Noida", "Delhi", "Gurgaon", "Bangalore"];
const Gender = ["Male", "Female"];

const ContactPageForm = () => {
  return (
    <form
      onClick={(e) => e.preventDefault()}
      className="border rounded-3 col-md-7 p-3 w-100"
    >
      <InputCustom placeholder="Name" className="px-3 rounded-2" />
      <InputCustom placeholder="Email" className="px-3 rounded-2" />
      <InputCustom placeholder="Phone" className="px-3 rounded-2" />
      <SelectOption
        data={OptionArray}
        className={"rounded-2"}
        selectText="Select"
      />
      <SelectOption data={Gender} selectText="I Am" className={"rounded-2"} />

      <InputCustom placeholder="Message" className="rounded-3" />

      <ButtonDarkBlue name="Contact Now" className={"px-3 rounded-2"} />
    </form>
  );
};

export default ContactPageForm;
