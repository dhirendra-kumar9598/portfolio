import React, { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import HtmlLan from "../components/images/Languages/html-5.png";
import Css from "../components/images/Languages/css-3.png";
import JS from "../components/images/Languages/js.png";
import JAVA from "../components/images/Languages/java.png";
import C from "../components/images/Languages/c-.png";
import TS from "../components/images/Languages/typescript1.png";
import Node from "../components/images/Tech/node-js-icon.webp";
import Express from "../components/images/Tech/express-js-icon.webp";
import Reacts from "../components/images/Tech/react-js-icon.webp";
import Mongo from "../components/images/Tech/mongodb-icon.webp";
import Mysql from "./images/Tech/pngwing.com.png";
import Next from "../components/images/Tech/nextjs-icon.webp";
import React_Native from "../components/images/Tech/react-native.webp";
import Bootstrap from "../components/images/Tech/boostrap.jpeg"
import Git from "../components/images/Tech/git.png"
import Npm from "../components/images/Tech/npm.png"
import MUI from "../components/images/Tech/mui.png"
import Angular from "../components/images/Tech/angular.png"
import { ThemeContext } from "../theme";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const Skills = () => {
  const [over, setOver] = useState(false);
  const theme = useContext(ThemeContext).systemTheme;
  const languageRef = useRef();
  const technologyRef = useRef();
  const databaseRef = useRef();
  const headRef = useRef();
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    // ── Entrance: rows slide up as they enter viewport ──
    [languageRef, technologyRef, databaseRef].forEach((ref) => {
      gsap.from(ref.current, {
        scrollTrigger: {
          trigger: ref.current,
          start: "top 100%",
          end: "bottom 80%",
          scrub: true,
        },
        y: 80,
        opacity: 0,
        ease: "none",
      });
    });

    // ── Parallax: heading drifts slowest (furthest layer) ──
    gsap.to(headRef.current, {
      y: -35,
      ease: "none",
      scrollTrigger: {
        trigger: headRef.current,
        start: "top center",
        end: "bottom top",
        scrub: 1.2,
      },
    });

    // ── Parallax: staggered depth — each row moves more than previous ──
    // Languages: shallowest layer (moves least)
    gsap.to(languageRef.current, {
      y: -40,
      ease: "none",
      scrollTrigger: {
        trigger: languageRef.current,
        start: "top center",
        end: "bottom top",
        scrub: 1,
      },
    });

    // Technologies: mid layer
    gsap.to(technologyRef.current, {
      y: -65,
      ease: "none",
      scrollTrigger: {
        trigger: technologyRef.current,
        start: "top center",
        end: "bottom top",
        scrub: 1,
      },
    });

    // Databases: deepest layer (moves most)
    gsap.to(databaseRef.current, {
      y: -90,
      ease: "none",
      scrollTrigger: {
        trigger: databaseRef.current,
        start: "top center",
        end: "bottom top",
        scrub: 1,
      },
    });
  });
  const Languages = [
    { name: "HTML", picture: HtmlLan },
    { name: "CSS", picture: Css },
    { name: "Javascript", picture: JS },
    { name: "TypeScript", picture: TS },
    { name: "Java", picture: JAVA },
    { name: "C/C++", picture: C },
  ];

  const Technologies = [
    { name: "React Js", picture: Reacts },
    { name: "Express Js", picture: Express },
    { name: "Node Js", picture: Node },
    { name: "React Native", picture: React_Native },
    { name: "Next Js", picture: Next },
    { name: "Angular", picture: Angular },
    { name: "MUI", picture: MUI },
    { name: "Bootstrap", picture: Bootstrap },
    { name: "Git", picture: Git },
    { name: "Npm", picture: Npm },
  ];

  const Databases = [
    { name: "MySql", picture: Mysql },
    { name: "MongDb", picture: Mongo },
  ];

  const onMouseOver = (event) => {
    event.target.style.backgroundColor = "red";
  };
  const onMouseOut = (event) => {
    event.target.style.backgroundColor = "";
  };

  return (
    <div
    // className=' d-flex flex-column justify-content-center align-items-center p-6' style={{ backgroundColor: "#31333b", height: "100vh" }}
    >
      <div className="gh-section-head gh-reveal">
        <span className="gh-label">Skills</span>
        <h1 className="boldHeading" ref={headRef}>Skills</h1>
      </div>
      {/* Programming Languages */}
      <div ref={languageRef}>
        <div className="d-flex justify-content-center  ">
          <h5 className="subHeading">
            Languages
          </h5>
        </div>
        <div
          className="d-flex justify-content-center"
          style={{ flexFlow: "row", flexWrap: "wrap" }}
        >
          {Languages.map((item, index) => (
            <div
              className="d-flex flex-column hustify-content-center align-items-center skillBox"
              key={index}
              style={{}}
            >
              <div className="skillItems">
                <img
                  loading="lazy"
                  src={item.picture}
                  className="skillItem"
                ></img>
              </div>
              <div style={{ textAlign: "center" }}>
                <h5 className="skillItems" style={{ color: "var(--gh-text-muted)" }}>
                  {item.name}
                </h5>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Technologies */}
      <div ref={technologyRef}>
        <div className="d-flex justify-content-center">
          <h4 className="subHeading">
            Technologies
          </h4>
        </div>
        <div
          className="d-flex justify-content-center"
          style={{ flexFlow: "row", flexWrap: "wrap" }}
        >
          {Technologies.map((item, index) => (
            <div
              className="d-flex flex-column justify-content-center align-items-center skillBox"
              key={index}
              style={{}}
            >
              <div className="skillItems">
                <img
                  loading="lazy"
                  src={item.picture}
                  className="skillItem"
                ></img>
              </div>
              <div style={{ textAlign: "center" }}>
                <h5 className="skillItems" style={{ color: "var(--gh-text-muted)" }}>
                  {item.name}
                </h5>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Databases */}
      <div ref={databaseRef}>
        <div className="d-flex justify-content-center">
          <h4 className="subHeading">
            Databases
          </h4>
        </div>
        <div
          className="d-flex justify-content-center "
          style={{ flexFlow: "row", flexWrap: "wrap" }}
        >
          {Databases.map((item, index) => (
            <div
              className="d-flex flex-column justify-content-center align-items-center skillBox"
              key={index}
              style={{}}
            >
              <div className="skillItems">
                <img
                  loading="lazy"
                  src={item.picture}
                  className="skillItem"
                ></img>
              </div>
              <div style={{ textAlign: "center" }}>
                <h5 className="skillItems" style={{ color: "var(--gh-text-muted)" }}>
                  {item.name}
                </h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
