import React, { useContext, useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav
      className={`navbar${scrolled ? ' scrolled' : ''}`}
      role="navigation"
      aria-label="Main navigation"
    >
      <Link to="/" className="navbar-brand" onClick={closeMenu}>
        Bonala Shanmukesh
      </Link>
      <button
        className={`navbar-hamburger${menuOpen ? ' open' : ''}`}
        onClick={() => setMenuOpen((open) => !open)}
        aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={menuOpen}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>
      <div className={`navbar-links${menuOpen ? ' open' : ''}`}>
        <NavLink to="/about" onClick={closeMenu} className={({ isActive }) => isActive ? 'active' : ''}>
          About
        </NavLink>
        <NavLink to="/projects" onClick={closeMenu} className={({ isActive }) => isActive ? 'active' : ''}>
          Projects
        </NavLink>
        <NavLink to="/experience" onClick={closeMenu} className={({ isActive }) => isActive ? 'active' : ''}>
          Experience
        </NavLink>
        <NavLink to="/activity" onClick={closeMenu} className={({ isActive }) => isActive ? 'active' : ''}>
          Activity
        </NavLink>
        <NavLink to="/certifications" onClick={closeMenu} className={({ isActive }) => isActive ? 'active' : ''}>
          Certifications
        </NavLink>
        <NavLink to="/research" onClick={closeMenu} className={({ isActive }) => isActive ? 'active' : ''}>
          Research
        </NavLink>
        <NavLink to="/contact" onClick={closeMenu} className={({ isActive }) => isActive ? 'active' : ''}>
          Contact
        </NavLink>
        <button
          onClick={toggleTheme}
          className="theme-toggle-button"
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
          {theme === 'light' ? <FaMoon /> : <FaSun />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;