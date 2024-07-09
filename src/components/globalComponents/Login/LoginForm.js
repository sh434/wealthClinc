import { useState } from "react";
import ButtonDarkBlue from "../molecules/ButtonDarkBlue";
import InputCustom from "../molecules/InputCustom";

const initialLoginFields = {
  email: "",
  password: "",
};

const isFieldEmpty = (newObj) => {
  return newObj.email.trim() && newObj.password.trim();
};

const LoginForm = () => {
  const [loginField, setLoginField] = useState(initialLoginFields);
  const { email, password } = loginField;

  const handleLoginForm = (event) => {
    event.preventDefault();
    if (!isFieldEmpty(loginField)) console.log("something is missing");
    if (isFieldEmpty(loginField)) console.log(loginField);
  };

  const handleInputChange = (event) => {
    setLoginField({
      ...loginField,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div>
      <form onClick={handleLoginForm}>
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
          onChange={handleInputChange}
        />

        <ButtonDarkBlue name="Login" className="rounded-2" />
      </form>
    </div>
  );
};

export default LoginForm;
