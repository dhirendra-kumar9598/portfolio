import React, { useContext } from "react";
import Skills from "./Skills";
import Education from "./Education";
import Experience from "./Experience";

import Boy from "../assets/images/characters/laptop.png";
import { ThemeContext } from "../theme";

const About = () => {
  const theme = useContext(ThemeContext).systemTheme;

  return (
    <div id="about">
      <div className="gh-section-head gh-reveal">
        <span className="gh-label">About</span>
        <h1 className="boldHeading">My Story</h1>
      </div>

      <div className="aboutBox">
        <div className="gh-reveal gh-reveal-d1">
          <img loading="lazy" src={Boy} className="aboutImage" alt="Dhirendra Kumar" />
        </div>

        <div className="gh-reveal gh-reveal-d2">
          <figure className="text-center">
            <blockquote className="blockquote">
              <p style={{ fontSize: "1.0625rem", lineHeight: "1.85", marginBottom: "1rem" }}>
                I'm Dhirendra Kumar — a Software Engineer with 2+ years of professional
                experience building production-grade web and mobile applications. I
                specialize in the MERN and MEAN stacks, with a sharp focus on
                system design, code quality, and shipping features that scale.
              </p>
              <p style={{ fontSize: "1.0625rem", lineHeight: "1.85", marginBottom: "1rem" }}>
                In my current role, I architect and deliver full-stack solutions for
                Healthcare and Facility Management platforms — designing multi-tenant
                SaaS systems with role-based access control, complex data pipelines,
                and real-time features. I own complete feature cycles: from API design
                and database modelling to React UI and React Native mobile delivery.
              </p>
              <p style={{ fontSize: "1.0625rem", lineHeight: "1.85", marginBottom: "1rem" }}>
                I approach every problem with an engineering mindset — breaking down
                ambiguous requirements, identifying performance bottlenecks early, and
                making deliberate trade-offs between speed, maintainability, and scale.
                I've integrated REST APIs, WebSockets, and third-party services into
                systems used by real users every day.
              </p>
              <p style={{ fontSize: "1.0625rem", lineHeight: "1.85", marginBottom: 0 }}>
                Outside of work, I explore AI tooling, contribute to side projects, and
                stay close to the evolving JavaScript ecosystem. I write clean,
                reviewable code because I believe software is read far more often than
                it is written.
              </p>
            </blockquote>
          </figure>
        </div>
      </div>

      <Experience />
      <Skills />
      <Education />
    </div>
  );
};

export default About;
