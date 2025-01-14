import React, { useEffect, useState } from "react";
import "./ViewPost.css";
import CommentComponent from "../../components/CommentComponent/CommentComponent";
import BlogComponent from "../../components/BlogComponent/BlogComponent";

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
        <div className="blog-content fade-up">
          <BlogComponent
            component={{
              type: "cover-image",
              imageUrl:
                "https://cdn.pixabay.com/photo/2016/03/27/17/40/man-1283231_1280.jpg",
            }}
          />
          <BlogComponent
            component={{
              type: "heading-one",
              text: "Introduction",
            }}
          />
          <BlogComponent
            component={{
              type: "paragraph",
              text: `In today’s fast-paced world, keeping up with endless tasks and responsibilities can feel overwhelming. From managing schedules to responding to emails, the sheer number of daily demands can leave little room for creativity or meaningful work. That’s where virtual assistants step in to save the day.
              Whether powered by cutting-edge AI or human expertise, virtual assistants are becoming indispensable tools for individuals and businesses alike. These digital helpers are designed to streamline your life, tackling time-consuming tasks and giving you back the hours you need to focus on what truly matters.
              In this post, we’ll explore how virtual assistants can revolutionize your productivity, making it easier than ever to stay organized, efficient, and ahead of the game.`,
            }}
          />
          <BlogComponent
            component={{
              type: "image",
              imageUrl:
                "https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_1280.jpg",
              label: "Image by John Doe",
            }}
          />
        </div>
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
