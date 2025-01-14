import React, { useEffect } from "react";
import "./BlogSelect.css";
const BlogSelect = ({ visible, onHide }) => {
  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        onHide();
      }
    });

    return () => {
      document.removeEventListener("keydown", (e) => {
        if (e.key === "Escape") {
          onHide();
        }
      });
    };
  }, []);
  if (!visible) return null;
  return (
    <div className="BlogSelect fade">
      <div className="header-wrapper">
        <p className="modal-title">Select blog</p>
        <i className="fa-regular fa-xmark cancel-modal" onClick={onHide}></i>
      </div>
      <div className="preview-wrapper">
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
      </div>
      <div className="button-wrapper">
        <button>Select</button>
      </div>
    </div>
  );
};

const BlogItem = () => {
  return (
    <div className="BlogItem">
      <img
        src="https://cdn.pixabay.com/photo/2016/03/27/17/40/man-1283231_1280.jpg"
        alt=""
      />
      <div className="text-wrapper">
        <p className="blog-title">A blog title that is relevant to purple</p>
        <div className="blog-date">Wednesday, July 2025</div>
      </div>
    </div>
  );
};
export default BlogSelect;
