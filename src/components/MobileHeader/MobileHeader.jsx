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
  const navigate = useNavigate();
  const [isRegVisible, setIsRegVisible] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [auth, setAuth] = useState("user");

  useEffect(() => {
    if (location.pathname === "/auth") {
      setIsRegVisible(true);
    }
  }, [location]);

  useEffect(() => {
    if (auth === "admin") {
      setIsNavVisible(true);
      navigate(navigation.dashboardPage.base);
    } else {
      navigate(navigation.homePage.base);
    }
  }, [auth]);
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
          <Avatar
            auth={auth}
            setAuth={() => {
              alert("Admin Priviledges are only allowed on desktop view");
            }}
          />
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
        auth={auth}
      />
    </div>
  );
};

const Navigation = ({ isVisible, onHideNav, auth }) => {
  const navigate = useNavigate();
  const { userCredential } = useAuth();
  return (
    <div className={`Navigation ${isVisible ? "nav-active" : "nav-inactive"}`}>
      {auth !== "admin" && userCredential ? (
        <>
          <div
            className="nav-wrapper"
            onClick={() => navigate(navigation.homePage.base)}
          >
            <p> Home </p>
          </div>
          <div
            className="nav-wrapper"
            onClick={() => navigate(navigation.explorePage.base)}
          >
            <p> Explore </p>
          </div>
          <div
            className="nav-wrapper"
            onClick={() => navigate(navigation.aboutPage.base)}
          >
            <p> About me </p>
          </div>
          <div
            className="nav-wrapper"
            onClick={() => navigate(navigation.savedPostsPage.base)}
          >
            <p> Saved </p>
          </div>{" "}
        </>
      ) : (
        <>
          <div
            className="nav-wrapper"
            onClick={() => navigate(navigation.homePage.base)}
          >
            <p> Home </p>
          </div>
          <div
            className="nav-wrapper"
            onClick={() => navigate(navigation.dashboardPage.base)}
          >
            <p> Dashboard </p>
          </div>
          <div
            className="nav-wrapper"
            onClick={() => navigate(navigation.manageBlogsPage.base)}
          >
            <p> Blogs </p>
          </div>
          <div
            className="nav-wrapper"
            onClick={() => navigate(navigation.userManagementPage.base)}
          >
            <p> Account </p>
          </div>
        </>
      )}
      <div className="nav-wrapper">
        <i className="fa-light fa-circle-chevron-up" onClick={onHideNav}></i>
      </div>
    </div>
  );
};

export default MobileHeader;
