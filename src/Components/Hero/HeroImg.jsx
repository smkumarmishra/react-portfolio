import { Link } from "react-router-dom";
import "./HeroImg.css";
import React from "react";
import { BiRightArrow } from "react-icons/bi";
import { MdOutlineArrowBackIos } from "react-icons/md";

const HeroImg = (props) => {
  return (
    <div className="hero-img">
      <div className="heading">
        <h1>{props.heading}</h1>
        <p>{props.paraText}</p>
        <div className="btnDiv">
          <Link className="btnLink" to="/">
            <MdOutlineArrowBackIos size="15" style={{ color: "white" }} />

            {props.buttonText}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
