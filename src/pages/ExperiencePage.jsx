import React from 'react';
import { motion } from 'framer-motion';
import experienceData from '../data/experience.json';
import skillsData from '../data/skills.json';
import './ExperiencePage.css';

const ExperiencePage = () => {
  const cardVariants = {
    offscreen: {
      y: 50,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  return (
    <div className="experience-container">
      <section className="experience-section">
        <h1 className="section-title">Experience</h1>
        <div className="timeline">
          {experienceData.map((item, index) => (
            <motion.div
              className="timeline-item"
              key={item.id}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.5 }}
              variants={cardVariants}
            >
              <div className="timeline-content">
                <h3 className="timeline-role">{item.role}</h3>
                <h4 className="timeline-company">{item.company}</h4>
                <span className="timeline-period">{item.period}</span>
                <ul className="timeline-description">
                  {item.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="skills-section">
        <h1 className="section-title">Skills</h1>
        {skillsData.map((categoryItem) => (
          <motion.div
            key={categoryItem.category}
            className="skill-category"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
          >
            <h2 className="category-title">{categoryItem.category}</h2>
            <div className="skills-grid">
              {categoryItem.skills.map((skill) => (
                <div key={skill} className="skill-chip">
                  {skill}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </section>
    </div>
  );
};

export default ExperiencePage;