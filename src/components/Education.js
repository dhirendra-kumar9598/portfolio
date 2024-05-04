import React, { useContext } from "react";
import Educate from "./images/pngs/43.-Read-on-Beach.png";
import { ThemeContext } from "../theme";
const Education = () => {
  const theme = useContext(ThemeContext).systemTheme;
  return (
    <div>
      <div className="d-flex justify-content-center align-items-center">
        <hr width="35%" size="10" align="center" style={{ color: "#4a48ff" }} />
        <h1 className="boldHeading">Education</h1>
        <hr width="35%" size="10" align="center" style={{ color: "#4a48ff" }} />
      </div>
      <div className="d-flex justify-content-center align-items-center flex-wrap">
        <div>
          <div className="d-flex flex-column">
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
          <img src={Educate} className="aboutImage" />
        </div>
      </div>
    </div>
  );
};

export default Education;
