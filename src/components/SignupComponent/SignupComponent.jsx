import React, { useState } from "react";
import "./SignupComponent.css";
import Button from "../Button/Button";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";

const SignupComponent = ({ handleSwitchNav, onFinish }) => {
  const { signup } = useAuth();
  const [signUpDetails, setSignupDetails] = useState({
    firstname: "",
    lastname: "",
    middlename: "",
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSignup = async () => {
    try {
      setIsLoading(true);
      console.log(signUpDetails);
      await signup(signUpDetails);
      toast("Account succesfully created");
      onFinish();
    } catch (error) {
      console.error(error);

      if (error.message.includes("auth/invalid-email"))
        return toast.error("Error with supplied information");
      if (error.message.includes("auth/email-already-in-use"))
        return toast.error("Your account already exists");
      toast.error("Couldn't sign you up");
    } finally {
      setIsLoading(false);
    }
  };
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
            <input
              type="text"
              placeholder="E.g Gabriel"
              value={signUpDetails.firstname}
              onChange={(e) =>
                setSignupDetails((p) => ({ ...p, firstname: e.target.value }))
              }
            />
          </div>
          <div className="auth-container">
            <p>Lastname</p>
            <input
              type="text"
              placeholder="E.g Freddy"
              value={signUpDetails.lastname}
              onChange={(e) =>
                setSignupDetails((p) => ({ ...p, lastname: e.target.value }))
              }
            />
          </div>
        </div>
        <div className="auth-container">
          <p>Middlename</p>
          <input
            type="text"
            placeholder="E.g Daniel"
            value={signUpDetails.middlename}
            onChange={(e) =>
              setSignupDetails((p) => ({ ...p, middlename: e.target.value }))
            }
          />
        </div>
        <div className="auth-container">
          <p>Email</p>
          <input
            type="text"
            placeholder="E.g JohnDoe@gmail.com"
            value={signUpDetails.email}
            onChange={(e) =>
              setSignupDetails((p) => ({ ...p, email: e.target.value }))
            }
          />
        </div>
        <div className="auth-container">
          <p>Password</p>
          <input
            type="text"
            placeholder="E.g 12ASS98"
            value={signUpDetails.password}
            onChange={(e) =>
              setSignupDetails((p) => ({ ...p, password: e.target.value }))
            }
          />
        </div>
      </div>
      <div className="action-wrapper">
        <Button onClick={handleSignup} label={"Signup"} isLoading={isLoading} />
        <p onClick={handleSwitchNav}>Login to a registered account</p>
      </div>
    </div>
  );
};

export default SignupComponent;
