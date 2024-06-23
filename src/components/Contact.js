import { Link } from "react-router-dom";
import React, { useContext, useEffect, useRef, useState } from "react";

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
import Boy from "../assets/images/characters/contact.png";

import emailjs from "@emailjs/browser";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const form = useRef();
  const initialize = () => {
    window.emailjs.init({
      publicKey: "aEiL70VPn9kKnNqZL",
      // Do not allow headless browsers
      blockHeadless: true,
      blockList: {
        // Block the suspended emails
        list: ["foo@emailjs.com", "bar@emailjs.com"],
        // The variable contains the email address
        watchVariable: "userEmail",
      },
      limitRate: {
        // Set the limit rate for the application
        id: "app",
        // Allow 1 request per 10s
        throttle: 10000,
      },
    });
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    console.log("message sent");

    var data = {
      name,
      email,
      subject,
      message,
    };
    emailjs
      .sendForm("service_koq54ra", "template_vt5pr06", form.current, {
        publicKey: "aEiL70VPn9kKnNqZL",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
  };
  useEffect(() => {
    initialize();
    console.log(name);
  }, [name]);

  const theme = useContext(ThemeContext).systemTheme;
  // useGSAP(() => {
  //   gsap.from(["#mail", "#phone", "#location"], {
  //     scrollTrigger: {
  //       trigger: "#mail",
  //       // start:"bottom 70%",
  //       // scrub: true,
  //       toggleActions: "restart pause resume pause",
  //     },
  //     y: 200,
  //     opacity: 0,
  //     ease: "bounce.out",
  //     duration: 2,
  //   });
  //   gsap.from(["#social"], {
  //     scrollTrigger: {
  //       trigger: "#social",
  //       // start:"bottom 70%",
  //       // scrub: true,
  //       toggleActions: "restart pause resume pause",
  //     },
  //     y: 200,
  //     opacity: 0,
  //     ease: "back.in",
  //     duration: 2,
  //   });
  // });
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
          <div style={{ textAlign: "center" }}>
            <h1 className="boldHeading">Contact Me</h1>
          </div>
          <hr
            width="35%"
            size="10"
            align="center"
            style={{ color: "#4a48ff" }}
          />
        </div>

        <div className=" aboutBox">
          <div>
            <h4 style={{ color: theme.textColor }}>Lets's conect</h4>
            <form ref={form} onSubmit={sendMessage}>
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label for="name" style={{ color: theme.textColor }}>
                        Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        value={name}
                        name="name"
                        onChange={(e) => setName(e.target.value)}
                        style={{
                          backgroundColor: theme.backgroundColor,
                          color: theme.textColor,
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label for="email" style={{ color: theme.textColor }}>
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={{
                          backgroundColor: theme.backgroundColor,
                          color: theme.textColor,
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <label for="subject" style={{ color: theme.textColor }}>
                        Subject
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="subject"
                        name="subject"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        style={{
                          backgroundColor: theme.backgroundColor,
                          color: theme.textColor,
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <label for="message" style={{ color: theme.textColor }}>
                        Message
                      </label>
                      <textarea
                        className="form-control"
                        id="message"
                        name="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        style={{
                          backgroundColor: theme.backgroundColor,
                          color: theme.textColor,
                        }}
                        rows="5"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 mt-4">
                    <button type="submit" className="btn btn-primary">
                      Send
                    </button>
                  </div>
                </div>
              </div>
              <div
                id="successAlert"
                className="alert alert-success"
                style={{ display: "none" }}
              >
                Email sent successfully!
              </div>
              <div
                id="errorAlert"
                className="alert alert-danger"
                style={{ display: "none" }}
              >
                Failed to send email. Please try again later.
              </div>
            </form>
          </div>
          <div>
            <img src={Boy} className="aboutImage" />
          </div>
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
                    backgroundColor: theme.boxColor,
                  }}
                >
                  <EmailIcon
                    fontSize="large"
                    className="skillItems"
                    style={{ color: theme.textColor }}
                  />
                </div>
              </Link>
            </div>
            <div
              id="phone"
              className="d-flex"
              style={{ flexFlow: "row", flexWrap: "wrap" }}
            >
              <Link to={"tel:+919598560187"} style={{ color: theme.textColor }}>
                <div
                  className="d-flex flex-row flex-column justify-content-center align-items-center skillBox"
                  style={{
                    backgroundColor: theme.boxColor,
                  }}
                >
                  <CallIcon
                    fontSize="large"
                    className="skillItems"
                    style={{ color: theme.textColor }}
                  />
                </div>
              </Link>
            </div>
            {/* <div>
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
                    <h5
                      className="skillItems"
                      style={{ color: theme.textColor }}
                    ></h5>
                  </div>
                </div>
              </div> */}
          </div>
          <div
            id="social"
            className="d-flex justify-content-center align-items-center flex-wrap"
            style={{ color: "whitesmoke" }}
          >
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
                {/* <h6 className="skillItems" style={{ color: theme.textColor }}>
                    Instagram
                  </h6> */}
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
                {/* <h6 className="skillItems" style={{ color: theme.textColor }}>
                    Linkedin
                  </h6> */}
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
                {/* <h6 className="skillItems" style={{ color: theme.textColor }}>
                    Github
                  </h6> */}
              </Link>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-center align-items-center p-5 flex-wrap">
          <div style={{ textAlign: "center" }}>
            <h1 className="boldHeading">"Thanks for scrolling"</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
