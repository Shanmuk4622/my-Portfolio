import React, { useContext } from 'react'; // Import useContext
import { Link } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext'; // Import our context
import { FaSun, FaMoon } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext); // Use the context

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">Your Name</Link>
      <div className="navbar-links">
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/experience">Experience</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/certifications">Certifications</Link>
        <button onClick={toggleTheme} className="theme-toggle-button">
          {theme === 'light' ? <FaMoon /> : <FaSun />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;