import React, { useState, useEffect } from 'react';
import skillsData from '../data/skills.json';
import './ExperiencePage.css';
import ExperienceTimeline from '../components/ExperienceTimeline';
import SkillsGrid from '../components/SkillsGrid';

const ExperiencePage = () => {
  const [experienceData, setExperienceData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load data dynamically to avoid caching issues
    const loadData = async () => {
      try {
  const response = await fetch('/activity.json');
        const data = await response.json();
        console.log('Loaded data:', data);
        console.log('Data type:', typeof data);
        console.log('Is array:', Array.isArray(data));
        console.log('Length:', data.length);
        setExperienceData(Array.isArray(data) ? data : Object.values(data));
      } catch (error) {
        console.error('Error loading data:', error);
        // Fallback to direct import
        import('../data/activity.json').then(module => {
          const data = module.default;
          console.log('Fallback data:', data);
          setExperienceData(Array.isArray(data) ? data : Object.values(data));
        });
      }
      setLoading(false);
    };
    
    loadData();
  }, []);

  if (loading) {
    return (
      <div className="experience-container">
        <h1 className="experience-title">Experience & Projects</h1>
        <div style={{ textAlign: 'center', padding: '2rem' }}>
          Loading experiences...
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
          <span className="experience-count">({experienceData ? experienceData.length : 0})</span>
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
