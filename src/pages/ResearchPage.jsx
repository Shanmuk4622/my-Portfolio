import React, { useState } from 'react';
import { FaBook, FaFlask, FaUniversity, FaCalendar, FaExternalLinkAlt, FaFilter } from 'react-icons/fa';
import researchData from '../data/research.json';
import ScrollReveal from '../components/ScrollReveal';
import { motion, AnimatePresence } from 'framer-motion';
import './ResearchPage.css';

const statusIconMap = {
  Completed: <FaBook />,
  'In Progress': <FaFlask />,
  Active: <FaUniversity />,
};

const ResearchPage = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const types = ['All', ...new Set(researchData.map((r) => r.type))];

  const filtered = activeFilter === 'All'
    ? researchData
    : researchData.filter((r) => r.type === activeFilter);

  return (
    <div className="research-container">
      <ScrollReveal>
        <h1 className="research-title">Research & Publications</h1>
        <p className="research-subtitle">
          My academic research, publications, and scholarly contributions in AI, Computer Vision, and Deep Learning.
        </p>
      </ScrollReveal>

      <div className="research-filter">
        <FaFilter className="filter-icon" />
        <div className="filter-tags">
          {types.map((type) => (
            <button
              key={type}
              className={`filter-tag ${activeFilter === type ? 'active' : ''}`}
              onClick={() => setActiveFilter(type)}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      <motion.div className="research-grid" layout>
        <AnimatePresence mode="popLayout">
          {filtered.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
            >
              <div className="research-card">
                <div className="research-card-header">
                  <div className="research-type-badge">
                    {statusIconMap[item.status] || <FaBook />}
                    {item.type}
                  </div>
                  <span className={`research-status ${item.status.toLowerCase().replace(' ', '-')}`}>
                    {item.status}
                  </span>
                </div>
                <h3 className="research-card-title">{item.title}</h3>
                <div className="research-meta">
                  <span className="research-venue">
                    <FaUniversity />
                    {item.venue}
                  </span>
                  <span className="research-date">
                    <FaCalendar />
                    {item.date}
                  </span>
                </div>
                <p className="research-description">{item.description}</p>
                <div className="research-tags">
                  {item.tags.map((tag, i) => (
                    <span key={i} className="research-tag">{tag}</span>
                  ))}
                </div>
                {item.links.length > 0 && (
                  <div className="research-links">
                    {item.links.map((link, i) => (
                      <a key={i} href={link} target="_blank" rel="noopener noreferrer" className="research-link-item">
                        <FaExternalLinkAlt />
                        {link.includes('github') ? 'GitHub' :
                         link.includes('orcid') ? 'ORCID' :
                         link.includes('linkedin') ? 'LinkedIn Post' :
                         link.includes('youtu') ? 'Demo Video' :
                         link.includes('colab') ? 'Colab Notebook' : 'View Resource'}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default ResearchPage;