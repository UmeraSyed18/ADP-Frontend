import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import "../styles/navbar.css";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {
    darkMode,
    colorblindMode,
    dyslexiaMode,
    toggleDarkMode,
    toggleColorblindMode,
    toggleDyslexiaMode,
  } = useContext(ThemeContext);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  useEffect(() => {
    document.body.classList.toggle("menu-open", isMenuOpen);
  }, [isMenuOpen]);

  return (
    <nav className="navbar-wrapper">
      <div className="navbar-container">
        <div className="navbar-logo">🌍 DisasterPredict</div>

        <ul className="navbar-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/predict">Prediction</Link>
          </li>
          <li>
            <Link to="/impact-reports">Impact Reports</Link>
          </li>
          <li>
            <Link to="/safety-hub">Safety Hub</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>

        <div className="navbar-toggles desktop">
          <Toggle
            label="Dark Mode"
            checked={darkMode}
            onChange={() => {
              toggleDarkMode();
              if (colorblindMode) toggleColorblindMode();
            }}
            type="dark"
          />
          <Toggle
            label="Colorblind Mode"
            checked={colorblindMode}
            onChange={() => {
              toggleColorblindMode();
              if (darkMode) toggleDarkMode();
            }}
            type="colorblind"
          />
          <Toggle
            label="Dyslexia Mode"
            checked={dyslexiaMode}
            onChange={toggleDyslexiaMode}
            type="dyslexia"
          />
        </div>

        <button
          className={`navbar-menu ${isMenuOpen ? "opened" : ""}`}
          onClick={toggleMenu}
          aria-label="Main Menu"
          aria-expanded={isMenuOpen}
        >
          <svg width="40" height="40" viewBox="0 0 100 100">
            <path
              className="line line1"
              d="M 20,29 H 80 C 80,29 95,28 95,66 C 95,78 91,82 85,82 C 79,82 75,75 75,75 L 25,25"
            />
            <path className="line line2" d="M 20,50 H 80" />
            <path
              className="line line3"
              d="M 20,71 H 80 C 80,71 95,72 95,34 C 95,22 91,18 85,18 C 79,18 75,25 75,25 L 25,75"
            />
          </svg>
        </button>
      </div>

      <div className={`navbar-mobile-panel ${isMenuOpen ? "show" : ""}`}>
        <ul className="navbar-links-open">
          <li>
            <Link to="/" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/predict" onClick={toggleMenu}>
              Prediction
            </Link>
          </li>
          <li>
            <Link to="/impact-reports" onClick={toggleMenu}>
              Impact Reports
            </Link>
          </li>
          <li>
            <Link to="/safety-hub" onClick={toggleMenu}>
              Safety Hub
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={toggleMenu}>
              About
            </Link>
          </li>
        </ul>
        <div className="navbar-toggles mobile">
          <Toggle
            label="Dark Mode"
            checked={darkMode}
            onChange={() => {
              toggleDarkMode();
              if (colorblindMode) toggleColorblindMode();
            }}
            type="dark"
          />
          <Toggle
            label="Colorblind Mode"
            checked={colorblindMode}
            onChange={() => {
              toggleColorblindMode();
              if (darkMode) toggleDarkMode();
            }}
            type="colorblind"
          />
          <Toggle
            label="Dyslexia Mode"
            checked={dyslexiaMode}
            onChange={toggleDyslexiaMode}
            type="dyslexia"
          />
        </div>
      </div>
    </nav>
  );
}

function Toggle({ label, checked, onChange, type }) {
  return (
    <div className="navbar-toggle">
      <span>{label}</span>
      <label className="navbar-switch">
        <input type="checkbox" checked={checked} onChange={onChange} />
        <span className={`navbar-slider ${type}`}></span>
      </label>
    </div>
  );
}
