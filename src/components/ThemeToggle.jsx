import React from "react";
import {useContext} from "react";
import ThemeContext from "../context/ThemeContext";
import Sun from "../assets/images/icons/sun.svg?react";
import Moon from "../assets/images/icons/moon.svg?react";
import "../styles/ThemeToggle.css";

export default function ThemeToggle() {
  const {theme, toggleTheme} = useContext(ThemeContext);
  return (
    <button onClick={toggleTheme} className="theme-btn">
      {theme === "light" ? <Moon /> : <Sun />}
    </button>
  );
}
