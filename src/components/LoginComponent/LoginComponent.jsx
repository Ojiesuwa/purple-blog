import React from "react";

const LoginComponent = ({ handleSwitchNav }) => {
  return (
    <div className="LoginComponent" onClick={(e) => e.stopPropagation()}>
      {" "}
      <div className="SignupComponent modal-background fade">
        <p className="auth-heading">Login</p>
        <div className="auth-form-wrapper">
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
          <button>Login</button>
          <p onClick={handleSwitchNav}> Create a new account</p>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
