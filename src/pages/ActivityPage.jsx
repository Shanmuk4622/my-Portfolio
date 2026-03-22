import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import experienceData from '../data/activity.json';
import skillsData from '../data/skills.json';
import './ActivityPage.css';
import ActivityTimeline from '../components/ActivityTimeline';
import SkillsGrid from '../components/SkillsGrid';

const ActivityPage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredActivity = experienceData.filter(activity => 
    activity.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    activity.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    activity.organization.toLowerCase().includes(searchQuery.toLowerCase()) ||
    activity.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (activity.skills && activity.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase())))
  );

  return (
    <div className="activity-container">
      <h1 className="activity-title">Activities & Achievements</h1>
      
      {/* Activity Timeline */}
      <div className="timeline-section">
        <h2 className="section-title">
          All Activities
          <span className="activity-count">({filteredActivity.length})</span>
        </h2>

        <div className="activity-search-container">
          <FaSearch className="activity-search-icon" />
          <input 
            type="text" 
            className="activity-search-input" 
            placeholder="Search activities, organizations, or skills..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {filteredActivity.length === 0 ? (
          <div className="activity-no-results">
            <p>No activities found matching "{searchQuery}"</p>
          </div>
        ) : (
          <ActivityTimeline activityData={filteredActivity} />
        )}
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
