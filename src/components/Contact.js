import { Link } from "react-router-dom";
import React, {
  Suspense,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { LineWave } from "react-loader-spinner";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import MapIcon from "@mui/icons-material/Map";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { ThemeContext } from "../theme";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Boy from "../assets/images/characters/contact.png";

import emailjs from "@emailjs/browser";
import Loader from "./MicroComp/Loader";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("init");
  const [isloading, setLoading] = useState(false);
  const form = useRef();
  const conRef=useRef();
  const locRef = useRef();
  const headRef = useRef();
  const messRef = useRef();
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
    setLoading(true);
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
          setLoading(false);
          console.log("SUCCESS!");
          setStatus("success");
          setName("");
          setEmail("");
          setMessage("");
          setSubject("");
          setTimeout(() => {
            setStatus("init");
          }, 5000);
        },
        (error) => {
          setLoading(false);
          console.log("FAILED...", error);
          setStatus("error");
          setTimeout(() => {
            setStatus("init");
          }, 5000);
        }
      );
  };
  useEffect(() => {
    initialize();
    console.log(name);
  }, [name]);

  const theme = useContext(ThemeContext).systemTheme;
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    // gsap.from(conRef.current, {
    //   scrollTrigger: {
    //     trigger:conRef.current,
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
    // gsap.from(locRef.current, {
    //   scrollTrigger: {
    //     trigger: form.current,
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
    // gsap.to(headRef.current, {
    //   scrollTrigger: {
    //     trigger: form.current,
    //     start: "1% 50%",
    //     end: "bottom 100%",

    //     scrub: true,
    //     toggleActions: "restart pause resume pause",
    //   },
    //   duration: 4,
    //   delay: 2,
    //   rotateY: 360,
    //   ease: "none",
    // });
    // gsap.to(messRef.current, {
    //   scrollTrigger: {
    //     trigger: messRef.current,
    //     start: "bottom 10%",
    //     end: "bottom 10%",

    //     scrub: true,
    //     toggleActions: "restart pause resume pause",
    //   },
    //   y: 100,
    //   duration: 2,
    //   delay: 1,
    //   rotateY: 360,
    //   ease: "none",
    // });
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
          <div style={{ textAlign: "center" }}>
            <h1 className="boldHeading" ref={headRef}>
              Contact Me
            </h1>
          </div>
          <hr
            width="35%"
            size="10"
            align="center"
            style={{ color: "#4a48ff" }}
          />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            marginBottom: "30px",
            flexWrap: "wrap",
          }}
        >
          <div
            className="formBox "
            ref={conRef}
            style={{ backgroundColor: theme.boxColor }}
          >
            <div  className="formBox1 " >
              <h4 className="subHeading" style={{ color: theme.textColor }}>
                Lets's conect
              </h4>
              <form onSubmit={sendMessage} ref={form}>
                <div className="container">
                  <div
                    className="row"
                    style={{ margin: "5px", paddingTop: "10px" }}
                  >
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
                  <div
                    className="row"
                    style={{ margin: "5px", paddingTop: "10px" }}
                  >
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
                  <div
                    className="row"
                    style={{ margin: "5px", paddingTop: "10px" }}
                  >
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
                  <div
                    className="row"
                    style={{ margin: "5px", paddingTop: "10px" }}
                  >
                    <div className="col-md-12 mt-4">
                      {!isloading ? (
                        <button
                          type="submit"
                          className="btn btn-primary"
                          disabled={
                            name.length == 0 ||
                            email.length == 0 ||
                            subject.length == 0 ||
                            message == 0
                          }
                        >
                          Send
                        </button>
                      ) : (
                        <LineWave
                          visible={true}
                          height="100"
                          width="100"
                          color="yellow"
                          ariaLabel="line-wave-loading"
                          wrapperStyle={{}}
                          wrapperClass=""
                          firstLineColor=""
                          middleLineColor=""
                          lastLineColor=""
                        />
                      )}
                    </div>

                    {status == "success" && (
                      <div style={{ color: "green" }}>
                        <span> Email sent successfully!</span>
                      </div>
                    )}
                    {status == "error" && (
                      <div style={{ color: "red" }}>
                        <span>
                          
                          Failed to send email. Please try again later.
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="" ref={locRef} style={{ width: "" }}>
            <div
              className="d-flex flex-column justify-content-center align-items-center formBox"
              style={{
                backgroundColor: theme.boxColor,
                padding: "20px",
                margin: "5px",
              }}
            >
              <div style={{ padding: "10px" }}>
                <MapIcon style={{ color: theme.textColor }} />
              </div>
              <div>
                <div className="row">
                  <div className="d-flex fles-row justify-content-between">
                    <div>
                      <span style={{ color: theme.textColor }}> Country:</span>
                    </div>
                    <div>
                      <span style={{ color: theme.textColor }}> India</span>
                    </div>
                  </div>
                  <div className="d-flex fles-row justify-content-between">
                    <div>
                      <span style={{ color: theme.textColor }}> State:</span>
                    </div>
                    <div>
                      <span style={{ color: theme.textColor }}>
                        Uttar Pradesh
                      </span>
                    </div>
                  </div>
                  <div className="d-flex fles-row justify-content-between">
                    <div>
                      <span style={{ color: theme.textColor }}> City:</span>
                    </div>
                    <div>
                      <span style={{ color: theme.textColor }}> Lucknow</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="d-flex flex-column justify-content-center align-items-center formBox"
              style={{
                backgroundColor: theme.boxColor,
                padding: "20px",
                margin: "5px",
              }}
            >
              <div style={{ padding: "10px" }}>
                <EmailIcon style={{ color: theme.textColor }} />
              </div>
              <div>
                <div className="row">
                  <div className="d-flex fles-row justify-content-between">
                    <div>
                      <span style={{ color: theme.textColor }}> Github:</span>
                    </div>
                    <div>
                      <Link
                        to="https://github.com/dhirendra-kumar9598"
                        style={{
                          textDecoration: "none",
                          color: "black",
                        }}
                      >
                        <span style={{ color: theme.textColor }}>
                          dhirendra-kumar9598
                        </span>
                      </Link>
                    </div>
                  </div>
                  <div className="d-flex fles-row justify-content-between">
                    <div>
                      <span style={{ color: theme.textColor }}> Linkedin:</span>
                    </div>
                    <div>
                      <Link
                        to="https://www.linkedin.com/in/dhirendra-kr/"
                        style={{
                          textDecoration: "none",
                          color: theme.textColor,
                        }}
                      >
                        <span style={{ color: theme.textColor }}>
                          dhirendra-kr
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="d-flex flex-column justify-content-center align-items-center formBox"
              style={{
                backgroundColor: theme.boxColor,
                padding: "20px",
                margin: "5px",
              }}
            >
              <div style={{ padding: "10px" }}>
                <CallIcon style={{ color: theme.textColor }} />
              </div>
              <div>
                <div className="row">
                  <div className="d-flex flex-row justify-content-between">
                    <div>
                      <span style={{ color: theme.textColor }}> Email:</span>
                    </div>
                    <div>
                      <Link
                        to={"mailto:kumardhiraj609@gmail.com"}
                        className="skillItems"
                        style={{ color: theme.textColor }}
                      >
                        <span style={{ color: theme.textColor }}>
                          kumardhiraj609@gmail.com
                        </span>
                      </Link>
                    </div>
                  </div>
                  <div className="d-flex flex-row justify-content-between">
                    <div>
                      <span style={{ color: theme.textColor }}> Phone:</span>
                    </div>
                    <div>
                      <Link
                        to={"tel:+919598560187"}
                        style={{
                          color: theme.textColor,
                          textDecoration: "none",
                        }}
                      >
                        <span
                          style={{
                            color: theme.textColor,
                            textDecoration: "none",
                          }}
                        >
                          9598560187
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <img src={Boy} className="aboutImage" /> */}
          </div>
        </div>

        <div className="d-flex justify-content-center align-items-center p-5 flex-wrap">
          <div style={{ textAlign: "center" }}>
            <h1 className="boldHeading" >
              "Thanks for scrolling"
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
