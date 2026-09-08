import React from "react";

const degrees = [
  {
    year: "2024",
    title: "Master of Computer Application",
    institution: "AKTU University, Lucknow",
  },
  {
    year: "2022",
    title: "Bachelor of Computer Application",
    institution: "MCRP University, Bhopal",
  },
];

const Education = () => (
  <div className="education-section">
    <div className="gh-section-head gh-reveal">
      <span className="gh-label">Education</span>
      <h1 className="boldHeading">Academic Background</h1>
    </div>

    <div className="timeline-list gh-reveal gh-reveal-d1">
      {degrees.map((deg, i) => (
        <div className="timeline-item" key={i}>
          <div className="timeline-dot" />
          <div className="timeline-card">
            <span className="timeline-badge">{deg.year}</span>
            <h3 className="timeline-title">{deg.title}</h3>
            <p className="timeline-stack">{deg.institution}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Education;
