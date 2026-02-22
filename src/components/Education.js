import React, { useContext, useRef } from "react";

import Boy from "../assets/images/characters/laptop2.png"
import { ThemeContext } from "../theme";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const Education = () => {
  const theme = useContext(ThemeContext).systemTheme;
  const imageRef = useRef();
  const dataRef = useRef();
  const headRef = useRef();
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    // gsap.from(imageRef.current, {
    //   scrollTrigger: {
    //     trigger: imageRef.current,
    //     start: "1% 60%",
    //     end: "bottom 100%",

    //     scrub: true,
    //     toggleActions: "restart pause resume pause",
    //   },
    //   x: 50,
    //   duration: 2,
    //   delay: 2,
    //   opacity: 0,
    //   ease: "none",
    // });
    // gsap.from(dataRef.current, {
    //   scrollTrigger: {
    //     trigger: imageRef.current,
    //     start: "1% 60%",
    //     end: "bottom 100%",

    //     scrub: true,
    //     toggleActions: "restart pause resume pause",
    //   },
    //   x: -50,
    //   duration: 2,
    //   delay: 2,
    //   opacity: 0,
    //   ease: "none",
    // });
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
          <div ref={dataRef} className="d-flex flex-column align-items-start education-list">
            <div className="education-item">
              <div className="education-badge">
                <span
                  className="badge "
                  style={{ fontSize: "1em", backgroundColor: "#4a48ff" }}
                >
                  2024
                </span>
              </div>
              <div className="education-content">
                <h3 style={{ color: theme.textColor }}>
                  Master of Computer Application
                </h3>
                <h5 style={{ color: theme.textColor }}>
                  AKTU University,Lucknow
                </h5>
                {/* <h6>CGPA 8.0</h6> */}
              </div>
            </div>
            <div className="education-item pt-5">
              <div className="education-badge">
                <span
                  className="badge"
                  style={{ fontSize: "1em", backgroundColor: "#4a48ff" }}
                >
                  2022
                </span>
              </div>
              <div className="education-content">
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
