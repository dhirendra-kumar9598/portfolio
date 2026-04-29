import React, { useContext, useRef } from "react";
import Skills from "./Skills";
import Education from "./Education";

import Boy from "../assets/images/characters/laptop.png";
import { ThemeContext } from "../theme";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Experience from "./Experience";
const About = () => {
  const imageRef = useRef();
  const dataRef = useRef();
  const headRef = useRef();
  const theme = useContext(ThemeContext).systemTheme;
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    // ── Entrance: image slides up as section enters viewport ──
    gsap.from(imageRef.current, {
      scrollTrigger: {
        trigger: imageRef.current,
        start: "top 100%",
        end: "bottom 80%",
        scrub: true,
      },
      y: 80,
      opacity: 0,
      ease: "none",
    });

    // ── Entrance: text block slides up ──
    gsap.from(dataRef.current, {
      scrollTrigger: {
        trigger: dataRef.current,
        start: "top 100%",
        end: "bottom 80%",
        scrub: true,
      },
      y: 60,
      opacity: 0,
      ease: "none",
    });

    // ── Parallax: heading drifts up slowly (deepest layer) ──
    gsap.to(headRef.current, {
      y: -40,
      ease: "none",
      scrollTrigger: {
        trigger: "#about",
        start: "top center",
        end: "bottom top",
        scrub: 1.2,
      },
    });

    // ── Parallax: image moves at moderate speed ──
    gsap.to(imageRef.current, {
      y: -80,
      ease: "none",
      scrollTrigger: {
        trigger: imageRef.current,
        start: "top center",
        end: "bottom top",
        scrub: 1,
      },
    });

    // ── Parallax: text moves slower than image → depth ──
    gsap.to(dataRef.current, {
      y: -40,
      ease: "none",
      scrollTrigger: {
        trigger: dataRef.current,
        start: "top center",
        end: "bottom top",
        scrub: 1,
      },
    });
  });
  return (
    <div className="d-flex flex-column justify-content-center" id="about">
      <div className="gh-section-head gh-reveal">
        <span className="gh-label">About</span>
        <h1 className="boldHeading" ref={headRef}>My Story</h1>
      </div>
      <div className="aboutBox">
        <div className="gh-reveal gh-reveal-d1">
          <img ref={imageRef} loading="lazy" src={Boy} className="aboutImage" />
        </div>
        <div className="gh-reveal gh-reveal-d2">
          <div>
            <figure className="text-center">
              {/* <blockquote ref={dataRef} className="blockquote">
                <h5 style={{ color: theme.textColor }}>
                  Greetings, I'm Dhirendra Kumar—a passionate web developer,
                  dedicated observer, and contemplative thinker. My journey as a
                  developer is driven by an insatiable curiosity and a deep
                  passion for exploring the digital world.
                </h5>
                <p style={{ color: theme.textColor }}>
                  As a fresher MCA student, I have a solid foundation in
                  full-stack web development, with skills in HTML, CSS,
                  JavaScript, React.js, Express.js, MongoDB, and Node.js.
                  Additionally, I'm enthusiastic about mobile app development,
                  with a focus on cross-platform solutions using React Native.
                </p>
              </blockquote> */}
              <blockquote ref={dataRef} className="blockquote">
                <p style={{ color: "var(--gh-text)", fontSize: '1.0625rem', lineHeight: '1.85', marginBottom: '1rem' }}>
                  Hello, I'm Dhirendra Kumar — a passionate Full-Stack Developer
                  with a strong focus on building scalable web and mobile applications.
                  I enjoy solving real-world problems and creating efficient, user-centric
                  digital solutions.
                </p>
                <p style={{ color: "var(--gh-text)", fontSize: '1.0625rem', lineHeight: '1.85', marginBottom: '1rem' }}>
                  I have hands-on experience developing full-stack applications using
                  React.js, Node.js, Express.js, MongoDB, and modern JavaScript.
                  Currently, I work on Healthcare and Facility Management systems,
                  designing features that streamline workflows and improve operational
                  efficiency. I also build SaaS-based multi-tenant applications with
                  role-based access, tenant configurations, and scalable architecture.
                </p>
                <p style={{ color: "var(--gh-text)", fontSize: '1.0625rem', lineHeight: '1.85', marginBottom: '1rem' }}>
                  Alongside web development, I build cross-platform mobile apps using
                  React Native, focusing on performance, clean UI, and seamless user
                  experience. I continuously explore AI integrations, REST APIs,
                  real-time systems, and scalable backend architectures.
                </p>
                <p style={{ color: "var(--gh-text)", fontSize: '1.0625rem', lineHeight: '1.85', marginBottom: 0 }}>
                  I am driven by curiosity, analytical thinking, and a commitment to
                  writing clean, maintainable code while delivering impactful solutions.
                </p>
              </blockquote>
            </figure>
          </div>
        </div>
      </div>
      <Experience />

      <Skills />
      <Education />
    </div>
  );
};

export default About;
