import React from 'react';
import './LoadingSpinner.css';

const LoadingSpinner = () => {
  return (
    <div className="loading-container">
      <div className="loader">
        <div className="loader-ring"></div>
        <div className="loader-ring"></div>
        <div className="loader-ring"></div>
      </div>
      <p className="loader-text">Loading<span className="loader-dots"><span>.</span><span>.</span><span>.</span></span></p>
    </div>
  );
};

export const SkeletonCard = ({ lines = 3 }) => (
  <div className="skeleton-card">
    <div className="skeleton-image pulse"></div>
    <div className="skeleton-content">
      <div className="skeleton-line skeleton-title pulse"></div>
      {Array.from({ length: lines }).map((_, i) => (
        <div key={i} className={`skeleton-line pulse`} style={{ width: `${85 - i * 15}%` }}></div>
      ))}
      <div className="skeleton-tags">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="skeleton-tag pulse"></div>
        ))}
      </div>
    </div>
  </div>
);

export const SkeletonGrid = ({ count = 6 }) => (
  <div className="skeleton-grid">
    {Array.from({ length: count }).map((_, i) => (
      <SkeletonCard key={i} />
    ))}
  </div>
);

export default LoadingSpinner;