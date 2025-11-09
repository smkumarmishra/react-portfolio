import React, { useState } from "react";
import "./WorkCard.css";

import workcardData from "./WorkcardData.js";
import WorkCard from "./WorkCard.jsx";

const Work = ({ workcardData }) => {
  const [showAll, setShowAll] = useState(false);

  // sirf 6 project dikhane ka logic
  const displayedProjects = showAll ? workcardData : workcardData.slice(0, 3);
  return (
    <div className="work-container">
      <div className="project-heading">
        <div className="project-container">
          {displayedProjects.length > 0 ? (
            displayedProjects.map((data, id) => (
              <WorkCard
                key={id}
                imgsrc={data.imgsrc}
                title={data.title}
                text={data.text}
                source={data.source}
                view={data.view}
              />
            ))
          ) : (
            <center>
              <h1 style={{ color: "white" }}> No Project Found !</h1>
            </center>
          )}
        </div>
        {/* 👇 Show More / Show Less Button */}
        {workcardData.length > 3 && (
          <button onClick={() => setShowAll(!showAll)} className="btn">
            {showAll ? "Show Less" : "Show More"}
          </button>
        )}
      </div>
    </div>
  );
};

export default Work;
