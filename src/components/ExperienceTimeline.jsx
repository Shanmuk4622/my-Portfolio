import React from 'react';
import { FaBuilding, FaTrophy, FaUserGraduate } from 'react-icons/fa';
import './ExperienceTimeline.css';

const iconMap = {
  Internship: <FaBuilding />, Hackathon: <FaTrophy />, Leadership: <FaUserGraduate />
};

const ExperienceTimeline = ({ experienceData }) => (
  <div className="timeline">
    {experienceData.map((exp, idx) => (
      <div className="timeline-item" key={exp.id || idx}>
        <div className="timeline-content">
          <div className="timeline-role">{exp.role}</div>
          <div className="timeline-company">{exp.company}</div>
          <span className="timeline-period">{exp.period}</span>
          {exp.type && <span className="timeline-type">{iconMap[exp.type] || ''} {exp.type}</span>}
          <ul className="timeline-description">
            {exp.description && exp.description.map((d, i) => <li key={i}>{d}</li>)}
          </ul>
        </div>
      </div>
    ))}
  </div>
);

export default ExperienceTimeline;
