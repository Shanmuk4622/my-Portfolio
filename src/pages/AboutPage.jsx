import React from 'react';
import { motion } from 'framer-motion';
import './AboutPage.css';
import SkillsGrid from '../components/SkillsGrid';
import skillsData from '../data/skills.json';
import profileImage from '../assets/profile.png';
import resumePDF from '../assets/resume.pdf';
import { FaDownload } from 'react-icons/fa';

const AboutPage = () => {
  return (
    <div className="about-container">
      <motion.div 
        className="about-main glass-panel"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="about-title">About Me</h1>
        <div className="about-image-wrapper">
          <img 
            src={profileImage} 
            alt="Bonala Shanmukesh" 
            className="about-profile-image"
          />
        </div>
        <a 
          href={resumePDF} 
          download="BonalaShanmukesh_Resume.pdf" 
          className="btn btn-primary about-resume-btn"
        >
          <FaDownload /> Download Resume
        </a>
        <div className="about-content-text">
          <p className="about-text">
            Hello! I'm <strong>Bonala Shanmukesh</strong>, a B.Tech AI-ML undergrad at <strong>VIT-AP University</strong> (SCOPE CDE Dept). My passion is bridging the gap between cutting-edge AI research and real-world impact.
          </p>
          <div className="stats-row">
            <div className="stat-card">
              <h3>9+</h3>
              <p>AI Projects</p>
            </div>
            <div className="stat-card">
              <h3>2+</h3>
              <p>Years Experience</p>
            </div>
            <div className="stat-card">
              <h3>1</h3>
              <p>Hackathon Finalist</p>
            </div>
          </div>
          <p className="about-text glass-box">
            <strong>Core Achievements:</strong> Hackathon finalist (Smart India Hackathon), IEEE Vice-Chair, research on semantic compression (VA-JPEG), and autonomous systems (VisionDrive). I love building, leading, and learning in tech communities.
          </p>
          <p className="about-text">
            <strong>My Story:</strong> I got into AI/ML after a robotics workshop in my first year. Each project—like VisionDrive, VA-JPEG, and SmartTrackX—was a turning point, teaching me the power of deep learning, teamwork, and curiosity. Mentors and hackathons shaped my journey.
          </p>
          <p className="about-quote">
            "I believe technology is most powerful when it solves real problems and inspires others to build."
          </p>
        </div>
      </motion.div>
      <motion.div 
        className="about-skills glass-panel"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="skills-title">Key Skills & Tools</h2>
        <SkillsGrid skillsData={skillsData} />
      </motion.div>
    </div>
  );
};

export default AboutPage;
