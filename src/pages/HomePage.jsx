import React from 'react';
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import './HomePage.css';
import { FaArrowRight } from 'react-icons/fa';

import profileImage from '../assets/profile.png';
import resumePDF from '../assets/resume.pdf';

const HomePage = () => {
  return (
    <section className="hero-section">
      <div className="hero-background-glow"></div>
      <div className="hero-particles">
        {[...Array(20)].map((_, i) => (
          <span
            key={i}
            className="hero-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${6 + Math.random() * 8}s`,
              width: `${4 + Math.random() * 8}px`,
              height: `${4 + Math.random() * 8}px`,
            }}
          />
        ))}
      </div>
      <motion.div
        className="hero-content glass-card"
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <motion.p
          className="hero-greeting"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Hello, I'm
        </motion.p>
        <h1 className="hero-name">Bonala Shanmukesh</h1>
        <TypeAnimation
          sequence={[
            'Deep Learning Enthusiast', 2000,
            'AI & ML Researcher', 2000,
            'Computer Vision Developer', 2000,
            'Hackathon Finalist', 2000,
          ]}
          wrapper="h2"
          speed={50}
          className="hero-tagline"
          repeat={Infinity}
        />
        <motion.p
          className="hero-bio"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          I'm a B.Tech AI-ML undergrad at VIT-AP with a strong focus on Deep Learning, Computer Vision, and real-world applications of AI. I love building innovative projects that bridge research and impact, from autonomous vehicles to image understanding.
        </motion.p>
        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <Link to="/projects" className="btn btn-primary">
            View My Work <FaArrowRight />
          </Link>
          <a href={resumePDF} download="BonalaShanmukesh_Resume.pdf" className="btn btn-secondary">
            Download Resume
          </a>
        </motion.div>
        <motion.div
          className="hero-stats-row"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <div className="hero-stat">
            <span className="hero-stat-num">9+</span>
            <span className="hero-stat-label">Projects</span>
          </div>
          <div className="hero-stat">
            <span className="hero-stat-num">10+</span>
            <span className="hero-stat-label">Certifications</span>
          </div>
          <div className="hero-stat">
            <span className="hero-stat-num">2+</span>
            <span className="hero-stat-label">Years Exp</span>
          </div>
        </motion.div>
      </motion.div>
      <motion.div
        className="hero-image-container"
        initial={{ opacity: 0, scale: 0.6, rotate: -5 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="hero-image-wrapper">
          <div className="hero-image-ring"></div>
          <img src={profileImage} alt="Bonala Shanmukesh" className="hero-image" />
        </div>
      </motion.div>
    </section>
  );
};

export default HomePage;