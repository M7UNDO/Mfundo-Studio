import {useState, useEffect, useRef, useContext} from "react";
import {NavLink, Link, useLocation} from "react-router-dom";
import ThemeContext from "../context/ThemeContext";
import ThemeToggle from "./ThemeToggle";
import "../styles/Navbar.css";
import Logo from "../assets/logos/Northstar Studios_Black.svg?react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useGSAP} from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const {theme} = useContext(ThemeContext);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useGSAP(() => {
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: "nav",
        start: "bottom top",
      },
    });

    navTween.fromTo(
      "nav",
      {backgroundColor: "transparent"},
      {backgroundColor: "var(--nav-colour)", duration: 1, backdropFilter: "blur(10px)", ease: "power1.inOut"},
    );
  });

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");

    const handleChange = (event) => {
      setIsMobile(event.matches);
    };

    setIsMobile(mediaQuery.matches);

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <Logo className="logo-icon" />
        <span className="logo-text">Mfundo Dhlamini</span>
      </Link>

      <div className={`nav-menu ${menuOpen ? "active" : ""}`}>
        <ul className="navlinks">
          <li>
            <NavLink onClick={closeMenu} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink onClick={closeMenu} to="/portfolio">
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink onClick={closeMenu} to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink onClick={closeMenu} to="/contact">
              Contact
            </NavLink>
          </li>
        </ul>

        <div className="nav-social">
          <a href="https://www.linkedin.com/in/mfundo-dhlamini" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-linkedin-in"></i>
          </a>

          <a href="https://github.com/M7UNDO" target="_blank" rel="noreferrer">
            <i class="fa-brands fa-github"></i>
          </a>
        </div>
        {isMobile ? "" : <ThemeToggle />}
      </div>

      <div className="mobile-actions">
        <ThemeToggle />
        <button onClick={() => setMenuOpen(!menuOpen)} className={`menu-btn ${menuOpen ? "menu-open" : ""}`}>
          <span className="menu-lines"></span>
        </button>
      </div>
    </nav>
  );
}
