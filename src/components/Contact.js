import { Link } from "react-router-dom";
import React, { useContext } from "react";

import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { ThemeContext } from "../theme";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const Contact = () => {
  const theme = useContext(ThemeContext).systemTheme;
  useGSAP(() => {
    gsap.from(["#mail", "#phone", "#location"], {
      scrollTrigger: {
        trigger: "#mail",
        // start:"bottom 70%",
        // scrub: true,
        toggleActions: "restart pause resume pause",
      },
      y: 200,
      opacity: 0,
      ease: "bounce.out",
      duration: 2,
    });
    gsap.from(["#social"], {
      scrollTrigger: {
        trigger: "#social",
        // start:"bottom 70%",
        // scrub: true,
        toggleActions: "restart pause resume pause",
      },
      y: 200,
      opacity: 0,
      ease: "back.in",
      duration: 2,
    });
  });
  return (
    <div className="pt-5" id="contact">
      <div>
        <div className="d-flex justify-content-center align-items-center">
          <hr
            width="35%"
            size="10"
            align="center"
            style={{ color: "#4a48ff" }}
          />
          <h1 className="boldHeading">Contact Me</h1>
          <hr
            width="35%"
            size="10"
            align="center"
            style={{ color: "#4a48ff" }}
          />
        </div>

        <div
          className=" d-flex flex-column justify-content-center flex-wrap align-items-center"
          style={{
            color: "black",
            width: "100%",
          }}
        >
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ flexFlow: "row", flexWrap: "wrap" }}
          >
            <div id="mail">
              <Link
                to={"mailto:kumardhiraj609@gmail.com"}
                className="skillItems"
                style={{ color: theme.textColor }}
              >
                <div
                  className="d-flex flex-row flex-column justify-content-center align-items-center skillBox"
                  style={{
                    padding: "3vh",
                    margin: "3vh",
                    borderRadius: "3vh",
                    backgroundColor: theme.boxColor,
                  }}
                >
                  <EmailIcon
                    fontSize="large"
                    className="skillItems"
                    style={{ color: theme.textColor }}
                  />
                  kumardhiraj609@gmail.com
                </div>
              </Link>
            </div>
            <div
              id="phone"
              className="d-flex"
              style={{ flexFlow: "row", flexWrap: "wrap" }}
            >
              <Link
                to={"tel:+919598560187"}
                className="skillItems"
                style={{ color: theme.textColor }}
              >
                <div
                  className="d-flex flex-row flex-column justify-content-center align-items-center skillBox"
                  style={{
                    padding: "3vh",
                    margin: "3vh",
                    backgroundColor: theme.boxColor,
                    borderRadius: "3vh",
                  }}
                >
                  <CallIcon
                    fontSize="large"
                    className="skillItems"
                    style={{ color: theme.textColor }}
                  />
                  +919598560187
                </div>
              </Link>
            </div>
            <div>
              <div
                id="location"
                className="d-flex "
                style={{ flexFlow: "row", flexWrap: "wrap" }}
              >
                <div
                  className="d-flex flex-row  flex-column justify-content-center align-items-center skillBox"
                  style={{
                    padding: "3vh",
                    margin: "3vh",
                    backgroundColor: theme.boxColor,
                    borderRadius: "3vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <LocationOnIcon
                    fontSize="large"
                    className="skillItems"
                    style={{ color: theme.textColor }}
                  />
                  <h5 className="skillItems" style={{ color: theme.textColor }}>
                    Lucknow,India
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          id="social"
          className="d-flex justify-content-center align-items-center flex-wrap"
          style={{ color: "whitesmoke" }}
        >
          {/* <hr width="35%" size="10" align="center" style={{ color: "white" }} /> */}

          <div>
            <Link
              to="https://instagram.com/_dhiraj.kr?igshid=NzZlODBkYWE4Ng=="
              style={{
                textDecoration: "none",
                color: "black",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: theme.boxColor,
              }}
              className="skillBox"
            >
              <InstagramIcon
                fontSize="large"
                className="skillItems"
                style={{ color: theme.textColor }}
              />
              <h6 className="skillItems" style={{ color: theme.textColor }}>
                Instagram
              </h6>
            </Link>
          </div>
          <div>
            <Link
              to="https://www.linkedin.com/in/dhirendra-kr/"
              className="skillBox"
              style={{
                textDecoration: "none",
                color: theme.textColor,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: theme.boxColor,
              }}
            >
              <LinkedInIcon
                fontSize="large"
                className="skillItems"
                style={{ color: theme.textColor }}
              />
              <h6 className="skillItems" style={{ color: theme.textColor }}>
                Linkedin
              </h6>
            </Link>
          </div>
          <div>
            <Link
              to="https://github.com/dhirendra-kumar9598"
              className="skillBox"
              style={{
                textDecoration: "none",
                color: "black",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: theme.boxColor,
              }}
            >
              <GitHubIcon
                fontSize="large"
                className="skillItems"
                style={{ color: theme.textColor }}
              />
              <h6 className="skillItems" style={{ color: theme.textColor }}>
                Github
              </h6>
            </Link>
          </div>
          {/* <hr width="35%" size="10" align="center" style={{ color: "white" }} /> */}
        </div>
        <div className="d-flex justify-content-center align-items-center p-5 flex-wrap">
          <div>
            <h1 className="boldHeading">"Thanks for scrolling"</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
