import React, { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { ThemeContext } from "../theme";
import PDFViewer from "./MicroComp/PDFViewer";
export default function Certifications() {
  const { state } = useLocation();
  const theme = useContext(ThemeContext).systemTheme;

  let certificates = [
    {
      title: "Frontend Developer (React)",
      org: "HackerRank",
      cred: "https://www.hackerrank.com/certificates/9ab55620d904",
      media: {
        path: "frontend_developer.pdf",
        type: "pdf",
      },
    },
    {
      title: "Javascript(Intermediate)",
      org: "HackerRank",
      cred: "https://www.hackerrank.com/certificates/0e04cc7e2b34",
      media: {
        path: "js.pdf",
        type: "pdf",
      },
    },
    {
      title: "Java(Basic)",
      org: "HackerRank",
      cred: "https://www.hackerrank.com/certificates/2b04ad509a42",
      media: {
        path: "java.pdf",
        type: "pdf",
      },
    },
    {
      title: "C++",
      org: "Sololearn",
      cred: "https://www.sololearn.com/certificates/CC-MH0LRPX0",
      media: {
        path: "cppsololearn.png",
        type: "image",
      },
    },
  ];

  return (
    <div id="certificates">
      <div
        className="d-flex justify-content-center align-items-center pb-5 pt-5"
        id="details"
        style={{ height: "30%" }}
      >
        <div>
          <h5 className="boldHeading">Certificates</h5>
        </div>
      </div>
      <div className="d-flex flex-wrap justify-content-center">
        {certificates.map((item, index) => (
          <div
            key={index}
            className="container-certificate"
            style={{ backgroundColor: theme.boxColor }}
          >
            <div className="d-flex flex-column">
              <div
                className="d-flex justify-content-center align-items-center"
                style={{ width: "100%", height: "220px", overflow: "hidden", borderRadius: "8px" }}
              >
                <PDFViewer path={item.media}/>
              </div>
              <div>
                <h5
                  className=""
                  style={{ color: theme.textColor, margin: "0px" }}
                >
                  {item.title}
                </h5>
              </div>
              <div>
                <p style={{ color: theme.textColor, margin: "0px" }}>
                  {item.org}
                </p>
              </div>
              <div>
                <a
                  href={item.cred}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: theme.textColor,
                    margin: "0px",
                    textDecoration: "none",
                  }}
                >
                  Show credentials
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
