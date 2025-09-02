import React from 'react';
import experienceData from '../data/experience.json';
import skillsData from '../data/skills.json';
import './ActivityPage.css';
import ActivityTimeline from '../components/ActivityTimeline';
import SkillsGrid from '../components/SkillsGrid';

const ActivityPage = () => {
  // Debug: Log the raw data
  console.log('Raw activity data:', experienceData?.length, 'items');

  return (
    <div className="activity-container">
      <h1 className="activity-title">Activities & Achievements</h1>
      
      {/* Activity Timeline */}
      <div className="timeline-section">
        <h2 className="section-title">
          All Activities
          <span className="activity-count">({experienceData.length})</span>
        </h2>
        <ActivityTimeline activityData={experienceData} />
      </div>

      {/* Skills Section */}
      <div className="skills-section">
        <h2 className="skills-title">Technologies & Tools</h2>
        <SkillsGrid skillsData={skillsData} />
      </div>
    </div>
  );
};

export default ActivityPage;
