import React from 'react';
import './AboutPage.css';
import { FaPython, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiTensorflow, SiOpencv, SiFlutter, SiPytorch, SiScikitlearn } from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';

const AboutPage = () => {
  return (
    <div className="about-container">
      <div className="about-main">
        <h1 className="about-title">About Me</h1>
        <p className="about-text">
          Hello! I'm <strong>Bonala Shanmukesh</strong>, a driven and curious software developer currently in my 3rd year of B.Tech at <strong>VIT-AP University</strong>, majoring in Artificial Intelligence and Machine Learning under the SCOPE CDE Department.
        </p>
        <p className="about-text">
          I'm deeply passionate about bridging the gap between cutting-edge AI research and real-world applications. Over the years, I’ve worked on multiple impactful projects involving <strong>object detection</strong>, <strong>semantic compression</strong>, <strong>tumor detection</strong>, and <strong>real-time tracking systems</strong>.
        </p>
        <p className="about-text">
          My recent works include <strong>VisionDrive</strong>, an autonomous RC car using deep learning; <strong>VA-JPEG</strong>, a hybrid semantic-aware image codec; and <strong>SmartTrackX</strong>, a real-time vehicle tracking system for MSME logistics. I’ve also participated in several hackathons and contributed to innovative solutions blending <strong>machine vision, deep learning, and system design</strong>.
        </p>
        <p className="about-text">
          I'm actively exploring topics like <strong>YOLOv8, CNNs, federated learning, image processing, and cross-platform mobile development</strong> with Flutter. When I’m not coding, I engage in research, write papers, and contribute to student-led tech clubs and communities.
        </p>
      </div>

      <div className="about-skills">
        <h2 className="skills-title">Key Skills</h2>
        <ul className="skills-list">
          <li className="skill-item"><FaPython className="skill-icon" /> Python</li>
          <li className="skill-item"><SiPytorch className="skill-icon" /> PyTorch</li>
          <li className="skill-item"><SiTensorflow className="skill-icon" /> TensorFlow</li>
          <li className="skill-item"><SiOpencv className="skill-icon" /> OpenCV</li>
          <li className="skill-item"><SiScikitlearn className="skill-icon" /> Scikit-learn</li>
          <li className="skill-item"><FaReact className="skill-icon" /> React.js</li>
          <li className="skill-item"><TbBrandNextjs className="skill-icon" /> Next.js</li>
          <li className="skill-item"><FaNodeJs className="skill-icon" /> Node.js</li>
          <li className="skill-item"><SiFlutter className="skill-icon" /> Flutter</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutPage;
