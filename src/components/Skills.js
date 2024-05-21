import React, { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import HtmlLan from "../components/images/Languages/html-5.png";
import Css from "../components/images/Languages/css-3.png";
import JS from "../components/images/Languages/js.png";
import JAVA from "../components/images/Languages/java.png";
import C from "../components/images/Languages/c-.png";
import Node from "../components/images/Tech/node-js-icon.webp";
import Express from "../components/images/Tech/express-js-icon.webp";
import Reacts from "../components/images/Tech/react-js-icon.webp";
import Mongo from "../components/images/Tech/mongodb-icon.webp";
import Mysql from "./images/Tech/pngwing.com.png";
import Next from "../components/images/Tech/nextjs-icon.webp";
import React_Native from "../components/images/Tech/react-native.webp";
import { ThemeContext } from "../theme";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const Skills = () => {
  const [over, setOver] = useState(false);
  const theme = useContext(ThemeContext).systemTheme;
  const languageRef = useRef();
  const technologyRef = useRef();
  const databaseRef = useRef();
  // useGSAP(() => {
  //   gsap.registerPlugin(ScrollTrigger);
  //   gsap.from(languageRef.current, {
  //     scrollTrigger: {
  //       trigger: languageRef.current,
  //       start: "top 100%",
  //       end: "bottom 80%",

  //       scrub: true,
  //       toggleActions: "restart pause resume pause",
  //     },
  //     x: 400,
  //     duration: 2,
  //     delay: 1,
  //     opacity: 0,
  //     ease: "none",
  //   });
  //   gsap.from(technologyRef.current, {
  //     scrollTrigger: {
  //       trigger: technologyRef.current,
  //       start: "top 100%",
  //       end: "bottom 80%",

  //       scrub: true,
  //       toggleActions: "restart pause resume pause",
  //     },
  //     x: -400,
  //     duration: 2,
  //     delay: 1,
  //     opacity: 0,
  //     ease: "none",
  //   });
  //   gsap.from(databaseRef.current, {
  //     scrollTrigger: {
  //       trigger: databaseRef.current,
  //       start: "top 100%",
  //       end: "bottom 80%",

  //       scrub: true,
  //       toggleActions: "restart pause resume pause",
  //     },
  //     x: 400,
  //     duration: 2,
  //     delay: 1,
  //     opacity: 0,
  //     ease: "none",
  //   });
  // });
  const Languages = [
    { name: "HTML", picture: HtmlLan },
    { name: "CSS", picture: Css },
    { name: "Javascript", picture: JS },
    { name: "Java", picture: JAVA },
    { name: "C/C++", picture: C },
  ];

  const Technologies = [
    { name: "React Js", picture: Reacts },
    { name: "Express Js", picture: Express },
    { name: "Node Js", picture: Node },
    { name: "React Native", picture: React_Native },
    { name: "Next Js", picture: Next },
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
      <div className="d-flex justify-content-center align-items-center">
        <hr width="35%" size="10" align="center" style={{ color: "#4a48ff" }} />
        <h1 className="boldHeading">Skills</h1>
        <hr width="35%" size="10" align="center" style={{ color: "#4a48ff" }} />
      </div>
      {/* Programming Languages */}
      <div>
        <div className="d-flex justify-content-center ">
          <h4 className="subHeading" style={{ color: theme.textColor }}>
            Programming Languages
          </h4>
        </div>
        <div
          ref={languageRef}
          className="d-flex justify-content-center"
          style={{ flexFlow: "row", flexWrap: "wrap" }}
        >
          {Languages.map((item, index) => (
            <div
              className="d-flex flex-column hustify-content-center align-items-center skillBox"
              key={index}
              style={{ backgroundColor: theme.boxColor }}
            >
              <div className="skillItems">
                <img
                  src={item.picture}
                  style={{ height: "150px", width: "150px" }}
                ></img>
              </div>
              <h5 className="skillItems" style={{ color: theme.textColor }}>
                {item.name}
              </h5>
            </div>
          ))}
        </div>
      </div>
      {/* Technologies */}
      <div className="d-flex justify-content-center">
        <h4 className="subHeading" style={{ color: theme.textColor }}>
          Technologies
        </h4>
      </div>
      <div
        ref={technologyRef}
        className="d-flex justify-content-center"
        style={{ flexFlow: "row", flexWrap: "wrap" }}
      >
        {Technologies.map((item, index) => (
          <div
            className="d-flex flex-column justify-content-center align-items-center skillBox"
            key={index}
            style={{ backgroundColor: theme.boxColor }}
          >
            <div className="skillItems">
              <img
                src={item.picture}
                style={{ height: "150px", width: "150px" }}
              ></img>
            </div>
            <h5 className="skillItems" style={{ color: theme.textColor }}>
              {item.name}
            </h5>
          </div>
        ))}
      </div>
      {/* Databases */}
      <div className="d-flex justify-content-center">
        <h4 className="subHeading" style={{ color: theme.textColor }}>
          Databases
        </h4>
      </div>
      <div
        ref={databaseRef}
        className="d-flex justify-content-center "
        style={{ flexFlow: "row", flexWrap: "wrap" }}
      >
        {Databases.map((item, index) => (
          <div
            className="d-flex flex-column justify-content-center align-items-center skillBox"
            key={index}
            style={{ backgroundColor: theme.boxColor }}
          >
            <div className="skillItems">
              <img
                src={item.picture}
                style={{ height: "150px", width: "150px" }}
              ></img>
            </div>
            <h5 className="skillItems" style={{ color: theme.textColor }}>
              {item.name}
            </h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
