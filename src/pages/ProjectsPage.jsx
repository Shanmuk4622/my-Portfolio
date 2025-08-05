import React from 'react';
import { motion } from 'framer-motion'; // Import motion
import ProjectCard from '../components/ProjectCard';
import projectsData from '../data/projects.json';
import './ProjectsPage.css';

const ProjectsPage = () => {
  // Define animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // This will make cards appear one after another
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className="projects-container">
      <h1 className="projects-title">My Projects</h1>
      <motion.div
        className="projects-grid"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {projectsData.map((project) => (
          // Wrap ProjectCard in a motion.div to apply item animation
          <motion.div key={project.id} variants={itemVariants}>
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ProjectsPage;