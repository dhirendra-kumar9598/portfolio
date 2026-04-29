import React, { useContext, useRef, useState, useEffect, useCallback } from "react";
import TextTransition, { presets } from "react-text-transition";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Dhiraj from "../components/images/full2.jpeg";
import { ThemeContext } from "../theme";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Certifications from "./Certifications";

const ROLES = [
  "Full-Stack Developer",
  "Frontend Developer",
  "Backend Developer",
  "Android Developer",
];

const STATS = [
  { value: 2,  suffix: "+", label: "Years Experience" },
  { value: 15, suffix: "+", label: "Projects Shipped" },
  { value: 10, suffix: "+", label: "Technologies" },
  { value: 8,  suffix: "k+", label: "Lines of Code / day" },
];

// Eased counter — cubic ease-out
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

  // Refs
  const heroRef     = useRef(); // scope for entrance + parallax
  const heroInnerRef = useRef();
  const statsRef    = useRef();
  const statsAnimated = useRef(false);

  // Fire stat counters once when they enter viewport
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

  // GSAP: entrance stagger + hero exit parallax
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Stagger each hero element in from below
    gsap.from(heroRef.current.querySelectorAll(".hero-anim"), {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power3.out",
      delay: 0.05,
    });

    // Hero content rises slower than scroll → floating depth effect
    gsap.to(heroInnerRef.current, {
      y: -140,
      ease: "none",
      scrollTrigger: {
        trigger: "#home",
        start: "top top",
        end: "bottom top",
        scrub: 1.6,
      },
    });
  }, { scope: heroRef });

  return (
    <div>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section id="home" className="gh-hero" ref={heroRef} aria-label="Hero section">

        {/* Background layers: dot grid + dual elliptical glows */}
        <div className="gh-hero-dot-grid" aria-hidden="true" />
        <div className="gh-hero-glow-top"  aria-hidden="true" />
        <div className="gh-hero-glow-br"   aria-hidden="true" />

        {/* Parallax content wrapper */}
        <div ref={heroInnerRef} style={{ display: "contents" }}>

          {/* Avatar */}
          <div className="gh-hero-avatar-wrap hero-anim">
            <img
              src={Dhiraj}
              alt="Dhirendra Kumar — Full-Stack Developer"
              className="gh-hero-avatar"
              loading="eager"
              width={112}
              height={112}
            />
          </div>

          {/* Status badge */}
          <div className="gh-hero-badge hero-anim" aria-label="Availability status">
            <span className="gh-hero-badge-dot" aria-hidden="true" />
            Open to work · Full-Stack Developer
          </div>

          {/* Name with GitHub-style gradient */}
          <h1 className="gh-hero-title hero-anim">
            Hi, I'm{" "}
            <span className="gh-gradient-text">Dhirendra Kumar</span>
          </h1>

          {/* Rotating role */}
          <div className="gh-hero-role hero-anim" aria-live="polite">
            <TextTransition springConfig={presets.wobbly}>
              {ROLES[roleIndex % ROLES.length]}
            </TextTransition>
          </div>

          {/* Bio */}
          <p className="gh-hero-desc hero-anim">
            Building scalable web &amp; mobile apps with React, Node.js &amp;
            React Native. I care about clean architecture, performance,
            and shipping products people love.
          </p>

          {/* CTA buttons */}
          <div className="gh-hero-actions hero-anim">
            <a href="#contact"  className="gh-btn gh-btn-green">Get In Touch</a>
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
          <div className="gh-hero-socials hero-anim">
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

          {/* ── Stats row (GitHub metrics style) ────────────── */}
          <div className="gh-stats gh-reveal hero-anim" ref={statsRef} aria-label="Key stats">
            {STATS.map(({ value, suffix, label }) => (
              <div className="gh-stat" key={label}>
                <span className="gh-stat-number">{value}{suffix}</span>
                <span className="gh-stat-label">{label}</span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── Page Sections ─────────────────────────────────────── */}
      <About />
      <Certifications />
      <Portfolio />
      <Contact />

      {/* Scroll-to-top */}
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
