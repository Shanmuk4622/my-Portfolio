
import React from 'react';
import './AboutPage.css';
import SkillsGrid from '../components/SkillsGrid';
import skillsData from '../data/skills.json';
import profileImage from '../assets/profile.png';
import resumePDF from '../assets/resume.pdf';

const AboutPage = () => {
  return (
    <div className="about-container">
      <div className="about-main">
        <h1 className="about-title">About Me</h1>
        <img src={profileImage} alt="Bonala Shanmukesh" style={{ width: '180px', borderRadius: '50%', marginBottom: '1.5rem', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }} />
        <a href={resumePDF} download="BonalaShanmukesh_Resume.pdf" className="btn btn-primary" style={{ marginBottom: '1.5rem', display: 'inline-block' }}>Download Resume</a>
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
