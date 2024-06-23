import React, { useContext, useRef } from "react";
import Skills from "./Skills";
import Education from "./Education";

import Boy from "../assets/images/characters/laptop.png";
import { ThemeContext } from "../theme";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
const About = () => {
  const imageRef = useRef();
  const dataRef = useRef();
  const theme = useContext(ThemeContext).systemTheme;
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(imageRef.current, {
      scrollTrigger: {
        trigger: imageRef.current,
        start: "1% 100%",
        end: "bottom 100%",
        scrub: true,
        toggleActions: "restart pause resume pause",
      },
      y: 100,
      duration: 2,
      delay: 1,
      opacity: 0,
    });
    gsap.from(dataRef.current, {
      scrollTrigger: {
        trigger: imageRef.current,
        start: "1% 100%",
        end: "bottom 100%",

        scrub: true,
        toggleActions: "restart pause resume pause",
      },
      y: 100,
      duration: 2,
      delay: 1,
      opacity: 0,
    });
  });
  return (
    <div
      className="d-flex flex-column justify-content-center "
      id="about"
      style={{
        color: "black",
      }}
    >
      <div className="d-flex justify-content-center align-items-center">
        <hr width="35%" size="10" align="center" style={{ color: "#4a48ff" }} />
        <div style={{textAlign:"center"}}>
          <h1 className="boldHeading">My Story</h1>
        </div>
        <hr width="35%" size="10" align="center" style={{ color: "#4a48ff" }} />
      </div>
      <div className="aboutBox">
        <div>
          <img ref={imageRef} src={Boy} className="aboutImage" />
        </div>
        <div>
          <div>
            <figure className="text-center">
              <blockquote ref={dataRef} className="blockquote">
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
              </blockquote>
            </figure>
          </div>
        </div>
      </div>

      <Education />
      <Skills />
    </div>
  );
};

export default About;
