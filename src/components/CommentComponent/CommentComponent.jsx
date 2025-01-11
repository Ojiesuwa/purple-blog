import React from "react";
import "./CommentComponent.css";

const CommentComponent = ({ isVisible, onHide }) => {
  console.log(isVisible);

  return (
    <div
      className={`CommentComponent ${
        isVisible ? "comment-active" : "comment-inactive"
      }`}
      onClick={(e) => e.stopPropagation()}
    >
      <div className="control-wrapper" onClick={onHide}>
        <i className="fa-regular fa-chevron-right"></i>
        <i className="fa-regular fa-chevron-down"></i>
      </div>
      <div className="preview-wrapper">
        <SingleComment />
        <SingleComment />
        <SingleComment />
        <SingleComment />
        <SingleComment />
      </div>
      <div className="input-wrapper">
        <input type="text" placeholder="Write your thoughts" />
        <button>Share</button>
      </div>
    </div>
  );
};

const SingleComment = ({ comment }) => {
  return (
    <div className="SingleComment">
      <img
        src="https://cdn.pixabay.com/photo/2021/06/20/20/31/woman-6351965_1280.jpg"
        alt=""
        className="account-image"
      />
      <div className="text-content">
        <p className="account-name">Jason Statham</p>
        <p className="comment-date">12th October, 2024</p>
        <p className="comment-text">
          This is very Impressive. You can work on your structures but this is
          really impressive. Weldone Purple
        </p>
      </div>
    </div>
  );
};

export default CommentComponent;
