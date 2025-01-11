import React from "react";
import "./Explore.css";
import { useNavigate } from "react-router-dom";
import { navigation } from "../../site/navigation";
const Explore = () => {
  const navigate = useNavigate();
  return (
    <div className="Explore page page-padding">
      <p className="page-title fade-down">Explore Blogs</p>
      <div className="explore-preview-wrapper fade-up">
        <BlogPreview
          onClick={() => navigate(navigation.viewPostPage.base + "/222")}
        />
        <BlogPreview
          onClick={() => navigate(navigation.viewPostPage.base + "/222")}
        />
        <BlogPreview
          onClick={() => navigate(navigation.viewPostPage.base + "/222")}
        />
        <BlogPreview
          onClick={() => navigate(navigation.viewPostPage.base + "/222")}
        />
        <BlogPreview
          onClick={() => navigate(navigation.viewPostPage.base + "/222")}
        />
        <BlogPreview
          onClick={() => navigate(navigation.viewPostPage.base + "/222")}
        />
        <BlogPreview
          onClick={() => navigate(navigation.viewPostPage.base + "/222")}
        />
        <BlogPreview
          onClick={() => navigate(navigation.viewPostPage.base + "/222")}
        />
        <BlogPreview
          onClick={() => navigate(navigation.viewPostPage.base + "/222")}
        />
        <BlogPreview
          onClick={() => navigate(navigation.viewPostPage.base + "/222")}
        />
        <BlogPreview
          onClick={() => navigate(navigation.viewPostPage.base + "/222")}
        />
      </div>
    </div>
  );
};

const BlogPreview = ({ onClick }) => {
  return (
    <div className="BlogPreview" onClick={onClick}>
      <div className="inner-blog-preview">
        <div className="left-wrapper">
          <div className="top-content">
            <p className="blog-title">
              Understanding the roles of a virtual assistants in day to day
              activities
            </p>
            <p className="blog-description">
              Virtual assistants (VAs) have revolutionized the way individuals
              and businesses manage their tasks and operations. From scheduling
              meetings and managing emails to conducting res...
            </p>
          </div>
          <div className="desktop-action action-wrapper">
            <div className="left-action">
              <div className="action-item">
                <i className="fa-solid fa-clock"></i>
                <p>Nov 12th, 2024</p>
              </div>
              <div className="action-item">
                <i className="fa-solid fa-heart"></i>
                <p>40.2k</p>
              </div>
              <div className="action-item">
                <i className="fa-solid fa-message"></i>
                <p>400</p>
              </div>
            </div>
            <i className="fa-light fa-bookmark"></i>
          </div>
        </div>
        <div className="right-wrapper">
          <img
            src="https://cdn.pixabay.com/photo/2021/06/20/20/31/woman-6351965_1280.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="mobile-action action-wrapper">
        <div className="left-action">
          <div className="action-item">
            <i className="fa-solid fa-clock"></i>
            <p>Nov 12th, 2024</p>
          </div>
          <div className="action-item">
            <i className="fa-solid fa-heart"></i>
            <p>40.2k</p>
          </div>
          <div className="action-item">
            <i className="fa-solid fa-message"></i>
            <p>400</p>
          </div>
        </div>
        <i className="fa-light fa-bookmark"></i>
      </div>
    </div>
  );
};

export default Explore;
