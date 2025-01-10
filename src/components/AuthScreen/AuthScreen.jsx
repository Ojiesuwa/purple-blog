import React from "react";
import "./AuthScreen.css";
import useAuth from "../../hooks/useAuth";
import Loader from "../Loader/Loader";

const AuthScreen = () => {
  const { userCredential } = useAuth();

  if (userCredential === undefined)
    return (
      <div className="AuthScreen">
        <Loader isVisible={true} />
      </div>
    );
  else return null;
};

export default AuthScreen;
