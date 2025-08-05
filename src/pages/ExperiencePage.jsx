import React from 'react';
import { motion } from 'framer-motion';
import experienceData from '../data/experience.json';
import skillsData from '../data/skills.json';
import './ExperiencePage.css';
import ExperienceTimeline from '../components/ExperienceTimeline';
import SkillsGrid from '../components/SkillsGrid';

const ExperiencePage = () => {
  return (
    <div className="experience-container">
      <h1 className="experience-title">Experience</h1>
      <div className="timeline-section">
        <ExperienceTimeline experienceData={experienceData} />
      </div>
      <div className="skills-section">
        <h2 className="skills-title">Technologies & Tools</h2>
        <SkillsGrid skillsData={skillsData} />
      </div>
    </div>
  );
};

export default ExperiencePage;