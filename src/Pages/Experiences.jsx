import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import HeroImg from "../Components/Hero/HeroImg";
import "./Experiences.css";

const Experiences = () => {
  const experiences = [
    {
      role: "UI Developer Intern",
      company: "Superchat LLC",
      companyUrl: "https://superchat.in/",
      dateRange: "Nov 2025 — Mar 2026",
      location: "Hyderabad, India",
      highlights: [
        "Worked on multiple real-world, fast-paced product builds.",
        "Contributed to projects: Accrehealth, Strikin, SuperchatAI.",
      ],
      tags: ["React", "UI Engineering", "Reusable Components", "Collaboration"],
    },
  ];

  return (
    <div className="exp-page">
      <Navbar />
      <HeroImg
        heading="Experiences."
        paraText="A quick snapshot of roles and projects I've worked on."
        buttonText="Back To Home"
      />

      <section className="exp-wrap">
        <div className="exp-timeline">
          {experiences.map((exp) => (
            <article
              key={`${exp.role}-${exp.company}-${exp.dateRange}`}
              className="exp-card"
            >
              <div className="exp-role">
                <h3>
                  {exp.role} —{" "}
                  <a
                    href={exp.companyUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${exp.company} website`}
                  >
                    {exp.company}
                  </a>
                </h3>
              </div>

              <div className="exp-meta">
                <span className="chip">{exp.dateRange}</span>
                <span className="chip">{exp.location}</span>
              </div>

              <ul className="exp-points">
                {exp.highlights.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>

              {exp.tags?.length ? (
                <div className="exp-tags" aria-label="Skills and tools">
                  {exp.tags.map((tag) => (
                    <span key={tag} className="exp-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Experiences;
