import { Link } from "react-router-dom";
import React, { useEffect, useRef, useState } from "react";
import { LineWave } from "react-loader-spinner";
import EmailIcon from "@mui/icons-material/Email";
import MapIcon from "@mui/icons-material/Map";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import emailjs from "@emailjs/browser";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("init");
  const [isloading, setLoading] = useState(false);
  const form = useRef();

  const initialize = () => {
    window.emailjs.init({
      publicKey: "aEiL70VPn9kKnNqZL",
      blockHeadless: true,
      blockList: {
        list: ["foo@emailjs.com", "bar@emailjs.com"],
        watchVariable: "userEmail",
      },
      limitRate: { id: "app", throttle: 10000 },
    });
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm("service_koq54ra", "template_vt5pr06", form.current, {
        publicKey: "aEiL70VPn9kKnNqZL",
      })
      .then(
        () => {
          setLoading(false);
          setStatus("success");
          setName(""); setEmail(""); setMessage(""); setSubject("");
          setTimeout(() => setStatus("init"), 5000);
        },
        () => {
          setLoading(false);
          setStatus("error");
          setTimeout(() => setStatus("init"), 5000);
        }
      );
  };

  useEffect(() => { initialize(); }, []);

  return (
    <div id="contact">
      <div className="gh-section-head gh-reveal" data-num="04">
        <span className="gh-label">Contact</span>
        <h1 className="boldHeading">Get In Touch</h1>
        <p style={{ marginTop: 12, maxWidth: 480, marginInline: "auto", fontSize: "1rem" }}>
          Have a project in mind or just want to say hello? I'd love to hear from you.
        </p>
      </div>

      <div className="contact-layout">
        {/* Left: form card */}
        <div className="formBox gh-reveal">
          <h4 style={{ marginBottom: 24, fontWeight: 700, color: "var(--gh-text)" }}>
            Send a message
          </h4>
          <form onSubmit={sendMessage} ref={form}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              <div className="form-group">
                <label htmlFor="name" style={{ color: "var(--gh-text-muted)", fontSize: "0.85rem", fontWeight: 500 }}>
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={{
                    backgroundColor: "var(--gh-surface2)",
                    color: "var(--gh-text)",
                    border: "1px solid var(--gh-border)",
                    borderRadius: 8,
                  }}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email" style={{ color: "var(--gh-text-muted)", fontSize: "0.85rem", fontWeight: 500 }}>
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
                    backgroundColor: "var(--gh-surface2)",
                    color: "var(--gh-text)",
                    border: "1px solid var(--gh-border)",
                    borderRadius: 8,
                  }}
                />
              </div>
            </div>

            <div className="form-group" style={{ marginTop: 16 }}>
              <label htmlFor="subject" style={{ color: "var(--gh-text-muted)", fontSize: "0.85rem", fontWeight: 500 }}>
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
                  backgroundColor: "var(--gh-surface2)",
                  color: "var(--gh-text)",
                  border: "1px solid var(--gh-border)",
                  borderRadius: 8,
                }}
              />
            </div>

            <div className="form-group" style={{ marginTop: 16 }}>
              <label htmlFor="message" style={{ color: "var(--gh-text-muted)", fontSize: "0.85rem", fontWeight: 500 }}>
                Message
              </label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows="5"
                style={{
                  backgroundColor: "var(--gh-surface2)",
                  color: "var(--gh-text)",
                  border: "1px solid var(--gh-border)",
                  borderRadius: 8,
                  resize: "vertical",
                }}
              />
            </div>

            <div style={{ marginTop: 20, display: "flex", alignItems: "center", gap: 16 }}>
              {!isloading ? (
                <button
                  type="submit"
                  className="gh-btn gh-btn-primary"
                  disabled={
                    name.length === 0 ||
                    email.length === 0 ||
                    subject.length === 0 ||
                    message.length === 0
                  }
                >
                  Send Message
                </button>
              ) : (
                <LineWave
                  visible={true}
                  height="60"
                  width="60"
                  color="#FF6900"
                  ariaLabel="line-wave-loading"
                />
              )}
              {status === "success" && (
                <span style={{ color: "#3fb950", fontSize: "0.9rem", fontWeight: 500 }}>
                  Message sent successfully!
                </span>
              )}
              {status === "error" && (
                <span style={{ color: "#f85149", fontSize: "0.9rem", fontWeight: 500 }}>
                  Failed to send. Please try again.
                </span>
              )}
            </div>
          </form>
        </div>

        {/* Right: info stack */}
        <div className="contact-info-stack gh-reveal gh-reveal-d1">
          <div className="contact-info-card">
            <div className="contact-info-icon">
              <MapIcon style={{ fontSize: 20 }} />
            </div>
            <div className="contact-info-content">
              <span className="contact-info-label">Location</span>
              <span className="contact-info-value">Lucknow, Uttar Pradesh, India</span>
            </div>
          </div>

          <div className="contact-info-card">
            <div className="contact-info-icon">
              <EmailIcon style={{ fontSize: 20 }} />
            </div>
            <div className="contact-info-content">
              <span className="contact-info-label">Email</span>
              <Link
                to="mailto:kumardhiraj609@gmail.com"
                className="contact-info-value"
                style={{ textDecoration: "none" }}
              >
                kumardhiraj609@gmail.com
              </Link>
            </div>
          </div>

          <div className="contact-info-card">
            <div className="contact-info-icon">
              <GitHubIcon style={{ fontSize: 20 }} />
            </div>
            <div className="contact-info-content">
              <span className="contact-info-label">GitHub</span>
              <Link
                to="https://github.com/dhirendra-kumar9598"
                className="contact-info-value"
                style={{ textDecoration: "none" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                dhirendra-kumar9598
              </Link>
            </div>
          </div>

          <div className="contact-info-card">
            <div className="contact-info-icon">
              <LinkedInIcon style={{ fontSize: 20 }} />
            </div>
            <div className="contact-info-content">
              <span className="contact-info-label">LinkedIn</span>
              <Link
                to="https://www.linkedin.com/in/dhirendra-kr/"
                className="contact-info-value"
                style={{ textDecoration: "none" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                dhirendra-kr
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div style={{ textAlign: "center", padding: "64px 0 32px" }}>
        <h1 className="boldHeading">"Thanks for scrolling"</h1>
      </div>
    </div>
  );
};

export default Contact;
