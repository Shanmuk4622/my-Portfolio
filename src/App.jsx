// src/App.jsx

import React, { Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import BackToTop from './components/BackToTop.jsx';
import LoadingSpinner from './components/LoadingSpinner.jsx';

// Lazy load pages for better performance
const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));
const ExperiencePage = lazy(() => import('./pages/ExperiencePage'));
const ActivityPage = lazy(() => import('./pages/ActivityPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const CertificationsPage = lazy(() => import('./pages/CertificationsPage'));
const ResearchPage = lazy(() => import('./pages/ResearchPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

import './App.css';

// Page transition variants
const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: 'easeOut',
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
      ease: 'easeIn',
    },
  },
};

// Animated page wrapper
const AnimatedPage = ({ children }) => (
  <motion.div
    variants={pageVariants}
    initial="initial"
    animate="animate"
    exit="exit"
  >
    {children}
  </motion.div>
);

function App() {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main id="main-content" className="container" role="main">
        <Suspense fallback={<LoadingSpinner />}>
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<AnimatedPage><HomePage /></AnimatedPage>} />
              <Route path="/about" element={<AnimatedPage><AboutPage /></AnimatedPage>} />
              <Route path="/projects" element={<AnimatedPage><ProjectsPage /></AnimatedPage>} />
              <Route path="/experience" element={<AnimatedPage><ExperiencePage /></AnimatedPage>} />
              <Route path="/activity" element={<AnimatedPage><ActivityPage /></AnimatedPage>} />
              <Route path="/contact" element={<AnimatedPage><ContactPage /></AnimatedPage>} />
              <Route path="/certifications" element={<AnimatedPage><CertificationsPage /></AnimatedPage>} />
              <Route path="/research" element={<AnimatedPage><ResearchPage /></AnimatedPage>} />
              <Route path="*" element={<AnimatedPage><NotFoundPage /></AnimatedPage>} />
            </Routes>
          </AnimatePresence>
        </Suspense>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;
