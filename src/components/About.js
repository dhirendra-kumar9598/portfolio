import React, { useContext } from "react";
import Skills from "./Skills";
import Education from "./Education";
import Read from "./images/pngs/389-Coding.png";
import { ThemeContext } from "../theme";
const About = () => {
  const theme = useContext(ThemeContext).systemTheme;
  return (
    <div
      className="d-flex flex-column justify-content-center "
      id="about"
      style={{
        color: "black",
        padding: "5vh",
      }}
    >
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ padding: "20px" }}
      >
        <hr width="35%" size="10" align="center" style={{ color: "#4a48ff" }} />
        <h1 className="boldHeading">My Story</h1>
        <hr width="35%" size="10" align="center" style={{ color: "#4a48ff" }} />
      </div>
      <div className="aboutBox">
        <div>
          <img src={Read} className="aboutImage" />
        </div>
        <div>
          <div>
            <figure className="text-center">
              <blockquote className="blockquote">
                <h5 style={{color:theme.textColor}}>
                  Greetings, I'm Dhirendra Kumar—a passionate web developer,
                  dedicated observer, and contemplative thinker. My journey as a
                  developer is fueled by an insatiable curiosity and a profound
                  passion for unraveling the mysteries of the digital world.
                </h5>
                <p  style={{color:theme.textColor}}>
                  My toolkit covers a broad range of technologies and languages
                  for full-stack web development, including HTML, CSS,
                  JavaScript, React.js,Express.js,MongoDb and Node.js.
                  Additionally, I'm passionate about mobile app development,
                  specializing in cross-platform solutions like React Native.
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
