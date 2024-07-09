import { useState } from "react";

import InputCustom from "../molecules/InputCustom";
import ButtonDarkBlue from "../molecules/ButtonDarkBlue";
import PopUpCard from "../PopUpCard/PopUpCard";

import { sendWhatsApp, submitForm } from "./form.services";
import { COMPANY_SECONDARY_LOGO } from "../../../assets/constants/companyLogos";

const initialFormFields = {
  name: "",
  phone: "",
  email: "",
};

const isFieldEmpty = (newObj) => {
  return newObj.email.trim() && newObj.phone.trim() && newObj.name.trim();
};

const centerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const popPupStyle = {
  top: 0,
  left: 0,
  height: "100%",
  width: "100%",
};

const callBackFormContainer = {
  ...centerStyle,
  flexDirection: "column",
  background: "#fff",
  width: "300px",
  height: "350px",
  borderRadius: ".25rem",
};

const CallBackPopUpForm = ({ isOpen, onClose }) => {
  return (
    <PopUpCard
      isOpen={isOpen}
      onClose={onClose}
      style={popPupStyle}
      removeBtn={false}
    >
      <CallBackForm onClose={onClose} />
    </PopUpCard>
  );
};

export default CallBackPopUpForm;

export function CompanyLogoSection({ onClose, hideCloseBtn }) {
  return (
    <div className="d-flex pb-3 justify-content-between w-75">
      <div className="logoOnLoginForm">
        <img
          alt="company-logo"
          src={COMPANY_SECONDARY_LOGO}
          className="w-100"
        />
      </div>
      {hideCloseBtn && (
        <button onClick={onClose} className="closeBtn">
          X
        </button>
      )}
    </div>
  );
}

export function CallBackForm({
  onClose,
  hideCloseBtn = true,
  styleForm,
  formBtnText,
  ...props
}) {
  const [formField, setFormField] = useState(initialFormFields);
  const { name, phone, email } = formField;

  const handleLoginForm = async (event) => {
    event.preventDefault();
    if (!isFieldEmpty(formField)) {
      alert("Something is missing");
      return;
    }

    // if (window.Email) {
    //   sendEmail(formField);
    // } else {
    //   console.error("window.Email is not defined");
    // }

    sendWhatsApp(formField);
    await submitForm(formField);
    setFormField(initialFormFields);
  };

  const handleInputChange = (event) => {
    setFormField({
      ...formField,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="center-item h-100" {...props}>
      <div style={callBackFormContainer} className={`${styleForm} center-item`}>
        <CompanyLogoSection onClose={onClose} hideCloseBtn={hideCloseBtn} />
        <form onSubmit={handleLoginForm}>
          <InputCustom
            placeholder="Enter Name"
            className="border px-3 rounded-2 w-100"
            value={name}
            name="name"
            onChange={handleInputChange}
          />
          <InputCustom
            placeholder="Enter Phone"
            className="border px-3 rounded-2"
            value={phone}
            name="phone"
            onChange={handleInputChange}
          />
          <InputCustom
            placeholder="Enter Email"
            className="border px-3 rounded-2 w-100"
            value={email}
            name="email"
            onChange={handleInputChange}
          />
          <ButtonDarkBlue
            name={formBtnText || "Get Call Back"}
            className="rounded-2"
          />
        </form>
      </div>
    </div>
  );
}
