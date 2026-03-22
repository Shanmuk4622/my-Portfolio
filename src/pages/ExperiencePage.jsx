import React, { useState, useEffect } from 'react';
import skillsData from '../data/skills.json';
import experienceData from '../data/experience.json';
import './ExperiencePage.css';
import ExperienceTimeline from '../components/ExperienceTimeline';
import SkillsGrid from '../components/SkillsGrid';

const ExperiencePage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a brief loading state for smooth transition
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="experience-container">
        <h1 className="experience-title">Experience</h1>
        <div className="loading-state">
          <div className="loading-spinner"></div>
          <p>Loading experiences...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="experience-container">
      <h1 className="experience-title">Experience</h1>
      
      {/* Experience Timeline */}
      <div className="timeline-section">
        <h2 className="section-title">
          Professional Journey
          <span className="experience-count">({experienceData.length})</span>
        </h2>
        <ExperienceTimeline experienceData={experienceData} />
      </div>

      {/* Skills Section */}
      <div className="skills-section">
        <h2 className="skills-title">Technologies & Tools</h2>
        <SkillsGrid skillsData={skillsData} />
      </div>
    </div>
  );
};

export default ExperiencePage;
