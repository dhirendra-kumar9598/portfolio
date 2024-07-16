import React, { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import TextTransition, { presets } from "react-text-transition";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Dhiraj from "../components/images/IMG_20231127_005126.jpg";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { dark, light, ThemeContext } from "../theme";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
export default function Main() {
  const theme = useContext(ThemeContext).systemTheme;
  const setScheme = useContext(ThemeContext).setSystemTheme;

  const [mode, setMode] = useState(null);
  const imageRef = useRef();
  const infoRef = useRef();
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(imageRef.current, {
      duration: 2,
      delay: 2,
      rotate: 360,
      ease: "elastic",
    });
    // gsap.from(infoRef.current, {
    //   scrollTrigger: {
    //     trigger: infoRef.current,
    //     start: "bottom 50%",
    //     markers: true,
    //     scrub: true,

    //     toggleActions: "restart pause resume pause",
    //   },
    //   y: 200,
    //   opacity: 0,
    //   ease: "bounce.out",
    //   duration: 2,
    //   stagger: 0.45,
    // });
    // gsap.to(imageRef.current, {
    //   scrollTrigger: {
    //     trigger: imageRef.current,
    //     start: "top 40%",
    //     ease: "none",
    //     scrub: true,
    //     toggleActions: "restart pause reverse pause",
    //   },
    //   y: -400,
    // });
    // gsap.to(infoRef.current, {
    //   scrollTrigger: {
    //     trigger: infoRef.current,
    //     start: "bottom 20%",
    //     ease: "none",
    //     scrub: true,
    //     toggleActions: "restart pause reverse pause",
    //   },
    // });
  });

  const setTheme = (value) => {
    if (value == "light") {
      setScheme(light);
    } else {
      setScheme(dark);
    }
  };

  const fontStyle = {
    color: "black",
  };
  const [index, setIndex] = React.useState(0);
  const TEXTS = [
    "Frontend Developer",
    "Backend Developer",
    "Fullstack Developer",
    "Android Developer",
  ];

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          paddingTop: "50px",
          paddingRight: "50px",
        }}
      >
        <div
          style={{
            backgroundColor: theme.boxColor,
            padding: "4px",
            borderRadius: "10px",
            margin: "5px",
          }}
          onClick={() => setTheme("dark")}
        >
          <DarkModeIcon
            fontSize="large"
            className="skillItems"
            style={{ color: theme.textColor }}
          />
        </div>
        <div
          style={{
            backgroundColor: theme.boxColor,
            padding: "4px",
            borderRadius: "10px",
            margin: "5px",
          }}
          onClick={() => setTheme("light")}
        >
          <LightModeIcon
            fontSize="large"
            className="skillItems"
            style={{ color: theme.textColor }}
          />
        </div>
      </div>
      <div
        id="home"
        className='home d-flex justify-content-center align-items-center       data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" className="scrollspy-example  rounded-2" tabindex="0" '
      >
        <div
          className="homeBox"
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <div className="d-flex justify-content-center imageBox">
            <img className="homeImage" loading="lazy" ref={imageRef} src={Dhiraj} alt="" />
          </div>
          <div style={{ margin: "20px" }} ref={infoRef}>
            <div>
              <div style={fontStyle}>
                <div>
                  <h2 style={{ color: "#4a48ff" }}>Hey,I'm </h2>
                </div>

                <h1 className="boldHeading">Dhirendra Kumar</h1>
              </div>
            </div>
            <div style={fontStyle}>
              <div>
                <h2 style={{ color: theme.textColor }}>
                  <TextTransition springConfig={presets.wobbly}>
                    {TEXTS[index % TEXTS.length]}
                  </TextTransition>
                </h2>
              </div>
            </div>
            <div style={{ paddingTop: "30px" }}>
              <a
                href="#contact"
                style={{
                  backgroundColor: "#4a48ff",
                  padding: "10px",
                  borderRadius: "5px",
                  textDecoration: "none",
                  color: "white",
                  paddingTop: "10px",
                  margin: "5px",
                }}
              >
                Get In Touch
              </a>
              <a
                href="../resume.pdf"
                download={"resume.pdf"}
                style={{
                  backgroundColor: "BLACK",
                  padding: "10px",
                  borderRadius: "5px",
                  textDecoration: "none",
                  color: "white",
                  paddingTop: "10px",
                  margin: "5px",
                }}
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      </div>

      <About />
      <Portfolio />
      <Contact />
    </div>
  );
}
