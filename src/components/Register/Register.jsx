import React, { useState } from "react";
import "./Register.css";
import SignupComponent from "../SignupComponent/SignupComponent";
import LoginComponent from "../LoginComponent/LoginComponent";
const Register = ({ isVisible, onHideReg }) => {
  const [regMode, setRegMode] = useState(true); // true = login, false = signup
  return (
    <div
      className={`Register ${isVisible ? "visible-active" : "visble-inactive"}`}
      onClick={onHideReg}
    >
      {regMode ? (
        <LoginComponent
          handleSwitchNav={() => setRegMode(false)}
          onFinish={onHideReg}
        />
      ) : (
        <SignupComponent
          handleSwitchNav={() => setRegMode(true)}
          onFinish={onHideReg}
        />
      )}
    </div>
  );
};

export default Register;
