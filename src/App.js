import React, { Component, useContext, useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { ReactDOM } from "react-dom/client";
import { BrowserRouter, Routes, Outlet, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Blogs from "./components/Blogs";
import Portfolio from "./components/Portfolio";
import PrivateComponent from "./components/PrivateComponent";
import Project from "./components/Project";
import Main from "./components/Main";
import { dark, light, ThemeContext } from "./theme";
import Welcome from "./components/Welcome";

const App = () => {
  const [loading, setLoading] = useState(false);
  const prefersDarkMode =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [systemTheme, setSystemTheme] = useState(
    prefersDarkMode == true ? dark : light
  );
  console.log("dark mode =>", prefersDarkMode);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 3000);
  }, []);
  return (
    <>
      <ThemeContext.Provider value={{ systemTheme, setSystemTheme }}>
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
              </Route>
            </Routes>
          </BrowserRouter>
        )}
      </ThemeContext.Provider>
    </>
  );
};

export default App;
