import { useState } from "react";

import InfiniteSlides from "../../globalComponents/slickCrousel/InfiniteSlides";
import Heading from "../../globalComponents/molecules/Heading";

import { submitForm } from "../../globalComponents/CallBackPopUpForm/form.services";
import { SLIDES } from "../../../assets/IMG";
import "./aboutUs.css";

const settings = {
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1000,
  speed: 500,
};

const AboutUs = () => {
  return (
    <div className="container border d-flex align-items-center justify-content-center flex-wrap callBackForm">
      <div className="col-md-9 my-2 newClass">
        <div className="text-Item">
          <Heading
            text={"Request a Call Back"}
            className="callback mt-2"
            fontWeight={700}
            color="var(--global-heading-color)"
          />
          <p className="mt-1 callback2">
            Tired of Renting? Discover Your Dream Home Today. Start Your Search
            Now. Action-oriented and time-sensitive
          </p>
        </div>
        <div className="d-none d-md-block">
          <InfiniteSlides
            settings={settings}
            data={SLIDES}
            className="about-Us-Page-Slider "
          />
        </div>
      </div>
      <div className="col-md-3">
        <EnquiryForm />
      </div>
    </div>
  );
};

export default AboutUs;

export const EnquiryForm = () => {
  const [formValues, setFormValues] = useState({
    formName: "Request A Call Back Form",
    name: "",
    phone: "",
    budget: "",
    propertyType: "",
  });

  const [errors, setErrors] = useState({});
  const [selectedOption, setSelectedOption] = useState("");

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      await submitForm(formValues);
    } else {
      setErrors(validationErrors);
    }
  };

  const handleInputChange = async (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleOptionChange = (event) => {
    const { value } = event.target;
    setSelectedOption(value);
    setFormValues({ ...formValues, propertyType: value });
  };

  const validateForm = () => {
    const errors = {};

    if (!formValues.name.trim()) {
      errors.name = "Full Name is required";
    }

    if (!formValues.phone.trim()) {
      errors.phone = "Mobile Number is required";
    } else if (!/^\d{10}$/.test(formValues.phone)) {
      errors.phone = "Mobile Number must be 10 digits";
    }

    if (!formValues.budget.trim()) {
      errors.budget = "Budget is required";
    }

    if (!formValues.propertyType) {
      errors.propertyType = "Property Type is required";
    }

    return errors;
  };

  return (
    <div className="signUpForm p-2">
      <form className="w-100 border" onSubmit={handleFormSubmit}>
        <div className="signUpHeader d-none d-md-block">
          <div className="fw-bold my-h">Enquiry Now</div>
        </div>
        <input
          placeholder="Full Name"
          name="name"
          value={formValues.name}
          onChange={handleInputChange}
          required
        />
        {errors.name && <span className="error">{errors.name}</span>}
        <input
          placeholder="Mobile Number"
          name="phone"
          value={formValues.phone}
          onChange={handleInputChange}
          required
        />
        {errors.phone && <span className="error">{errors.phone}</span>}
        <input
          placeholder="Budget"
          name="budget"
          value={formValues.budget}
          onChange={handleInputChange}
          required
        />
        {errors.budget && <span className="error">{errors.budget}</span>}
        <select
          id="options"
          value={selectedOption}
          onChange={handleOptionChange}
          required
        >
          <option value="">Property Type</option>
          <option value="Residential">Residential</option>
          <option value="Commercial">Commercial</option>
          <option value="Other">Other</option>
        </select>
        {errors.propertyType && (
          <span className="error">{errors.propertyType}</span>
        )}
        {/* Uncomment the below section if you need the city type selection */}
        {/* <select
            id="options"
            value={selectedCityOption}
            onChange={handleCityOptionChange}
          >
            <option value="">City Type</option>
            <option value="Delhi">Delhi</option>
            <option value="Noida">Noida</option>
            <option value="Moradabad">Moradabad</option>
            <option value="Ghaziabad">Ghaziabad</option>
            <option value="Greater Noida">Greater Noida</option>
            <option value="Rishikesh">Rishikesh</option>
          </select> */}
        <button type="submit">Search</button>
      </form>
    </div>
  );
};
