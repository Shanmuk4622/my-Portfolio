import React, { useState, useEffect } from 'react';
import skillsData from '../data/skills.json';
import './ExperiencePage.css';
import ExperienceTimeline from '../components/ExperienceTimeline';
import SkillsGrid from '../components/SkillsGrid';

const ExperiencePage = () => {
  const [experienceData, setExperienceData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetch('/activity.json');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setExperienceData(Array.isArray(data) ? data : Object.values(data));
      } catch (err) {
        setError(err.message);
        // Fallback to direct import
        try {
          const module = await import('../data/activity.json');
          const data = module.default;
          setExperienceData(Array.isArray(data) ? data : Object.values(data));
          setError(null);
        } catch {
          setError('Failed to load experience data');
        }
      } finally {
        setLoading(false);
      }
    };
    
    loadData();
  }, []);

  if (loading) {
    return (
      <div className="experience-container">
        <h1 className="experience-title">Experience & Projects</h1>
        <div className="loading-state">
          <div className="loading-spinner"></div>
          <p>Loading experiences...</p>
        </div>
      </div>
    );
  }

  if (error && experienceData.length === 0) {
    return (
      <div className="experience-container">
        <h1 className="experience-title">Experience & Projects</h1>
        <div className="error-state">
          <p>Unable to load experiences. Please try again later.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="experience-container">
      <h1 className="experience-title">Experience & Projects</h1>
      
      {/* Experience Timeline */}
      <div className="timeline-section">
        <h2 className="section-title">
          All Experiences
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
