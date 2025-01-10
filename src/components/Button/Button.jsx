import React from "react";
import "./Button.css";
import Loader from "../../assets/loading.gif";

const Button = ({
  label,
  isLoading,
  loadingText,
  disabled,
  classname,
  onClick,
}) => {
  if (!isLoading)
    return (
      <button className={classname} disabled={disabled} onClick={onClick}>
        {label}
      </button>
    );
  else
    return (
      <button className={classname} disabled>
        <img src={Loader} alt="/" className="" />
        {loadingText}
      </button>
    );
};

export default Button;
