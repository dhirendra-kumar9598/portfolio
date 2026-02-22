import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Project from "./components/Project";
import Main from "./components/Main";
import { dark, light, ThemeContext } from "./theme";
import Welcome from "./components/Welcome";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Certifications from "./components/Certifications";
import AnimatedBackground from "./components/AnimatedBackground";
import { pdfjs } from "react-pdf";
// Set the worker source globally
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;


const App = () => {
  const [loading, setLoading] = useState(false);
  const prefersDarkMode =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [systemTheme, setSystemTheme] = useState(
    prefersDarkMode === true ? dark : light
  );
  console.log("dark mode =>", prefersDarkMode);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 3000);
  }, []);
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

  });
  return (
    <div className="box-wrapper">
      <div className="box-content">
        <ThemeContext.Provider value={{ systemTheme, setSystemTheme }}>
          <AnimatedBackground theme={systemTheme} />
          {!loading ? (
            <Welcome />
          ) : (
            <BrowserRouter>
              <Navbar />
              <Routes>
                {/* <Route path="/" element={<Home/>} /> */}
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
