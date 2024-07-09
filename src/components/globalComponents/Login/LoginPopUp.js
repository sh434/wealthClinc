import { useState } from "react";

import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

import "./loginPopUp.css";

const LoginPopUp = ({ onClose }) => {
  const [isLogin, setIsLogin] = useState(false);

  const handleFormType = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="login-popup">
      <div className="login-popup-content">
        <div className="login-popup-heading">
          <div className="logoOnLoginForm">
            <img
              alt=""
              src="https://www.wealth-clinic.com/frontend/images/WC%20Logo-black.png"
              className="w-100"
            />
          </div>
          <button onClick={onClose} className="closeBtn">
            X
          </button>
        </div>

        <div>
          {isLogin ? <LoginForm /> : <RegisterForm />}

          <div className="formModeSwitcher">
            {isLogin ? (
              <div onClick={handleFormType}>
                Don't have an account? <span>Register Now</span>
              </div>
            ) : (
              <div onClick={handleFormType}>
                Already have account? <span>Login Now</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPopUp;
