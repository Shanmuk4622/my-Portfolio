
import React from 'react';
import './AboutPage.css';
import SkillsGrid from '../components/SkillsGrid';
import skillsData from '../data/skills.json';
import profileImage from '../assets/profile.png';
import resumePDF from '../assets/resume.pdf';
import { FaDownload } from 'react-icons/fa';

const AboutPage = () => {
  return (
    <div className="about-container">
      <div className="about-main">
        <h1 className="about-title">About Me</h1>
        <img 
          src={profileImage} 
          alt="Bonala Shanmukesh" 
          className="about-profile-image"
        />
        <a 
          href={resumePDF} 
          download="BonalaShanmukesh_Resume.pdf" 
          className="btn btn-primary about-resume-btn"
        >
          <FaDownload /> Download Resume
        </a>
        <p className="about-text">
          Hello! I'm <strong>Bonala Shanmukesh</strong>, a B.Tech AI-ML undergrad at <strong>VIT-AP University</strong> (SCOPE CDE Dept). My passion is bridging the gap between cutting-edge AI research and real-world impact.
        </p>
        <p className="about-text">
          <strong>Core Achievements:</strong> Hackathon finalist (Smart India Hackathon), IEEE Vice-Chair, research on semantic compression (VA-JPEG), and autonomous systems (VisionDrive). I love building, leading, and learning in tech communities.
        </p>
        <p className="about-text">
          <strong>My Story:</strong> I got into AI/ML after a robotics workshop in my first year. Each project—like VisionDrive, VA-JPEG, and SmartTrackX—was a turning point, teaching me the power of deep learning, teamwork, and curiosity. Mentors and hackathons shaped my journey.
        </p>
        <p className="about-text">
          <em>"I believe technology is most powerful when it solves real problems and inspires others to build."</em>
        </p>
      </div>
      <div className="about-skills">
        <h2 className="skills-title">Key Skills & Tools</h2>
        <SkillsGrid skillsData={skillsData} />
      </div>
    </div>
  );
};

export default AboutPage;
