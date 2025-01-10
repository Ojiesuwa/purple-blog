import React from "react";
import "./SignupComponent.css";

const SignupComponent = ({ handleSwitchNav }) => {
  return (
    <div
      className="SignupComponent modal-background fade"
      onClick={(e) => e.stopPropagation()}
    >
      <p className="auth-heading">Signup</p>
      <div className="auth-form-wrapper">
        <div className="name-wrapper">
          <div className="auth-container">
            <p>Firstname</p>
            <input type="text" placeholder="E.g Gabriel" />
          </div>
          <div className="auth-container">
            <p>Lastname</p>
            <input type="text" placeholder="E.g Freddy" />
          </div>
        </div>
        <div className="auth-container">
          <p>Other names</p>
          <input type="text" placeholder="E.g Daniel" />
        </div>
        <div className="auth-container">
          <p>Email</p>
          <input type="text" placeholder="E.g JohnDoe@gmail.com" />
        </div>
        <div className="auth-container">
          <p>Password</p>
          <input type="text" placeholder="E.g 12ASS98" />
        </div>
      </div>
      <div className="action-wrapper">
        <button>Signup</button>
        <p onClick={handleSwitchNav}>Login to a registered account</p>
      </div>
    </div>
  );
};

export default SignupComponent;
