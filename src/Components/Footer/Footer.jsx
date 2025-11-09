import {
  FaFacebook,
  FaFacebookSquare,
  FaGit,
  FaGitSquare,
  FaHome,
  FaInstagram,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
} from "react-icons/fa";
import "./Footer.css";

import React from "react";
import { FaSquareInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size="20" style={{ color: "white", marginRight: "10px" }} />
            <div class="address">
              <h4>
                <p>Ameerpet Hyderabad</p>
                <p>India</p>
              </h4>
            </div>
          </div>
          <div className="phone">
            <h4>
              {" "}
              <FaPhone
                size="20"
                style={{ color: "white", marginRight: "10px" }}
              />{" "}
              +91-6205721723
            </h4>
          </div>
          <div className="email">
            <h4>
              {" "}
              <FaMailBulk
                size="20"
                style={{ color: "white", marginRight: "10px" }}
              />
              saurbhkmishra@gmail.com
            </h4>
          </div>
        </div>
        <div className="right">
          <div className="details">
            <h4>About the Portfolio</h4>
            <p>
              This is a personal websites where we show all of the skills which
              i learned and got from training or institute.
            </p>
          </div>
          <div className="social-icons">
            <a href="#" target="_blank">
              <FaInstagram
                size={20}
                style={{ color: "white", cursor: "pointer" }}
              />
            </a>
            <a href="https://www.linkedin.com/in/saurbh-mishra/">
              {" "}
              <FaLinkedin
                size={20}
                style={{
                  color: "white",
                  marginLeft: "20px",
                  cursor: "pointer",
                }}
              />
            </a>

            <FaFacebookSquare
              size={20}
              style={{ color: "white", marginLeft: "20px", cursor: "pointer" }}
            />
            <a href="https://github.com/smkumarmishra">
              <FaGitSquare
                size={20}
                style={{
                  color: "white",
                  marginLeft: "20px",
                  cursor: "pointer",
                }}
              />
            </a>
          </div>
        </div>
      </div>
      <center style={{ color: "white" }}>Project is underProcess </center>
    </div>
  );
};

export default Footer;
