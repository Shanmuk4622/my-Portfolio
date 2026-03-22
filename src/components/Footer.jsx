import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-social">
          <a href="https://github.com/Shanmuk4622" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/shanmukesh-bonala/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="https://x.com/Shanmukesh4622" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <FaTwitter />
          </a>
          <a href="mailto:shanmueksh.bonala@gmail.com" aria-label="Email">
            <FaEnvelope />
          </a>
        </div>
        <p className="footer-text">
          Made by Bonala Shanmukesh
        </p>
        <p className="footer-copyright">
          &copy; {currentYear} All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;