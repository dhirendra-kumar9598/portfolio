import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import TextTransition, { presets } from "react-text-transition";
import Navbar from "./Navbar";
import background from "./images/full2.jpeg";
import About from "./About";

import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Dhiraj from "../components/images/IMG_20231127_005126.jpg";
import Blogs from "./Blogs";
import { ThemeContext } from "../theme";
const Home = () => {
  const theme = useContext(ThemeContext).systemTheme;
  return (
    //add the data-bs-spy class for scrollspy effect
    <div style={{ backgroundColor: theme.backgroundColor }}>
     

      <Outlet />
    </div>
  );
};

export default Home;
