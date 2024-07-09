import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";

import ButtonDarkBlue from "../molecules/ButtonDarkBlue";

import { postMethod } from "../../../services/api.service";
import InputCustom from "../molecules/InputCustom";
import "react-toastify/dist/ReactToastify.css";
import { getFullUrlLocal } from "../../../assets/constants/apiUrls";

const initialRegisterFields = {
  name: "",
  phone: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const isFieldEmpty = (newObj) => {
  return (
    newObj.name.trim() &&
    newObj.phone.trim() &&
    newObj.email.trim() &&
    newObj.password.trim() &&
    newObj.confirmPassword.trim()
  );
};

const RegisterForm = () => {
  const url = getFullUrlLocal("/api/auth/local/register");
  const [registerField, setRegisterField] = useState(initialRegisterFields);
  const { name, phone, email, password, confirmPassword } = registerField;

  const handleRegisterForm = async (event) => {
    event.preventDefault();

    if (!isFieldEmpty(registerField)) {
      toast.error("All fields are required.");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    // const registerToken = await
    postMethod(url, {
      username: name,
      email: email,
      password: password,
    });
    // console.log(registerToken);
    setRegisterField(initialRegisterFields);
  };

  const handleInputChange = (event) => {
    setRegisterField({
      ...registerField,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div>
      <form onSubmit={handleRegisterForm}>
        <InputCustom
          placeholder="Enter Name"
          className="border px-3 rounded-2"
          value={name}
          name="name"
          onChange={handleInputChange}
        />
        <InputCustom
          placeholder="Enter Phone (optional)"
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
        <InputCustom
          placeholder="Enter Password"
          className="border px-3 rounded-2"
          value={password}
          name="password"
          type="password"
          onChange={handleInputChange}
        />
        <InputCustom
          placeholder="Enter Confirm Password"
          className="border px-3 rounded-2"
          value={confirmPassword}
          name="confirmPassword"
          type="password"
          onChange={handleInputChange}
        />
        <ButtonDarkBlue name="Register" className="rounded-2" type="submit" />
      </form>
      <ToastContainer />
    </div>
  );
};

export default RegisterForm;
