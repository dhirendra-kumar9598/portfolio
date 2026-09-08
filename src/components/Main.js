import React, { useContext, useRef, useState, useEffect } from "react";

import TextTransition, { presets } from "react-text-transition";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Dhiraj from "../components/images/full2.jpeg";
import { ThemeContext } from "../theme";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Certifications from "./Certifications";

const ROLES = [
  "Full-Stack Developer",
  "Generative-AI Engineer",
  "Frontend Developer",
  "Backend Developer",
];

const STATS = [
  { value: 2,  suffix: "+",  label: "Years Experience" },
  { value: 15, suffix: "+",  label: "Projects Shipped" },
  { value: 10, suffix: "+",  label: "Technologies" },
  { value: 8,  suffix: "k+", label: "Lines of Code / day" },
];

const animateCounter = (el, target, suffix, duration = 1600) => {
  const startTime = performance.now();
  const tick = (now) => {
    const t = Math.min((now - startTime) / duration, 1);
    const eased = 1 - Math.pow(1 - t, 3);
    el.textContent = Math.round(eased * target) + suffix;
    if (t < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
};

export default function Main() {
  const { systemTheme } = useContext(ThemeContext);
  const [roleIndex, setRoleIndex] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const id = setInterval(() => setRoleIndex((i) => i + 1), 3000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const statsRef = useRef();
  const statsAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !statsAnimated.current) {
          statsAnimated.current = true;
          const els = entry.target.querySelectorAll(".gh-stat-number");
          els.forEach((el, i) => {
            const { value, suffix } = STATS[i];
            setTimeout(() => animateCounter(el, value, suffix), i * 120);
          });
        }
      },
      { threshold: 0.5 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section id="home" className="gh-hero" aria-label="Hero section">

        <div className="gh-hero-dot-grid" aria-hidden="true" />
        <div className="gh-hero-glow-top"  aria-hidden="true" />

        {/* Avatar */}
        <div className="gh-hero-avatar-wrap">
          <img
            src={Dhiraj}
            alt="Dhirendra Kumar — Full-Stack Developer"
            className="gh-hero-avatar"
            loading="eager"
            width={168}
            height={168}
          />
        </div>

        {/* Status badge */}
        <div className="gh-hero-badge" aria-label="Availability status">
          <span className="gh-hero-badge-dot" aria-hidden="true" />
          Open to work · Full-Stack + AI
        </div>

        {/* Name */}
        <h1 className="gh-hero-title">
          Hi, I'm{" "}
          <span className="gh-gradient-text">Dhirendra Kumar</span>
        </h1>

        {/* Rotating role */}
        <div className="gh-hero-role" aria-live="polite">
          <TextTransition springConfig={presets.gentle} inline>
            {ROLES[roleIndex % ROLES.length]}
          </TextTransition>
        </div>

        {/* Bio */}
        <p className="gh-hero-desc">
          I build full-stack products with React, Angular &amp; Node.js — and
          the generative-AI layer on top: agents, RAG, and real-time voice.
        </p>

        {/* CTA buttons */}
        <div className="gh-hero-actions">
          <a href="#contact"   className="gh-btn gh-btn-green">Get In Touch</a>
          <a href="#portfolio" className="gh-btn gh-btn-outline">View Projects</a>
          <a
            href="../resume.pdf"
            download="resume.pdf"
            className="gh-btn gh-btn-subtle"
          >
            Resume ↓
          </a>
        </div>

        {/* Social links */}
        <div className="gh-hero-socials">
          <a
            href="https://github.com/dhirendra-kumar9598"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="GitHub profile"
          >
            <GitHubIcon fontSize="small" />
          </a>
          <a
            href="https://www.linkedin.com/in/dhirendra-kr/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="LinkedIn profile"
          >
            <LinkedInIcon fontSize="small" />
          </a>
          <a
            href="https://www.instagram.com/_dhiraj.kr"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="Instagram profile"
          >
            <InstagramIcon fontSize="small" />
          </a>
        </div>

        {/* Stats row */}
        <div className="gh-stats gh-reveal" ref={statsRef} aria-label="Key stats">
          {STATS.map(({ value, suffix, label }) => (
            <div className="gh-stat" key={label}>
              <span className="gh-stat-number">{value}{suffix}</span>
              <span className="gh-stat-label">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Page Sections ─────────────────────────────────────── */}
      <About />
      <Certifications />
      <Portfolio />
      <Contact />

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="scroll-to-top"
          aria-label="Scroll back to top"
        >
          <KeyboardArrowUpIcon fontSize="small" />
        </button>
      )}
    </div>
  );
}
