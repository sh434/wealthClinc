import { useState } from "react";
import "./queryForm2.css";
import { submitForm } from "../CallBackPopUpForm/form.services";

const QueryForm2 = () => {
  const [formValues, setFormValues] = useState({
    formName: "Any Enquiries Form",
    name: "",
    phone: "",
    email: "",
    propertyType: "",
    cityName: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleForm = async (event) => {
    event.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      // Submit the form
      // console.log("Form submitted", formValues);
      await submitForm(formValues);
    } else {
      setErrors(validationErrors);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const validateForm = () => {
    const errors = {};

    if (!formValues.name.trim()) {
      errors.name = "Full Name is required";
    }

    if (!formValues.phone.trim()) {
      errors.phone = "Phone Number is required";
    } else if (!/^\d{10}$/.test(formValues.phone)) {
      errors.phone = "Phone Number must be 10 digits";
    }

    if (!formValues.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      errors.email = "Email is invalid";
    }

    if (!formValues.propertyType) {
      errors.propertyType = "Property Type is required";
    }

    if (!formValues.cityName) {
      errors.cityName = "City Name is required";
    }

    if (!formValues.message.trim()) {
      errors.message = "Message is required";
    }

    return errors;
  };

  return (
    <div className="formbold-main-wrapper ">
      <div className="formbold-form-wrapper px-4 py-4 QueryForm-size">
        <form onSubmit={handleForm}>
          <div className="formbold-mb-5 formbold-pt-3">
            <div className="flex flex-wrap formbold--mx-3">
              <div className="w-full sm:w-half formbold-px-3">
                <div className="formbold-mb-5">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Full Name"
                    className="formbold-form-input"
                    value={formValues.name}
                    onChange={handleInputChange}
                    required
                  />
                  {errors.name && <span className="error">{errors.name}</span>}
                </div>
              </div>

              <div className="w-full sm:w-half formbold-px-3">
                <div className="formbold-mb-5">
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="Phone Number"
                    className="formbold-form-input"
                    value={formValues.phone}
                    onChange={handleInputChange}
                    required
                  />
                  {errors.phone && (
                    <span className="error">{errors.phone}</span>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="formbold-mb-5">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Your Email"
              className="formbold-form-input"
              value={formValues.email}
              onChange={handleInputChange}
              required
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>

          <div className="formbold-mb-5">
            <select
              name="propertyType"
              id="propertyType"
              value={formValues.propertyType}
              onChange={handleInputChange}
              className="formbold-form-input"
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
          </div>

          <div className="formbold-mb-5">
            <select
              name="cityName"
              id="cityName"
              value={formValues.cityName}
              onChange={handleInputChange}
              className="formbold-form-input"
              required
            >
              <option value="">City Name</option>
              <option value="Noida">Noida</option>
              <option value="Bengaluru">Bengaluru</option>
              <option value="Moradabad">Moradabad</option>
              <option value="Lucknow">Lucknow</option>
              <option value="Gurugram">Gurugram</option>
              <option value="Pune">Pune</option>
              <option value="Ghaziabad">Ghaziabad</option>
            </select>
            {errors.cityName && (
              <span className="error">{errors.cityName}</span>
            )}
          </div>

          <div className="formbold-mb-5">
            <textarea
              placeholder="Message..."
              rows="5"
              cols="30"
              name="message"
              className="formbold-form-Textarea"
              value={formValues.message}
              onChange={handleInputChange}
              required
            />
            {errors.message && <span className="error">{errors.message}</span>}
          </div>

          <div>
            <button type="submit" className="formbold-btn">
              Submit Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default QueryForm2;
