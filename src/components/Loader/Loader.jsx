import React from "react";
import "./Loader.css";
import Logo from "../../assets/logo.png";

const Loader = ({ isVisible }) => {
  if (!isVisible) return null;
  return (
    <div className="Loader">
      <img src={Logo} alt="/" className="anim-infinite-scale" />
    </div>
  );
};

export default Loader;
