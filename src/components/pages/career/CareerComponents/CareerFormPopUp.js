import Heading from "../../../globalComponents/molecules/Heading";
import ButtonDarkBlue from "../../../globalComponents/molecules/ButtonDarkBlue";
import SelectOption from "../../../globalComponents/molecules/SelectOption";
import InputCustom from "../../../globalComponents/molecules/InputCustom";
import PopUpCard from "../../../globalComponents/PopUpCard/PopUpCard";

import "./careerForm.css";

const careerForm = {
  jobTitle: [
    "None",
    "Business Development Executive",
    "Associate Vice President",
    "Telecaller",
    "Sr Business Development Executive",
    "Assistant Manager",
  ],
  experience: [
    "None",
    "Fresher",
    "1-3 Years",
    "4-6 Years",
    "More than 7 Years",
  ],
  currentPackage: [
    "Upto 3,00,000",
    "Upto 6 lacs",
    "7-10 lacs",
    "More than 10 lacs",
  ],
  preferredJobLocation: ["None", "Noida Bengaluru"],
};

const popPupStyle = {
  // display: "flex",
  // justifyContent: "center",
  // alignItem: "center",
  flexDirection: "column",
  top: 0,
  left: 0,
  height: "100%",
};

const CareerFormPopUp = ({ isOpen, onClose }) => {
  const handleForm = (event) => {
    event.preventdefault();
  };

  return (
    <PopUpCard
      isOpen={isOpen}
      onClose={onClose}
      className="center-item"
      style={popPupStyle}
    >
      <div className="career-form">
        <Heading text={"Job Application Form"} fontSize="1.5rem" />

        <form className=" col-md-9 row" onClick={handleForm}>
          <div className="col-md-6">
            <InputCustom className="px-3 rounded-2" placeholder={"Full Name"} />
          </div>

          <div className="col-md-6">
            <InputCustom
              className="px-3 rounded-2"
              placeholder={"Contact No."}
            />
          </div>

          <div className="col-md-6">
            <InputCustom className="px-3 rounded-2" placeholder={"Email"} />
          </div>

          <div className="col-md-6">
            <InputCustom
              className="px-3 rounded-2"
              placeholder={"Your Current Location"}
            />
          </div>

          <div className="col-md-6">
            <SelectOption
              className="px-3 rounded-2"
              data={careerForm?.currentPackage}
              selectText={"Select Package"}
            />
          </div>
          <div className="col-md-6">
            <SelectOption
              className="px-3 rounded-2"
              selectText={"Select Experience"}
              data={careerForm?.experience}
            />
          </div>

          <div className="col-md-6">
            <SelectOption
              className="px-3 rounded-2"
              selectText={"Select Preferred Job Location"}
              data={careerForm?.preferredJobLocation}
            />
          </div>

          <div className="col-md-6">
            <SelectOption
              className="px-3 rounded-2"
              selectText={"Select Job Title"}
              data={careerForm?.jobTitle}
            />
          </div>

          <div className="row col-md-12 p-0 m-0">
            <div className="col-md-6">
              <InputCustom
                className="px-3 rounded-2"
                placeholder={"Latest Passport Size Photo"}
                type={"file"}
              />
            </div>
            <div className="col-md-6">
              <InputCustom
                className="px-3 rounded-2"
                placeholder={"Upload CV*"}
                type={"file"}
              />
            </div>
          </div>

          <ButtonDarkBlue name="Submit" />
        </form>
      </div>
    </PopUpCard>
  );
};

export default CareerFormPopUp;
