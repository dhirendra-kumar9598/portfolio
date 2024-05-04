import React, { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import pic from "../assets/home1.png";
import { shopee } from "../assets/data";
import Carousel from "./MicroComp/Carousel";
import { ThemeContext } from "../theme";
export default function Project() {
  const { state } = useLocation();
  const [data, setData] = useState(state.item);
  const theme = useContext(ThemeContext).systemTheme;

  return (
    <div>
      <div
        className="d-flex justify-content-center align-items-center pb-5 pt-5"
        id="details"
        style={{ height: "30%" }}
      >
        <div>
          <h5 className="boldHeading">Project Details</h5>
        </div>
      </div>
      <div>
        <div className="d-flex justify-content-center align-items-center">
          <div>
            <img src={data.image} style={{ width: "40vw", height: "20vw" }} />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="pt-5 pb-5">
          <div>
            <h3 className="subHeading" style={{ color: theme.textColor }}>
              {data.name}
            </h3>
          </div>
          <div>
            <p style={{ color: theme.textColor }}>{data.info.Overview}</p>
          </div>
          <div>
            <h5 style={{ color: theme.textColor }}>Features:</h5>
            <ul>
              {Object.entries(data.info.features).map(
                ([feature, description]) => (
                  <li key={feature}>
                    <strong style={{ color: theme.textColor }}>
                      {feature}:
                    </strong>{" "}
                    <h6 style={{ color: theme.textColor }}>{description}</h6>
                  </li>
                )
              )}
            </ul>
          </div>
          <div>
            <Carousel
              data={data.screenshots}
              logo={data.image}
              type={data.type}
            />
          </div>
          <h5 style={{ color: theme.textColor }}>Tech Stack:</h5>
          <p>
            <strong style={{ color: theme.textColor }}>Frontend:</strong>{" "}
            <h6 style={{ color: theme.textColor }}>
              {data.info["Tech Stack"].Frontend}
            </h6>
          </p>
          <p>
            <strong style={{ color: theme.textColor }}>Backend:</strong>{" "}
            <h6 style={{ color: theme.textColor }}>
              {data.info["Tech Stack"].Backend}
            </h6>
          </p>
          <p>
            <strong style={{ color: theme.textColor }}>Payment Gateway:</strong>
            <h6 style={{ color: theme.textColor }}>
              {data.info["Tech Stack"]["Payment Gateway"]}
            </h6>
          </p>

          <h5 style={{ color: theme.textColor }}>Challenges:</h5>
          <ul>
            {Object.entries(data.info.Challenges).map(
              ([challenge, description]) => (
                <li key={challenge}>
                  <strong style={{ color: theme.textColor }}>
                    {challenge}:
                  </strong>
                  <h6 style={{ color: theme.textColor }}>{description}</h6>
                </li>
              )
            )}
          </ul>

          <h5 style={{ color: theme.textColor }}>Conclusion:</h5>
          <p style={{ color: theme.textColor }}>{data.info["Conclusion"]}</p>
        </div>
      </div>
    </div>
  );
}
