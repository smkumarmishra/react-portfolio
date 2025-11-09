import React from "react";
import "./AboutContent.css";
import { Link } from "react-router-dom";
import react1 from "../../assets/react1.jpg";
import react2 from "../../assets/react2.webp";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I ?</h1>
        <p>
          I am fully passionate ReactJS frontend developer. I create responsive
          secure website for my many clients..
        </p>
        <Link to="/contact">
          <button className="btn" style={{marginTop:"20px"}}>Contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={react1} alt="img" className="img" />
          </div>
          <div className="img-stack bottom">
            <img src={react2} alt="img" className="img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
