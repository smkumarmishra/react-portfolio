import React, { useState } from "react";
import "./SkillsCard.css";
import { toast, ToastContainer } from "react-toastify";
import skillsData from "./SkillsData";

const SkillsCard = () => {
  const [showAll, setShowAll] = useState(false); // state for toggle

  const notify = () => toast.success("Resume Downloaded Successfully!");

  //  if showAll false => only 3, else all

  const displayedSkills = showAll ? skillsData : skillsData.slice(0, 3);

  return (
    <>
      <section
        className="skills"
        style={{ marginTop: "10px", marginBottom: "50px", padding: "20px 0" }}
      >
        <h2 className="heading-text">Skills</h2>

        {/*  Skills mapping */}
        <div className="skill-container">
          {displayedSkills.map((skill) => (
            <div className="icon-container" key={skill.id}>
              <i className={skill.iconClass} style={{ color: skill.color }}></i>
              <p>{skill.title}</p>
              <p className="text-diff">
                {skill.desc}{" "}
                <a href={skill.link} target="_blank" rel="noopener noreferrer">
                  Learn more
                </a>
              </p>
            </div>
          ))}
        </div>
      </section>
      <div style={{ textAlign: "center" }}>
        {skillsData.length > 3 && (
          <button onClick={() => setShowAll(!showAll)} className="btn">
            {showAll ? "Show Less" : "Show More"}
          </button>
        )}
      </div>

      {/* Resume section */}
      <section style={{ marginTop: "100px", marginBottom: "80px" }}>
        <div className="resume-section">
          <ToastContainer
            position="top-right"
            autoClose={3000}
            closeOnClick
            pauseOnHover
            theme="colored"
          />
          <button className="download-btn" onClick={notify}>
            <a
              href="https://flowcv.com/resume/0hlckn6h7r88"
              download
              rel="noopener noreferrer"
            >
              Download Resume
            </a>
          </button>
          <a
            href="https://flowcv.com/resume/0hlckn6h7r88"
            target="_blank"
            rel="noopener noreferrer"
            className="download-btn"
          >
            View Resume
          </a>
        </div>
      </section>
    </>
  );
};

export default SkillsCard;
