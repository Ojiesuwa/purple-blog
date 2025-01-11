import React, { useEffect, useState } from "react";
import "./MobileHeader.css";
import "../Header/Header.css";
import useAuth from "../../hooks/useAuth";
import Register from "../Register/Register";
import Avatar from "../Avatar/Avatar";
import SearchBar from "../SearchBar/SearchBar";
import { useLocation, useNavigate } from "react-router-dom";
import { navigation } from "../../site/navigation";
const MobileHeader = () => {
  const { userCredential } = useAuth();
  const location = useLocation();
  const [isRegVisible, setIsRegVisible] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(false);

  useEffect(() => {
    if (location.pathname === "/auth") {
      setIsRegVisible(true);
    }
  }, [location]);
  return (
    <div className="MobileHeader Header">
      <div className="left-wing">
        <i
          className="fa-solid fa-bars"
          onClick={() => setIsNavVisible(true)}
        ></i>
      </div>

      <div className="middle-wing">
        <p className="logo-name">Mercy's Blog</p>
      </div>
      <div className="right-wing">
        {userCredential ? (
          <Avatar />
        ) : (
          <button className="login-btn" onClick={() => setIsRegVisible(true)}>
            Login
          </button>
        )}
      </div>
      <Register
        isVisible={isRegVisible}
        onHideReg={() => setIsRegVisible(false)}
      />
      <Navigation
        isVisible={isNavVisible}
        onHideNav={() => setIsNavVisible(false)}
      />
    </div>
  );
};

const Navigation = ({ isVisible, onHideNav }) => {
  const navigate = useNavigate();
  return (
    <div className={`Navigation ${isVisible ? "nav-active" : "nav-inactive"}`}>
      <div
        className="nav-wrapper"
        onClick={() => {
          onHideNav();
          navigate(navigation.homePage.base);
        }}
      >
        <p> Home </p>
      </div>
      <div
        className="nav-wrapper"
        onClick={() => {
          onHideNav();
          navigate(navigation.explorePage.base);
        }}
      >
        <p> Explore </p>
      </div>
      <div
        className="nav-wrapper"
        onClick={() => {
          onHideNav();
          navigate(navigation.aboutPage.base);
        }}
      >
        <p> About me </p>
      </div>
      <div
        className="nav-wrapper"
        onClick={() => {
          onHideNav();
          navigate(navigation.savedPostsPage.base);
        }}
      >
        <p> Saved </p>
      </div>
      <div className="nav-wrapper">
        <i className="fa-light fa-circle-chevron-up" onClick={onHideNav}></i>
      </div>
    </div>
  );
};

export default MobileHeader;
