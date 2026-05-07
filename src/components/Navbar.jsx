import {useState, useEffect, useRef, useContext} from "react";
import {NavLink, Link, useLocation} from "react-router-dom";
import ThemeContext from "../context/ThemeContext";
import ThemeToggle from "./ThemeToggle";
import "../styles/Navbar.css";
import logoBlack from "../assets/logos/Northstar Studios_Black.svg";
import logoWhite from "../assets/logos/Northstar Studios_White.svg";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const {theme} = useContext(ThemeContext);

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


  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header>
      <nav className="navbar">
        <Link to="/" className="logo">
          <img src={theme === "light"? logoBlack: logoWhite} alt="" />
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
          <ThemeToggle />
        </div>

        <button onClick={() => setMenuOpen(!menuOpen)} className={`menu-btn ${menuOpen ? "menu-open" : ""}`}>
          <span className="menu-lines"></span>
        </button>
      </nav>
    </header>
  );
}
