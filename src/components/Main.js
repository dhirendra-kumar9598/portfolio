import React, { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import TextTransition, { presets } from "react-text-transition";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
// import Dhiraj from "../components/images/IMG_20231127_005126.jpg";
import Dhiraj from "../components/images/full2.jpg";
import { dark, light, ThemeContext } from "../theme";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { styled } from "@mui/material/styles";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch, { SwitchProps } from "@mui/material/Switch";
import Experience from "./Experience";
import Certifications from "./Certifications";

export default function Main() {
  const theme = useContext(ThemeContext).systemTheme;
  const setScheme = useContext(ThemeContext).setSystemTheme;

  const [mode, setMode] = useState(null);
  const imageRef = useRef();
  const infoRef = useRef();
  const nameRef = useRef();
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(imageRef.current, {
      duration: 2,
      delay: 2,
      rotate: 360,
      ease: "elastic",
    });
    gsap.to(nameRef.current, {
      duration: 5,
      delay: 3,
      rotateX: 360,
      ease: "elastic",
    });
    // gsap.from(infoRef.current, {
    //   scrollTrigger: {
    //     trigger: infoRef.current,
    //     start: "top 100%",
    //     markers: true,
    //     scrub: true,

    //     toggleActions: "restart pause resume pause",
    //   },
    //   y: 100,
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
    gsap.to(infoRef.current, {
      scrollTrigger: {
        trigger: infoRef.current,
        start: "bottom 20%",
        ease: "none",
        scrub: true,
        // markers: true,
        toggleActions: "restart pause reverse pause",
      },
    });
  });
  // console.log("theme =>", theme);
  // const setTheme = (value) => {
  //   if (value == "light") {
  //     setScheme(light);
  //   } else {
  //     setScheme(dark);
  //   }
  // };

  const handleTheme = () => {
    if (theme == light) {
      setScheme(dark);
    } else {
      setScheme(light);
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

  const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    "& .MuiSwitch-switchBase": {
      margin: 1,
      padding: 0,
      transform: "translateX(6px)",
      "&.Mui-checked": {
        color: "#fff",
        transform: "translateX(22px)",
        "& .MuiSwitch-thumb:before": {
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
            "#fff"
          )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
        },
        "& + .MuiSwitch-track": {
          opacity: 1,
          backgroundColor:
            theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
        },
      },
    },
    "& .MuiSwitch-thumb": {
      backgroundColor: theme.palette.mode === "dark" ? "#003892" : "#001e3c",
      width: 32,
      height: 32,
      "&::before": {
        content: "''",
        position: "absolute",
        width: "100%",
        height: "100%",
        left: 0,
        top: 0,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#fff"
        )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
      },
    },
    "& .MuiSwitch-track": {
      opacity: 1,
      backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
      borderRadius: 20 / 2,
    },
  }));

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
        <FormGroup>
          <FormControlLabel
            control={
              <MaterialUISwitch
                sx={{ m: 1 }}
                checked={theme === dark ? true : false}
                onChange={handleTheme}
              />
            }
          />
        </FormGroup>
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
            <img
              className="homeImage"
              loading="lazy"
              ref={imageRef}
              src={Dhiraj}
              alt=""
            />
          </div>
          <div style={{ margin: "20px" }} ref={infoRef}>
            <div>
              <div style={fontStyle}>
                <div>
                  <h2 style={{ color: "#4a48ff" }}>Hey,I'm </h2>
                </div>

                <h1 className="boldHeading" ref={nameRef}>
                  Dhirendra Kumar
                </h1>
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
            <div
              style={{ paddingTop: "30px", display: "flex", flexWrap: "wrap" }}
            >
              <a
                href="#contact"
                style={{
                  // backgroundColor: "#4a48ff",
                  // padding: "10px",
                  // borderRadius: "5px",
                  // textDecoration: "none",
                  // color: "white",
                  // paddingTop: "10px",
                  // margin: "5px",
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
                href="/#portfolio"
                style={{
                  // backgroundColor: "#4a48ff",
                  // padding: "10px",
                  // borderRadius: "5px",
                  // textDecoration: "none",
                  // color: "white",
                  // paddingTop: "10px",
                  // margin: "5px",
                  backgroundColor: "#97792c",
                  padding: "10px",
                  borderRadius: "5px",
                  textDecoration: "none",
                  color: "white",
                  paddingTop: "10px",
                  margin: "5px",
                }}
              >
                See My Works
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
      <Certifications />
      <Portfolio />
      <Contact />
    </div>
  );
}
