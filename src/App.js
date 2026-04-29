import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Project from "./components/Project";
import Main from "./components/Main";
import { dark, light, ThemeContext } from "./theme";
import Welcome from "./components/Welcome";
import Certifications from "./components/Certifications";
import AnimatedBackground from "./components/AnimatedBackground";
import { pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const App = () => {
  const [loading, setLoading] = useState(false);
  const [systemTheme, setSystemTheme] = useState(dark);

  useEffect(() => {
    setTimeout(() => setLoading(true), 3000);
  }, []);

  // Scroll reveal — watches all .gh-reveal elements after content loads
  useEffect(() => {
    if (!loading) return;
    const timer = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
            }
          });
        },
        { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
      );
      document.querySelectorAll(".gh-reveal").forEach((el) => observer.observe(el));
      return () => observer.disconnect();
    }, 150);
    return () => clearTimeout(timer);
  }, [loading]);

  // Parallax — moves section headings and standalone images at reduced scroll speed
  const rafRef = useRef(null);
  useEffect(() => {
    if (!loading) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const RULES = [
      { selector: ".gh-section-head", factor: 0.06 },
      { selector: ".aboutImage",      factor: 0.10 },
      { selector: ".gh-hero-dot-grid",factor: 0.03 },
    ];

    const tick = () => {
      const vy = window.scrollY;
      const vh = window.innerHeight;

      RULES.forEach(({ selector, factor }) => {
        document.querySelectorAll(selector).forEach((el) => {
          const rect = el.getBoundingClientRect();
          const center = rect.top + rect.height / 2;
          const offset = (vh / 2 - center) * factor;
          el.style.transform = `translateY(${offset.toFixed(2)}px)`;
        });
      });

      rafRef.current = null;
    };

    const onScroll = () => {
      if (!rafRef.current) rafRef.current = requestAnimationFrame(tick);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    tick(); // run once on mount
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [loading]);

  const isDark = systemTheme === dark;

  return (
    <div className={`box-wrapper ${isDark ? "dark-theme" : "light-theme"}`}>
      <div className="box-content">
        <ThemeContext.Provider value={{ systemTheme, setSystemTheme }}>
          <AnimatedBackground theme={systemTheme} />
          {!loading ? (
            <Welcome />
          ) : (
            <BrowserRouter>
              <Navbar />
              <Routes>
                <Route element={<Home />}>
                  <Route path="/" element={<Main />} />
                  <Route path="/project" element={<Project />} />
                  <Route path="/certificates" element={<Certifications />} />
                </Route>
              </Routes>
            </BrowserRouter>
          )}
        </ThemeContext.Provider>
      </div>
    </div>
  );
};

export default App;
