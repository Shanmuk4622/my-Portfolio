import React, { useState } from 'react';
import './ProjectCard.css';
import { FaGithub, FaCalendarAlt } from 'react-icons/fa';
import { CgWebsite } from 'react-icons/cg';

const ProjectCard = ({ project }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Format date range for display
  const formatDateRange = (start, end) => {
    if (!start) return null;
    const formatDate = (dateStr) => {
      if (!dateStr || dateStr === 'Present') return 'Present';
      const [year, month] = dateStr.split('-');
      const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      return `${monthNames[parseInt(month) - 1]} ${year}`;
    };
    return `${formatDate(start)} - ${formatDate(end)}`;
  };

  return (
    <div className="project-card">
      <div className="project-image-container">
        {!imageLoaded && !imageError && (
          <div className="project-image-placeholder">
            <div className="loading-spinner"></div>
          </div>
        )}
        {imageError ? (
          <div className="project-image-placeholder">
            <span>🖼️</span>
          </div>
        ) : (
          <img 
            src={project.image} 
            alt={project.title} 
            className={`project-image ${imageLoaded ? 'loaded' : ''}`}
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
          />
        )}
      </div>
      <div className="project-info">
        <h3 className="project-title">{project.title}</h3>
        {project.start && (
          <div className="project-date">
            <FaCalendarAlt />
            <span>{formatDateRange(project.start, project.end)}</span>
          </div>
        )}
        <p className="project-description">{project.description}</p>
        <div className="project-tags">
          {project.tags.map((tag, index) => (
            <span key={index} className="project-tag">{tag}</span>
          ))}
        </div>
        <div className="project-links">
          {project.githubLink && (
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link">
              <FaGithub /> GitHub
            </a>
          )}
          {project.demoLink && (
            <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="project-link">
              <CgWebsite /> Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;