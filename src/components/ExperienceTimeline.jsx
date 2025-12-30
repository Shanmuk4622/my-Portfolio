import React from 'react';
import { 
  FaBuilding, 
  FaTrophy, 
  FaUserGraduate, 
  FaCode, 
  FaFlask, 
  FaUsers, 
  FaCertificate,
  FaGamepad,
  FaLightbulb,
  FaBook,
  FaCalendarAlt,
  FaExternalLinkAlt,
  FaTag,
  FaCalendar,
  FaMapMarkerAlt,
  FaCogs
} from 'react-icons/fa';
import './ExperienceTimeline.css';

const iconMap = {
  'Internship': <FaBuilding />,
  'Hackathon': <FaTrophy />,
  'Leadership': <FaUserGraduate />,
  'Project': <FaCode />,
  'Research': <FaFlask />,
  'Event': <FaUsers />,
  'Achievement': <FaTrophy />,
  'Membership': <FaCertificate />,
  'Learning': <FaBook />,
  'Idea': <FaLightbulb />,
  'Job Simulation': <FaBuilding />,
  'Conference Submission': <FaCalendarAlt />
};

const ExperienceTimeline = ({ experienceData }) => {
  // Ensure we have valid data
  if (!experienceData || !Array.isArray(experienceData) || experienceData.length === 0) {
    return (
      <div className="experience-timeline-empty">
        <p>No experience data available</p>
      </div>
    );
  }
  
  // Sort by date, newest first, with fallback for invalid dates
  // Use spread operator to avoid mutating the original array
  const sortedData = [...experienceData].sort((a, b) => {
    const dateA = new Date(a.date + '-01');
    const dateB = new Date(b.date + '-01');
    
    // Handle invalid dates
    if (isNaN(dateA.getTime()) && isNaN(dateB.getTime())) return 0;
    if (isNaN(dateA.getTime())) return 1;
    if (isNaN(dateB.getTime())) return -1;
    
    return dateB - dateA; // Newest first
  });

  const getCategoryColor = (category) => {
    const colors = {
      'Project': '#4CAF50',
      'Hackathon': '#FF9800',
      'Research': '#9C27B0',
      'Event': '#2196F3',
      'Achievement': '#FF5722',
      'Membership': '#607D8B',
      'Learning': '#795548',
      'Idea': '#FFC107',
      'Job Simulation': '#3F51B5',
      'Conference Submission': '#E91E63'
    };
    return colors[category] || '#666';
  };

  return (
    <div className="experience-timeline">
      {sortedData.map((experience, idx) => (
        <div className="experience-item" key={experience.id || idx}>
          <div className="experience-content">
            <div className="experience-card">
              {/* Header with ID and Category */}
              <div className="experience-header">
                <div className="experience-id">
                  <span className="id-badge">#{experience.id}</span>
                </div>
                <div className="experience-category" style={{ backgroundColor: getCategoryColor(experience.category) }}>
                  {iconMap[experience.category] || <FaCode />}
                  <span>{experience.category}</span>
                </div>
              </div>

              {/* Title */}
              <h3 className="experience-title">{experience.title}</h3>

              {/* Organization and Date */}
              <div className="experience-meta">
                <div className="meta-item">
                  <FaMapMarkerAlt className="meta-icon" />
                  <span>{experience.organization}</span>
                </div>
                <div className="meta-item">
                  <FaCalendar className="meta-icon" />
                  <span>{experience.date}</span>
                </div>
              </div>

              {/* Description */}
              <div className="experience-description">
                <p>{experience.description}</p>
              </div>

              {/* Skills */}
              {experience.skills && experience.skills.length > 0 && (
                <div className="experience-skills">
                  <div className="skills-header">
                    <FaCogs className="skills-icon" />
                    <span>Skills & Technologies</span>
                  </div>
                  <div className="skills-list">
                    {experience.skills.map((skill, i) => (
                      <span key={i} className="skill-tag">
                        <FaTag />
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Links */}
              {experience.links && experience.links.length > 0 && (
                <div className="experience-links">
                  <div className="links-header">
                    <FaExternalLinkAlt className="links-icon" />
                    <span>Links & Resources</span>
                  </div>
                  <div className="links-list">
                    {experience.links.map((link, i) => (
                      <a 
                        key={i} 
                        href={link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="link-item"
                      >
                        <FaExternalLinkAlt />
                        {link.length > 50 ? link.substring(0, 50) + '...' : link}
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* Progress */}
              {experience.progress !== undefined && (
                <div className="experience-progress">
                  <div className="progress-header">
                    <span>Progress</span>
                    <span className="progress-percentage">{experience.progress}%</span>
                  </div>
                  <div className="progress-bar">
                    <div 
                      className="progress-fill" 
                      style={{ width: `${experience.progress}%` }}
                    ></div>
                  </div>
                </div>
              )}

              {/* Pictures count */}
              {experience.pics && experience.pics.length > 0 && (
                <div className="experience-pics">
                  <span className="pics-count">
                    📷 {experience.pics.length} image{experience.pics.length > 1 ? 's' : ''} available
                  </span>
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
