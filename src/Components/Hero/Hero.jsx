import "./Hero.css";
import React from "react";
import introImg from "../../assets/intro-bg.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={introImg} alt="" />
      </div>
      <div className="content">
        <h4>HI, I'M WELL TRAINED FRESHER....</h4>
        <h1>Full Stack Web Developer</h1>
        <h2>ReactJS Developer</h2>
        <div className="btn-container">
          <Link to="/project" className="btn">
            Project
          </Link>
          <Link to="/contact" className="btn-light">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
