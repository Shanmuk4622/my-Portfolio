import React from 'react';
import { 
  FaPython, FaJs, FaJava, FaGitAlt, FaDocker, FaNodeJs, FaCode, 
  FaHtml5, FaDatabase, FaTerminal, FaLinux, FaNetworkWired, 
  FaEye, FaSearch, FaSync, FaServer, FaUsers, FaCloudDownloadAlt, 
  FaCheckCircle, FaLightbulb, FaBrain
} from 'react-icons/fa';
import { 
  SiCplusplus, SiDart, SiTensorflow, SiPytorch, SiOpencv, SiReact, 
  SiFlutter, SiScikitlearn, SiJupyter, SiGooglecloud, SiFirebase,
  SiNextdotjs, SiFastapi, SiTypescript, SiSupabase, SiVercel, 
  SiHuggingface
} from 'react-icons/si';
import './SkillsGrid.css';

// Map skill names to icons
const iconMap = {
  Python: <FaPython />, JavaScript: <FaJs />, 'C++': <SiCplusplus />, Java: <FaJava />, Dart: <SiDart />,
  TensorFlow: <SiTensorflow />, PyTorch: <SiPytorch />, OpenCV: <SiOpencv />, 'React.js': <SiReact />, 'Node.js': <FaNodeJs />, Flutter: <SiFlutter />, 'Scikit-learn': <SiScikitlearn />,
  'Git & GitHub': <FaGitAlt />, Docker: <FaDocker />, 'VS Code': <FaCode />, Jupyter: <SiJupyter />, 'Google Cloud': <SiGooglecloud />, Firebase: <SiFirebase />,
  
  // AI & CV
  'Hugging Face': <SiHuggingface />,
  'IBM Watsonx': <FaBrain />,
  YOLOv8: <FaEye />,
  'CNNs (EfficientNet, ConvNeXt)': <FaNetworkWired />,
  'Image Forensics (FFT/DWT/ELA)': <FaSearch />,
  
  // Generative AI
  'RAG Pipelines': <FaServer />,
  'Multi-Agent Orchestration': <FaUsers />,
  'Prompt Engineering': <FaLightbulb />,
  
  // Web & Backend
  'Next.js': <SiNextdotjs />,
  FastAPI: <SiFastapi />,
  TypeScript: <SiTypescript />,
  'HTML5 & CSS3': <FaHtml5 />,
  SQL: <FaDatabase />,
  Supabase: <SiSupabase />,
  'Real-time Pub/Sub': <FaSync />,
  
  // Tools & Concepts
  WSL: <FaLinux />,
  'Google Cloud Platform': <SiGooglecloud />,
  Vercel: <SiVercel />,
  'Data Structures & Algorithms': <FaCode />,
  'RESTful APIs': <FaCloudDownloadAlt />,
  'Clean Code': <FaCheckCircle />
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
