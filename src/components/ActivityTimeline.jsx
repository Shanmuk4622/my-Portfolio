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
import './ActivityTimeline.css';

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

const ActivityTimeline = ({ activityData }) => {
  // Debug: Log the data
  console.log('ActivityTimeline received data:', activityData);
  console.log('ActivityTimeline data length:', activityData?.length);
  console.log('ActivityTimeline data type:', typeof activityData);
  console.log('ActivityTimeline is array:', Array.isArray(activityData));
  
  // Ensure we have valid data
  if (!activityData || !Array.isArray(activityData)) {
    console.error('Invalid activity data:', activityData);
    return <div>No activity data available</div>;
  }
  
  // Sort by date, newest first, with fallback for invalid dates
  const sortedData = activityData.sort((a, b) => {
    const dateA = new Date(a.date + '-01'); // Add day to make it a valid date
    const dateB = new Date(b.date + '-01');
    
    // Handle invalid dates
    if (isNaN(dateA.getTime()) && isNaN(dateB.getTime())) return 0;
    if (isNaN(dateA.getTime())) return 1;
    if (isNaN(dateB.getTime())) return -1;
    
    return dateB - dateA; // Newest first
  });

  console.log('Sorted data length:', sortedData.length);
  console.log('First few items:', sortedData.slice(0, 3));

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
    <div className="activity-timeline">
      {sortedData.map((activity, idx) => (
        <div className="activity-item" key={activity.id || idx}>
          <div className="activity-content">
            <div className="activity-card">
              {/* Header with ID and Category */}
              <div className="activity-header">
                <div className="activity-id">
                  <span className="id-badge">#{activity.id}</span>
                </div>
                <div className="activity-category" style={{ backgroundColor: getCategoryColor(activity.category) }}>
                  {iconMap[activity.category] || <FaCode />}
                  <span>{activity.category}</span>
                </div>
              </div>

              {/* Title */}
              <h3 className="activity-title">{activity.title}</h3>

              {/* Organization and Date */}
              <div className="activity-meta">
                <div className="meta-item">
                  <FaMapMarkerAlt className="meta-icon" />
                  <span>{activity.organization}</span>
                </div>
                <div className="meta-item">
                  <FaCalendar className="meta-icon" />
                  <span>{activity.date}</span>
                </div>
              </div>

              {/* Description */}
              <div className="activity-description">
                <p>{activity.description}</p>
              </div>

              {/* Skills */}
              {activity.skills && activity.skills.length > 0 && (
                <div className="activity-skills">
                  <div className="skills-header">
                    <FaCogs className="skills-icon" />
                    <span>Skills & Technologies</span>
                  </div>
                  <div className="skills-list">
                    {activity.skills.map((skill, i) => (
                      <span key={i} className="skill-tag">
                        <FaTag />
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Links */}
              {activity.links && activity.links.length > 0 && (
                <div className="activity-links">
                  <div className="links-header">
                    <FaExternalLinkAlt className="links-icon" />
                    <span>Links & Resources</span>
                  </div>
                  <div className="links-list">
                    {activity.links.map((link, i) => (
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
              {activity.progress !== undefined && (
                <div className="activity-progress">
                  <div className="progress-header">
                    <span>Progress</span>
                    <span className="progress-percentage">{activity.progress}%</span>
                  </div>
                  <div className="progress-bar">
                    <div 
                      className="progress-fill" 
                      style={{ width: `${activity.progress}%` }}
                    ></div>
                  </div>
                </div>
              )}

              {/* Pictures count */}
              {activity.pics && activity.pics.length > 0 && (
                <div className="activity-pics">
                  <span className="pics-count">
                    📷 {activity.pics.length} image{activity.pics.length > 1 ? 's' : ''} available
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

export default ActivityTimeline;
