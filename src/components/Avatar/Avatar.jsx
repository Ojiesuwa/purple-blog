import React, { useEffect, useState } from "react";
import "./Avatar.css";
const Avatar = () => {
  const [isListVisible, setIsListVisible] = useState(true);

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
            <select name="" id="">
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </select>
          </div>
          <div className="line"></div>

          <button>Signout</button>
        </div>
      )}
    </div>
  );
};

export default Avatar;
