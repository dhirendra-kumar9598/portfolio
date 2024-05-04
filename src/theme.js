import React from "react";
const light = {
  backgroundColor: "white",
  textColor: "black",
  boxColor:'#d9d9d9'
};
const dark = {
  backgroundColor: "#121419",
  textColor: "white",
  boxColor:'#1d2129'
};
export { light, dark };
export const ThemeContext = React.createContext(light);
