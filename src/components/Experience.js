import React from "react";

const jobs = [
  {
    period: "Apr 2025 – Current",
    title: "Software Associate Developer",
    stack: "MERN / MEAN Stack · React Native · Flutter",
  },
  {
    period: "Aug 2024 – Apr 2025",
    title: "Trainee Software Associate",
    stack: "MERN / MEAN Stack · React Native",
  },
  {
    period: "Jul 2023 – Jul 2024",
    title: "Freelancer — Full-Stack Developer",
    stack: "MERN / MEAN Stack · React Native",
  },
];

const Experience = () => (
  <div className="experience-section">
    <div className="gh-section-head gh-reveal">
      <span className="gh-label">Experience</span>
      <h1 className="boldHeading">Work History</h1>
    </div>

    <div className="timeline-list gh-reveal gh-reveal-d1">
      {jobs.map((job, i) => (
        <div className="timeline-item" key={i}>
          <div className="timeline-dot" />
          <div className="timeline-card">
            <span className="timeline-badge">{job.period}</span>
            <h3 className="timeline-title">{job.title}</h3>
            <p className="timeline-stack">{job.stack}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Experience;
