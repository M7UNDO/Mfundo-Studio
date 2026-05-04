import React from "react";
import {useContext} from "react";
import ThemeContext from "../context/ThemeContext";
import "../styles/ThemeToggle.css";

export default function ThemeToggle() {
  const {theme, toggleTheme} = useContext(ThemeContext);
  return (
    <button onClick={toggleTheme} className="theme-btn">
      <span data-theme={theme} className="material-symbols-outlined">
        {theme === "light" ? "dark_mode" : "light_mode"}
      </span>
    </button>
  );
}
