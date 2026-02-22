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
    // gsap.from(imageRef.current, {
    //   scrollTrigger: {
    //     trigger: imageRef.current,
    //     start: "1% 60%",
    //     end: "bottom 100%",

    //     scrub: true,
    //     toggleActions: "restart pause resume pause",
    //   },
    //   x: 50,
    //   duration: 5,
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
    gsap.from(imageRef.current, {
      scrollTrigger: {
        trigger: imageRef.current,
        start: "top 100%",
        end: "bottom 80%",

        scrub: true,
        toggleActions: "restart pause resume pause",
      },
      y: 100,
      duration: 2,
      delay: 1,
      opacity: 0,
      ease: "none",
    });
    gsap.from(dataRef.current, {
      scrollTrigger: {
        trigger: dataRef.current,
        start: "top 100%",
        end: "bottom 80%",

        scrub: true,
        toggleActions: "restart pause resume pause",
      },
      y: 100,
      duration: 2,
      delay: 1,
      opacity: 0,
      ease: "none",
    });
    // gsap.to(headRef.current, {
    //   scrollTrigger: {
    //     trigger: imageRef.current,
    //     start: "1% 60%",
    //     end: "bottom 100%",

    //     scrub: true,
    //     toggleActions: "restart pause resume pause",
    //   },
    //   duration: 4,
    //   delay: 1,
    //   rotateY: 360,
    //   ease: "none",
    // });
    gsap.to(headRef.current, {
      scrollTrigger: {
        trigger: imageRef.current,
        start: "top 100%", // Start when the element is near entering the viewport
        end: "bottom 20%", // End when it's almost out of the viewport
        scrub: 1, // Adds a smooth transition effect with a slight delay
        toggleActions: "play none none none",
      },
      rotateY: 720,
      ease: "none",
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
        <div style={{ textAlign: "center" }}>
          <h1 className="boldHeading" ref={headRef}>
            My Story
          </h1>
        </div>
        <hr width="35%" size="10" align="center" style={{ color: "#4a48ff" }} />
      </div>
      <div className="aboutBox">
        <div>
          <img ref={imageRef} loading="lazy" src={Boy} className="aboutImage"  />
        </div>
        <div>
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
                <h5 style={{ color: theme.textColor }}>
                  Hello, I'm Dhirendra Kumar—a dedicated web developer, keen
                  observer, and analytical thinker. My journey in software
                  development is fueled by a relentless curiosity and a passion
                  for exploring innovative digital solutions.
                </h5>
                <p style={{ color: theme.textColor }}>
                  With a strong technical foundation and hands-on experience in
                  full-stack web development, I specialize in technologies such
                  as HTML, CSS, JavaScript, React.js, Express.js, MongoDB, and
                  Node.js. Additionally, I am deeply interested in mobile app
                  development, focusing on building cross-platform solutions
                  using React Native.
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
