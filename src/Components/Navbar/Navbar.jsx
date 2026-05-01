import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [humburgerClick, setHumburgerClick] = useState(false);
  const [bgColorHed, setBgColorHed] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 1) {
      setBgColorHed(true);
    } else {
      setBgColorHed(false);
    }
  };

  const handleClick = () => {
    setHumburgerClick(!humburgerClick);
  };

  window.addEventListener("scroll", changeColor);
  return (
    <>
      <div className={bgColorHed ? "header header-bg" : "header"}>
        <div className="logo-section">
          <h2 className="logo-text">
            <Link to="/" className="logo">
              {" "}
              <span className="logo-text-1">Port</span>
              <span className="logo-text-2">folio</span>
            </Link>
          </h2>
        </div>
        <div className="NavList-container">
          <ul className={humburgerClick ? "navLists active" : "navLists"}>
            <li>
              <Link to="/" className="navList-child1">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/project">Project</Link>
            </li>
            <li>
              <Link to="/experiences">Experiences</Link>
            </li>
            <li>
              <Link to="/skills">Skills</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        {/* for mobile devices */}
        {/* Hamburger icon */}
        <div className="humburger" onClick={handleClick}>
          {humburgerClick ? (
            <FaTimes size={20} style={{ color: "#fff", cursor: "pointer" }} />
          ) : (
            <FaBars size={20} style={{ color: "#fff", cursor: "pointer" }} />
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
