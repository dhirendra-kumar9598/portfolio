import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Shoppe from "../assets/images/projects/shopee.png";
import ezshop from "../assets/images/projects/ezshop.png";
import Neo from "../assets/images/projects/neo.png";
import Travel from "../assets/images/projects/travel.png";
import Habit from "../assets/images/projects/habit.png";
import news from "../assets/images/projects/news.png";

import OutboundIcon from "@mui/icons-material/Outbound";
import { shopee, Ezshop, nuzino, wallpaper, gym, travel } from "../assets/data";
import shopee1 from "../assets/images/projects/images/Shoppe/shopee1.png";
import shopee2 from "../assets/images/projects/images/Shoppe/shopee2.png";
import shopee3 from "../assets/images/projects/images/Shoppe/shopee3.png";
import shopee4 from "../assets/images/projects/images/Shoppe/shopee4.png";
import shopee5 from "../assets/images/projects/images/Shoppe/shopee5.png";
import shopee6 from "../assets/images/projects/images/Shoppe/shopee6.png";
import shopee7 from "../assets/images/projects/images/Shoppe/shopee7.png";
import shopee8 from "../assets/images/projects/images/Shoppe/shopee8.png";
import shopee9 from "../assets/images/projects/images/Shoppe/shopee9.png";
import shopee10 from "../assets/images/projects/images/Shoppe/shopee10.png";

import ezshop1 from "../assets/images/projects/images/Ezshop/ezshop1.png";
import ezshop2 from "../assets/images/projects/images/Ezshop/ezshop2.png";
import ezshop3 from "../assets/images/projects/images/Ezshop/ezshop3.png";
import ezshop4 from "../assets/images/projects/images/Ezshop/ezshop4.png";
import ezshop5 from "../assets/images/projects/images/Ezshop/ezshop5.png";
import ezshop6 from "../assets/images/projects/images/Ezshop/ezshop6.png";
import ezshop7 from "../assets/images/projects/images/Ezshop/ezshop7.png";
import ezshop8 from "../assets/images/projects/images/Ezshop/ezshop8.png";
import ezshop9 from "../assets/images/projects/images/Ezshop/ezshop9.png";
import ezshop10 from "../assets/images/projects/images/Ezshop/ezshop10.png";

import nuzino1 from "../assets/images/projects/images/Nuzino/nuzino1.png";
import nuzino2 from "../assets/images/projects/images/Nuzino/nuzino2.png";
import nuzino3 from "../assets/images/projects/images/Nuzino/nuzino3.png";
import nuzino4 from "../assets/images/projects/images/Nuzino/nuzino4.png";

import wallpaper1 from "../assets/images/projects/images/wallpaper/wallpaper1.png";
import wallpaper2 from "../assets/images/projects/images/wallpaper/wallpaper2.png";
import wallpaper3 from "../assets/images/projects/images/wallpaper/wallpaper3.png";
import wallpaper4 from "../assets/images/projects/images/wallpaper/wallpaper4.png";

import gym1 from "../assets/images/projects/images/gym/neo1.png";
import gym2 from "../assets/images/projects/images/gym/neo2.png";
import gym3 from "../assets/images/projects/images/gym/neo3.png";
import gym4 from "../assets/images/projects/images/gym/neo4.png";

import travel1 from "../assets/images/projects/images/travel/travel1.png";
import travel2 from "../assets/images/projects/images/travel/travel2.png";
import travel3 from "../assets/images/projects/images/travel/travel3.png";
import travel4 from "../assets/images/projects/images/travel/travel4.png";
import { ThemeContext } from "../theme";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Portfolio = () => {
  const theme = useContext(ThemeContext).systemTheme;
  const boxStyle = {
    padding: "3vh",
    margin: "3vh",
    backgroundColor: "#d5e5e9",

    borderRadius: "3vh",
  };

  const projects = [
    {
      id: 1,
      name: "Shopee e-commerce",
      image: Shoppe,
      type: "Web",
      git: "#",
      page: "#",
      info: shopee,

      screenshots: [
        shopee1,
        shopee2,
        shopee3,
        shopee4,
        shopee5,
        shopee6,
        shopee7,
        shopee8,
        shopee9,
        shopee10,
      ],
    },
    {
      id: 1,
      name: "Ezshop e-commerce",
      image: ezshop,
      type: "Android",
      git: "#",
      page: "#",
      info: Ezshop,

      screenshots: [
        ezshop1,
        ezshop2,
        ezshop3,
        ezshop4,
        ezshop5,
        ezshop6,
        ezshop7,
        ezshop8,
        ezshop9,
        ezshop10,
      ],
    },
    {
      id: 5,
      name: "News App",
      image: news,
      type: "Android",
      git: "#",
      page: "#",
      info: nuzino,

      screenshots: [nuzino1, nuzino2, nuzino3, nuzino4],
    },
    {
      id: 5,
      name: "Photo Gallery",
      image: "",
      type: "Android",
      git: "#",
      page: "#",
      info: wallpaper,

      screenshots: [wallpaper1, wallpaper2, wallpaper3, wallpaper4],
    },
    {
      id: 2,
      name: "NeoGym",
      image: Neo,
      type: "Web",
      git: "#",
      page: "#",
      info: gym,
      screenshots: [gym1, gym2, gym3, gym4],
    },
    {
      id: 3,
      name: "Travel",
      image: Travel,
      type: "Web",
      git: "#",
      page: "#",
      info: travel,
      screenshots: [travel1, travel2, travel3, travel4],
    },
  ];

  useGSAP(() => {
    gsap.from(".projectBox", {
      scrollTrigger: {
        trigger: ".projectBox",
        // start:"bottom 70%",
        // scrub: true,
        toggleActions: "restart pause resume pause",
      },
      y: 200,
      opacity: 0,
      ease: "none",
      duration: 2,
    });
  });

  return (
    <div className=" " id="portfolio">
      <div className="d-flex justify-content-center align-items-center">
        <hr width="35%" size="10" align="center" style={{ color: "#4a48ff" }} />
        <h1 className="boldHeading">Projects</h1>
        <hr width="35%" size="10" align="center" style={{ color: "#4a48ff" }} />
      </div>

      <div
        className="d-flex flex-row justify-content-center"
        style={{ flexFlow: "row", flexWrap: "wrap" }}
      >
        {projects.map((item) => (
          <div className="d-flex flex-row justify-content-center align-items-center flex-wrap projectBox p-3 ">
            <div className=" ">
              <div className="d-flex flex-column justify-content-center align-items-center">
                <div>
                  <img src={item.screenshots[0]} className="projectImage"></img>
                </div>
              </div>
            </div>
            <div className="d-flex flex-column justify-content-center">
              <div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <div className="d-flex justify-content-center align-items-center">
                    <div>
                      <h5
                        className="subHeading"
                        style={{ color: theme.textColor }}
                      >
                        {item.name}
                      </h5>
                    </div>
                    <Link to="/project" state={{ item }} className="skillItems">
                      <div className="arrowBox mx-2">
                        <OutboundIcon fontSize="large" className="arrowIcon" />
                      </div>
                    </Link>
                  </div>
                  <div>
                    <h6 style={{ color: theme.textColor }}> ({item.type})</h6>
                  </div>
                </div>
              </div>

              <div>
                <div
                  className="projectOverview"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    alignItems: "center",
                    // maxWidth:"50vw"
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <p style={{ color: theme.textColor }}>
                      {item.info.Overview}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
