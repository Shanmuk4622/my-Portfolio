import React from 'react';
import ScrollReveal from '../components/ScrollReveal';
import skillsData from '../data/skills.json';
import experienceData from '../data/experience.json';
import './ExperiencePage.css';
import ExperienceTimeline from '../components/ExperienceTimeline';
import SkillsGrid from '../components/SkillsGrid';

const ExperiencePage = () => {
  return (
    <div className="experience-container">
      <ScrollReveal>
        <h1 className="experience-title">Experience</h1>
      </ScrollReveal>

      <div className="timeline-section">
        <ScrollReveal>
          <h2 className="section-title">
            Professional Journey
            <span className="experience-count">({experienceData.length})</span>
          </h2>
        </ScrollReveal>
        <ExperienceTimeline experienceData={experienceData} />
      </div>

      <div className="skills-section">
        <ScrollReveal>
          <h2 className="skills-title">Technologies & Tools</h2>
        </ScrollReveal>
        <SkillsGrid skillsData={skillsData} />
      </div>
    </div>
  );
};

export default ExperiencePage;
