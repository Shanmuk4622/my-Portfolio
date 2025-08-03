import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Use Link for the brand logo to go home */}
      <Link to="/" className="navbar-brand">Your Name</Link>
      <div className="navbar-links">
        {/* Use Link for navigation */}
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/experience">Experience</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;