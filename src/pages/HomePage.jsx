import React from 'react';
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import './HomePage.css';

import profileImage from '../assets/profile.png';
import resumePDF from '../assets/resume.pdf';

const HomePage = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-name">Bonala Shanmukesh</h1>
        <TypeAnimation
          sequence={[
            'Deep Learning Enthusiast',
            2000,
            'AI & ML Researcher',
            2000,
            'Computer Vision Developer',
            2000,
            'Hackathon Finalist',
            2000,
          ]}
          wrapper="h2"
          speed={50}
          className="hero-tagline"
          repeat={Infinity}
        />
        <p className="hero-bio">
          I'm a B.Tech AI-ML undergrad at VIT-AP with a strong focus on Deep Learning, Computer Vision, and real-world applications of AI. I love building innovative projects that bridge research and impact, from autonomous vehicles to image understanding.
        </p>
        <div className="hero-buttons">
          <Link to="/projects" className="btn btn-primary">View My Work</Link>
          <a href={resumePDF} download="BonalaShanmukesh_Resume.pdf" className="btn btn-secondary">
            Download Resume
          </a>
        </div>
      </div>
      <div className="hero-image-container">
        <img src={profileImage} alt="Bonala Shanmukesh" className="hero-image" />
      </div>
    </section>
  );
};

export default HomePage;
