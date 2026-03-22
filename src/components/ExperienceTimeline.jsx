import React from 'react';
import { 
  FaBuilding, 
  FaCalendarAlt,
  FaExternalLinkAlt,
  FaMapMarkerAlt,
  FaBriefcase
} from 'react-icons/fa';
import './ExperienceTimeline.css';

const ExperienceTimeline = ({ experienceData }) => {
  if (!experienceData || !Array.isArray(experienceData) || experienceData.length === 0) {
    return (
      <div className="experience-timeline-empty">
        <p>No experience data available</p>
      </div>
    );
  }
  
  return (
    <div className="experience-timeline">
      {experienceData.map((exp, idx) => (
        <div className="experience-item" key={exp.id || idx}>
          <div className="experience-content">
            <div className="experience-card">
              {/* Header with Title and Company */}
              <div className="experience-header">
                <div className="experience-role">
                  <span className="role-icon"><FaBriefcase /></span>
                  <h3 className="role-title">{exp.role}</h3>
                </div>
              </div>

              {/* Organization and Date */}
              <div className="experience-meta">
                <div className="meta-item org-name">
                  <FaBuilding className="meta-icon" />
                  <span>{exp.company}</span>
                </div>
                <div className="meta-item">
                  <FaMapMarkerAlt className="meta-icon" />
                  <span>{exp.location}</span>
                </div>
                <div className="meta-item date-badge">
                  <FaCalendarAlt className="meta-icon" />
                  <span>{exp.duration}</span>
                </div>
              </div>

              {/* Description */}
              <div className="experience-description">
                <ul className="experience-tasks">
                  {Array.isArray(exp.description) 
                    ? exp.description.map((task, i) => <li key={i}>{task}</li>)
                    : <li>{exp.description}</li>
                  }
                </ul>
              </div>

              {/* Skills */}
              {exp.skills && exp.skills.length > 0 && (
                <div className="experience-skills">
                  <div className="skills-list">
                    {exp.skills.map((skill, i) => (
                      <span key={i} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Links */}
              {exp.links && exp.links.length > 0 && (
                <div className="experience-links">
                  <div className="links-list">
                    {exp.links.map((link, i) => (
                      <a 
                        key={i} 
                        href={link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="link-item"
                      >
                        <FaExternalLinkAlt />
                        {link.includes('github') ? 'View Project' : 
                         link.includes('linkedin') ? 'View Post' : 
                         link.includes('orcid') ? 'View ORCID' : 
                         link.includes('ssrn') ? 'View Paper' : 'View Link'}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExperienceTimeline;
