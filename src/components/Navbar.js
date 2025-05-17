import React, { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { ThemeContext } from "../theme";
const Navbar = () => {
  const theme = useContext(ThemeContext).systemTheme;
  const linkStyle = {
    color: theme.textColor,
    
  };

  return (
    <div
      className="sticky-top"
      style={{
        color: theme.textColor,
        backgroundColor: theme.boxColor,
      }}
    >
      <nav className="navbar navbar-expand-sm sticky-top ">
        <div className="container-fluid justify-content-between">
          <a className="navbar-brand px-5" style={linkStyle} href="/#home">
            Dhirendra
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{ backgroundColor: "white" }}
          >
            <span className="navbar-toggler-icon"></span>
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
