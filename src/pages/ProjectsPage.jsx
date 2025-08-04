import React from 'react';
import ProjectCard from '../components/ProjectCard';
import projectsData from '../data/projects.json'; // Import the JSON data
import './ProjectsPage.css'; // We'll create this

const ProjectsPage = () => {
  return (
    <div className="projects-container">
      <h1 className="projects-title">My Projects</h1>
      <div className="projects-grid">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;