import React, { useEffect, useState } from "react";
import "./ViewPost.css";
import CommentComponent from "../../components/CommentComponent/CommentComponent";

const ViewPost = () => {
  const [commentVisible, setCommentVisible] = useState(false);
  useEffect(() => {
    document.addEventListener("click", (e) => {
      setCommentVisible(false);
    });

    return () => {
      document.removeEventListener("click", (e) => {
        setCommentVisible(false);
      });
    };
  }, []);
  return (
    <div className="ViewPost page">
      <div className="main-container">
        <div className="blog-header">
          <p className="post-title fade-down">
            10 Ways Virtual Assistants Can Transform Your Productivity
          </p>
          <div className="information-wrapper fade-up">
            <div className="left-wrapper">
              <img
                src="https://cdn.pixabay.com/photo/2021/06/20/20/31/woman-6351965_1280.jpg"
                alt=""
                className="author-image"
              />
              <div>
                <p className="author-name">Okori Mercy Eberechukwu</p>
                <p className="post-date">Published on 12th October, 2024</p>
              </div>
            </div>
            <div className="right-wrapper">
              <div className="action-wrapper">
                <i className="fa-light fa-heart"></i>
                <p>12k</p>
              </div>
              <div className="action-wrapper">
                <i
                  className="fa-light fa-message"
                  onClick={(e) => {
                    e.stopPropagation();
                    setCommentVisible(true);
                  }}
                ></i>
                <p>12k</p>
              </div>
              <div className="action-wrapper">
                <i className="fa-light fa-bookmark"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="line fade-up"></div>
      </div>
      <div className="mobile-action-wrapper fade-up">
        <div className="mobile-inner">
          <div className="action-wrapper">
            <i className="fa-light fa-heart"></i>
            <p>12k</p>
          </div>
          <div className="action-wrapper">
            <i
              className="fa-light fa-message"
              onClick={(e) => {
                e.stopPropagation();
                setCommentVisible(true);
              }}
            ></i>
            <p>12k</p>
          </div>
          <div className="action-wrapper">
            <i className="fa-light fa-bookmark"></i>
          </div>
        </div>
      </div>
      <CommentComponent
        isVisible={commentVisible}
        onHide={() => setCommentVisible(false)}
      />
    </div>
  );
};

export default ViewPost;
