import React from 'react';
import { FaPython, FaJs, FaJava, FaGitAlt, FaDocker, FaNodeJs } from 'react-icons/fa';
import { SiCplusplus, SiDart, SiTensorflow, SiPytorch, SiOpencv, SiReact, SiFlutter, SiScikitlearn, SiJupyter, SiGooglecloud, SiFirebase, SiVisualstudiocode } from 'react-icons/si';
import './SkillsGrid.css';

// Map skill names to icons (add more as needed)
const iconMap = {
  Python: <FaPython />, JavaScript: <FaJs />, 'C++': <SiCplusplus />, Java: <FaJava />, Dart: <SiDart />,
  TensorFlow: <SiTensorflow />, PyTorch: <SiPytorch />, OpenCV: <SiOpencv />, 'React.js': <SiReact />, 'Node.js': <FaNodeJs />, Flutter: <SiFlutter />, 'Scikit-learn': <SiScikitlearn />,
  'Git & GitHub': <FaGitAlt />, Docker: <FaDocker />, 'VS Code': <SiVisualstudiocode />, Jupyter: <SiJupyter />, 'Google Cloud': <SiGooglecloud />, Firebase: <SiFirebase />
};

const SkillsGrid = ({ skillsData }) => (
  <div className="skills-section">
    {skillsData.map((cat) => (
      <div className="skill-category" key={cat.category}>
        <h3 className="category-title">{cat.category}</h3>
        <div className="skills-grid">
          {cat.skills.map((skill) => (
            <div className="skill-chip" key={skill} title={skill}>
              <span className="skill-icon">{iconMap[skill] || '🔹'}</span>
              <span>{skill}</span>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
);

export default SkillsGrid;
