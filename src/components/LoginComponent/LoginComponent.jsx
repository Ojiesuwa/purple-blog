import React, { useState } from "react";
import "./LoginComponent.css";
import Button from "../Button/Button";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";

const LoginComponent = ({ handleSwitchNav }) => {
  const { login } = useAuth();
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    if (!validateForm()) return;

    try {
      setIsLoading(true);
      console.log(loginDetails);
      await login(loginDetails);
      toast.success("Login successful!");
    } catch (error) {
      console.error(error);

      if (error.message.includes("auth/user-not-found"))
        return toast.error("No account found with this email");
      if (error.message.includes("auth/wrong-password"))
        return toast.error("Incorrect password");
      toast.error("Couldn't log you in");
    } finally {
      setIsLoading(false);
      setLoginDetails({ firstname: "", lastname: "" });
    }
  };

  const validateForm = () => {
    if (!loginDetails.email || !loginDetails.password) {
      toast.error("Both email and password are required");
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(loginDetails.email)) {
      toast.error("Invalid email format");
      return false;
    }
    return true;
  };

  return (
    <div
      className="LoginComponent modal-background fade"
      onClick={(e) => e.stopPropagation()}
    >
      <p className="auth-heading">Login</p>
      <div className="auth-form-wrapper">
        <div className="auth-container">
          <p>Email</p>
          <input
            type="text"
            placeholder="E.g JohnDoe@gmail.com"
            value={loginDetails.email}
            onChange={(e) =>
              setLoginDetails((prev) => ({ ...prev, email: e.target.value }))
            }
          />
        </div>
        <div className="auth-container">
          <p>Password</p>
          <input
            type="password" // Use "password" type to mask input
            placeholder="E.g 12ASS98"
            value={loginDetails.password}
            onChange={(e) =>
              setLoginDetails((prev) => ({ ...prev, password: e.target.value }))
            }
          />
        </div>
      </div>
      <div className="action-wrapper">
        <Button onClick={handleLogin} label={"Login"} isLoading={isLoading} />
        <p onClick={handleSwitchNav}>Create a new account</p>
      </div>
    </div>
  );
};

export default LoginComponent;
