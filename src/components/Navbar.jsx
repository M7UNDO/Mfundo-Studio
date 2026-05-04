import { useState, useEffect, useRef } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/Navbar.css";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const container = useRef(null);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "unset";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  useGSAP(() => {
  const trigger = ScrollTrigger.create({
    trigger: document.documentElement,
    start: "top 20%",
    toggleClass: {
      targets: container.current,
      className: "navbar-scrolled",
    },
  });

  return () => trigger.kill();
}, { scope: container });

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header>
      <nav className="navbar" ref={container}>
        <Link to="/" className="Logo">
          Mfundo Dhlamini
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

            <a href="#" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>

        <button onClick={() => setMenuOpen(!menuOpen)} className={`menu-btn ${menuOpen ? "menu-open" : ""}`}>
          <span className="menu-lines"></span>
        </button>
      </nav>
    </header>
  );
}