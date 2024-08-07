import React, { useContext, useRef } from "react";

import Boy from "../assets/images/characters/laptop2.png"
import { ThemeContext } from "../theme";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const Education = () => {
  const theme = useContext(ThemeContext).systemTheme;
  const imageRef = useRef();
  const dataRef = useRef();
  const headRef = useRef();
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(imageRef.current, {
      scrollTrigger: {
        trigger: imageRef.current,
        start: "1% 60%",
        end: "bottom 100%",

        scrub: true,
        toggleActions: "restart pause resume pause",
      },
      x: 150,
      duration: 1,
      delay: 1,
      opacity: 0,
      ease: "none",
    });
    gsap.from(dataRef.current, {
      scrollTrigger: {
        trigger: imageRef.current,
        start: "1% 60%",
        end: "bottom 100%",

        scrub: true,
        toggleActions: "restart pause resume pause",
      },
      x: -50,
      duration: 1,
      delay: 1,
      opacity: 0,
      ease: "none",
    });
    gsap.to(headRef.current, {
      scrollTrigger: {
        trigger: imageRef.current,
        start: "1% 60%",
        end: "bottom 100%",

        scrub: true,
        toggleActions: "restart pause resume pause",
      },
      duration: 4,
      delay: 2,
      rotateY: 360,
      ease:"none",
    });
  });
  return (
    <div>
      <div className="d-flex justify-content-center align-items-center">
        <hr width="35%" size="10" align="center" style={{ color: "#4a48ff" }} />
        <h1 className="boldHeading" ref={headRef}>Education</h1>
        <hr width="35%" size="10" align="center" style={{ color: "#4a48ff" }} />
      </div>
      <div className="d-flex justify-content-center align-items-center flex-wrap">
        <div>
          <div ref={dataRef} className="d-flex flex-column">
            <div className="d-flex justify-content-center align-items-center ">
              <div style={{ marginRight: 20 }}>
                <span
                  className="badge "
                  style={{ fontSize: "1em", backgroundColor: "#4a48ff" }}
                >
                  2024
                </span>
              </div>
              <div>
                <h3 style={{ color: theme.textColor }}>
                  Master of Computer Application
                </h3>
                <h5 style={{ color: theme.textColor }}>
                  APJ Abdul Kalam Technical University,Lucknow
                </h5>
                {/* <h6>CGPA 8.0</h6> */}
              </div>
            </div>
            <div className="d-flex justify-content-center align-items-center pt-5 ">
              <div style={{ marginRight: 20 }}>
                <span
                  className="badge"
                  style={{ fontSize: "1em", backgroundColor: "#4a48ff" }}
                >
                  2022
                </span>
              </div>
              <div>
                <h3 style={{ color: theme.textColor }}>
                  Bachelor of Computer Application
                </h3>
                <h5 style={{ color: theme.textColor }}>
                  MCRP University,Bhopal
                </h5>
                {/* <h6>CGPA= 7.9</h6> */}
              </div>
            </div>
          </div>
          <div></div>
        </div>
        <div>
          <img loading="lazy" ref={imageRef} src={Boy} className="aboutImage" />
        </div>
      </div>
    </div>
  );
};

export default Education;
