import React from "react";
const light = {
  backgroundColor: "transparent", // Let animated background show through
  textColor: "#1e293b", // Darker slate for better contrast
  boxColor: "rgba(255, 255, 255, 0.12)" // Glass effect background
};
const dark = {
  backgroundColor: "transparent", // Let animated background show through
  textColor: "#f1f5f9", // Light gray for better readability
  boxColor: "rgba(15, 23, 42, 0.7)" // Glass effect background for dark mode
};
export { light, dark };
export const ThemeContext = React.createContext(light);
