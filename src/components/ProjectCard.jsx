import React from 'react';
import './ProjectCard.css';
import { FaGithub } from 'react-icons/fa';
import { CgWebsite } from 'react-icons/cg';

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <img src={project.image} alt={project.title} className="project-image" />
      <div className="project-info">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <div className="project-tags">
          {project.tags.map((tag, index) => (
            <span key={index} className="project-tag">{tag}</span>
          ))}
        </div>
        <div className="project-links">
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link">
            <FaGithub /> GitHub
          </a>
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