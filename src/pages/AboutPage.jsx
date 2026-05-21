import React, { useState, useEffect, useRef } from 'react';
import './AboutPage.css';
import ScrollReveal from '../components/ScrollReveal';
import SkillsGrid from '../components/SkillsGrid';
import skillsData from '../data/skills.json';
import profileImage from '../assets/profile.png';
import resumePDF from '../assets/resume.pdf';
import { FaDownload } from 'react-icons/fa';

const AnimatedCounter = ({ end, suffix = '', duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);
  const parsedEnd = parseInt(end);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let startTime = null;
          const step = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * parsedEnd));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [parsedEnd, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const AboutPage = () => {
  return (
    <div className="about-container">
      <ScrollReveal direction="up">
        <div className="about-main glass-panel">
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
                <h3><AnimatedCounter end="9" suffix="+" /></h3>
                <p>AI Projects</p>
              </div>
              <div className="stat-card">
                <h3><AnimatedCounter end="2" suffix="+" /></h3>
                <p>Years Experience</p>
              </div>
              <div className="stat-card">
                <h3><AnimatedCounter end="10" suffix="+" /></h3>
                <p>Certifications</p>
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
        </div>
      </ScrollReveal>
      <ScrollReveal direction="right" delay={0.2}>
        <div className="about-skills glass-panel">
          <h2 className="skills-title">Key Skills & Tools</h2>
          <SkillsGrid skillsData={skillsData} />
        </div>
      </ScrollReveal>
    </div>
  );
};

export default AboutPage;
