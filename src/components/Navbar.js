import React, { useContext, useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import { ThemeContext } from "../theme";
const Navbar = () => {
  const theme = useContext(ThemeContext).systemTheme;
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const linkStyle = {
    color: theme.textColor,
    
  };

  const navbarStyle = {
    color: theme.textColor,
    background: !scrolled 
      ? (theme.textColor === '#f1f5f9' 
          ? 'rgb(0 0 0 / 60%)' 
          : 'rgba(240, 244, 255, 0.6)')
      : 'transparent',
    backdropFilter: !scrolled ? 'blur(20px)' : 'none',
    WebkitBackdropFilter: !scrolled ? 'blur(20px)' : 'none',
    transition: 'all 0.3s ease',
  };

  return (
    <div
      className="sticky-top"
      style={navbarStyle}
    >
      <nav className="navbar navbar-expand-sm sticky-top ">
        <div className="container-fluid justify-content-between">
          <a className="navbar-brand px-5" style={linkStyle} href="/#home">
            Dhirendra
          </a>
          <button
            className="navbar-toggler custom-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="custom-toggler-icon"></span>
            <span className="custom-toggler-icon"></span>
            <span className="custom-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse px-5 justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item px-1">
                <a
                  className="nav-link active"
                  aria-current="page"
                  style={linkStyle}
                  href="/#home"
                >
                  Home
                </a>
              </li>
              <li className="nav-item px-1">
                <a className="nav-link" style={linkStyle} href="/#portfolio">
                  Projects
                </a>
              </li>
              <li className="nav-item px-1">
                <a className="nav-link" style={linkStyle} href="/#about">
                  About
                </a>
              </li>

              <li className="nav-item px-1">
                <a className="nav-link" style={linkStyle} href="/#contact">
                  Contact
                </a>
              </li>
               <li className="nav-item px-1">
                <a className="nav-link" style={linkStyle} href="/#certificates">
                  Certificates
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
