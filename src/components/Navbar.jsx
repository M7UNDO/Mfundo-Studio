import {useState, useEffect} from "react";
import {NavLink, Link, useLocation} from "react-router-dom";
import "../styles/Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation;

  useEffect(() => {
    setMenuOpen(false);
  }, location);

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
        <Link to="/" className="Logo">
          Mfundo Dhlamini
        </Link>

        <div className={`nav-menu ${menuOpen ? "active" : ""}`}>
          <ul className="navlinks">
            <li>
              <NavLink onClick={closeMenu} to="/" className={({isActive}) => (isActive ? "active" : "")}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink onClick={closeMenu} to="/portfolio" className={({isActive}) => (isActive ? "active" : "")}>
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink onClick={closeMenu} to="design-process" className={({isActive}) => (isActive ? "active" : "")}>
                Design Process
              </NavLink>
            </li>
            <li>
              <NavLink onClick={closeMenu} to="about" className={({isActive}) => (isActive ? "active" : "")}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink onClick={closeMenu} to="contact" className={({isActive}) => (isActive ? "active" : "")}>
                Contact
              </NavLink>
            </li>
          </ul>
          <div className="nav-social">
            <a href="www.linkedin.com/in/mfundo-dhlamini" target="_blank"><i class="fa-brands fa-linkedin-in"></i></a>
            <a href="" target="_blank"><i class="fa-brands fa-instagram"></i></a>
          </div>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`menu-btn ${menuOpen ? "menu-open" : ""}`}
          aria-label="Toggle navigation menu"
        >
          <span className="menu-lines"></span>
        </button>
      </nav>
    </header>
  );
}
