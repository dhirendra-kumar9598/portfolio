import React from "react";

const light = {
  backgroundColor: "transparent",
  textColor: "#24292f",
  boxColor: "rgba(255, 255, 255, 0.9)",
  borderColor: "#d0d7de",
  surfaceColor: "rgba(246, 248, 250, 0.9)",
};

const dark = {
  backgroundColor: "transparent",
  textColor: "#e6edf3",
  boxColor: "rgba(22, 27, 34, 0.9)",
  borderColor: "#30363d",
  surfaceColor: "rgba(22, 27, 34, 0.9)",
};

export { light, dark };
export const ThemeContext = React.createContext(dark);
