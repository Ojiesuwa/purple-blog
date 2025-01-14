import React, { useEffect, useState } from "react";
import "./Avatar.css";
import useAuth from "../../hooks/useAuth";
import { useTheme } from "../../hooks/useTheme";
const Avatar = ({ auth, setAuth }) => {
  const { signout } = useAuth();
  const { theme, changeTheme } = useTheme();
  const { userCredential, accountData } = useAuth();
  const [isListVisible, setIsListVisible] = useState(false);

  useEffect(() => {
    document.addEventListener("click", (e) => {
      setIsListVisible(false);
    });

    return () => {
      document.removeEventListener("click", (e) => {
        setIsListVisible(false);
      });
    };
  }, []);
  return (
    <div
      className="Avatar"
      onClick={(e) => {
        e.stopPropagation();
        setIsListVisible((p) => !p);
      }}
    >
      <img
        src="https://cdn.pixabay.com/photo/2021/06/20/20/31/woman-6351965_1280.jpg"
        alt=""
      />
      {isListVisible ? (
        <i className="fa-light fa-chevron-up"></i>
      ) : (
        <i className="fa-light fa-chevron-down"></i>
      )}

      {isListVisible && (
        <div className="action-list fade" onClick={(e) => e.stopPropagation()}>
          <p className="account-name">Oluwarotimi Temidire</p>
          <p className="account-email">oluwarotimiadeola@gmail.com</p>
          <div className="line"></div>
          <div className="category">
            <p className="category-title">Theme</p>
            <select
              name=""
              id=""
              value={theme}
              onChange={(e) => changeTheme(e.target.value)}
            >
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </select>
          </div>
          <div className="line"></div>
          {accountData.admin && (
            <>
              <div className="category">
                <p className="category-title">Authorization</p>
                <select
                  name=""
                  id=""
                  value={auth}
                  onChange={(e) => {
                    setAuth(e.target.value);
                    setIsListVisible(false);
                  }}
                >
                  <option value="admin">Admin</option>
                  <option value="user">User</option>
                </select>
              </div>
              <div className="line"></div>
            </>
          )}

          <button onClick={signout}>Signout</button>
        </div>
      )}
    </div>
  );
};

export default Avatar;
