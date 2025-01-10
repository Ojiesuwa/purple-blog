import React from "react";
import "./Landing.css";
import HeroImage from "../../assets/hero1.png";
import { useNavigate } from "react-router-dom";
import { navigation } from "../../site/navigation";

const Landing = () => {
  const navigate = useNavigate();
  return (
    <div className="Landing page">
      <div className="left-wing fade-right">
        <img src={HeroImage} alt="/" />
      </div>
      <div className="right-wing">
        <p className="big-hero-text accent-text fade-up">Unleashing Ideas,</p>
        <p className="big-hero-text fade-up">One Post at a Time</p>
        <p className="small-hero-text fade-up">
          Dive into ideas, insights, and inspiration tailored just for you
        </p>
        <button className="fade-up" onClick={() => navigate("/auth")}>
          Get started
        </button>
      </div>
    </div>
  );
};

export default Landing;
