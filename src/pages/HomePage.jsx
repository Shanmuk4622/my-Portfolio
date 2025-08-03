import React from 'react';
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import './HomePage.css';

// The path '../' goes from 'src/pages' up to 'src/'
// Then '/assets/profile.png' goes into the assets folder.
import profileImage from '../assets/profile.png';
import resumePDF from '../assets/resume.pdf';

const HomePage = () => {
  // ... rest of the component code
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-name">Your Full Name</h1>
        <TypeAnimation
          sequence={[
            'Deep Learning Enthusiast',
            2000,
            'AI & ML Researcher',
            2000,
            'Software Developer',
            2000,
          ]}
          wrapper="h2"
          speed={50}
          className="hero-tagline"
          repeat={Infinity}
        />
        <p className="hero-bio">
          A brief 2-3 line bio about who you are, your core interests in technology, and what you're currently focused on. Keep it engaging and professional.
        </p>
        <div className="hero-buttons">
          <Link to="/projects" className="btn btn-primary">View My Work</Link>
          <a href={resumePDF} download="YourName_Resume.pdf" className="btn btn-secondary">
            Download Resume
          </a>
        </div>
      </div>
      <div className="hero-image-container">
        <img src={profileImage} alt="Your Name" className="hero-image" />
      </div>
    </section>
  );
};

export default HomePage;