import React, { useEffect, useState } from "react";
import "./Header.css";
import SearchBar from "../SearchBar/SearchBar";
import Avatar from "../Avatar/Avatar";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { navigation } from "../../site/navigation";
import useAuth from "../../hooks/useAuth";
import Register from "../Register/Register";
import { useTheme } from "../../hooks/useTheme";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { theme } = useTheme();
  const { userCredential, accountData } = useAuth();
  const [navIndex, setNavIndex] = useState(0);
  const [isRegVisible, setIsRegVisible] = useState(false);
  const [auth, setAuth] = useState(
    location.pathname.includes("admin") ? "admin" : "user"
  );

  console.log(auth);

  // Bruteforce correction for the admin user

  useEffect(() => {
    if (!accountData) return;
    if (!userCredential) return;
    if (location.pathname.includes("admin") && !accountData?.admin) {
      navigate(navigation.homePage.base);
      setAuth("user");
      alert("You do not have access to this page");
    }
  }, [location, accountData]);

  useEffect(() => {
    const handleHideReg = (e) => {
      if (e.key === "Escape") {
        setIsRegVisible(false);
      }
    };

    document.addEventListener("keydown", handleHideReg);

    return () => {
      document.removeEventListener("keydown", handleHideReg);
    };
  }, []);

  useEffect(() => {
    if (userCredential) {
      setIsRegVisible(false);
    }
  }, [userCredential]);

  useEffect(() => {
    if (location.pathname === "/auth") {
      setIsRegVisible(true);
    }
  }, [location]);

  useEffect(() => {
    if (userCredential === undefined) return;
    if (userCredential === null || accountData?.admin) {
      setAuth("user");
      navigate(navigation.homePage.base);
    }
  }, [userCredential]);

  useEffect(() => {
    switch (location.pathname) {
      case navigation.homePage.base:
        setNavIndex(0);
        break;
      case navigation.explorePage.base:
      case navigation.dashboardPage.base:
        setNavIndex(1);
        break;
      case navigation.aboutPage.base:
      case navigation.manageBlogsPage.base:
        setNavIndex(2);
        break;
      case navigation.savedPostsPage.base:
      case navigation.userManagementPage.base:
        setNavIndex(3);
        break;
      default:
        setNavIndex(0);
    }
    if (location.pathname.includes(navigation.manageBlogsPage.base)) {
      setNavIndex(2);
    }
  }, [location]);

  return (
    <div className="Header fade-down">
      <div className="left-wing">
        <p className="logo-name">Mercy's Blog</p>
      </div>
      <div className="center-wing">
        <div className="nav-indicator" style={{ left: navIndex * 90 }}></div>
        {auth !== "admin" ? (
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
      </div>
      <div className="right-wing">
        <SearchBar />
        {userCredential ? (
          <Avatar
            auth={auth}
            setAuth={(data) => {
              setAuth(data);
              if (data === "admin") {
                navigate(navigation.dashboardPage.base);
              } else {
                navigate(navigation.homePage.base);
              }
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
    </div>
  );
};

export default Header;
