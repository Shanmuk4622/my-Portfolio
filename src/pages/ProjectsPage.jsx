import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import ScrollReveal from '../components/ScrollReveal';
import projectsData from '../data/projects.json';
import { FaFilter } from 'react-icons/fa';
import './ProjectsPage.css';

const ProjectsPage = () => {
  const [activeTag, setActiveTag] = useState('All');

  const allTags = useMemo(() => {
    const tags = new Set();
    projectsData.forEach((p) => p.tags.forEach((t) => tags.add(t)));
    return ['All', ...Array.from(tags).sort()];
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeTag === 'All') return [...projectsData].reverse();
    return [...projectsData].filter((p) => p.tags.includes(activeTag)).reverse();
  }, [activeTag]);

  return (
    <div className="projects-container">
      <ScrollReveal>
        <h1 className="projects-title">My Projects</h1>
        <p className="projects-subtitle">
          A collection of AI/ML, computer vision, and full-stack projects I've built.
        </p>
      </ScrollReveal>

      <div className="projects-filter">
        <FaFilter className="filter-icon" />
        <div className="filter-tags">
          {allTags.map((tag) => (
            <button
              key={tag}
              className={`filter-tag ${activeTag === tag ? 'active' : ''}`}
              onClick={() => setActiveTag(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      <motion.div className="projects-grid" layout>
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -20 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default ProjectsPage;