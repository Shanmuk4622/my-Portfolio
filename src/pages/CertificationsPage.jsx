import React from 'react';
import { FaExternalLinkAlt, FaCertificate, FaCalendar, FaBuilding } from 'react-icons/fa';
import certificationsData from '../data/certifications.json';
import './CertificationsPage.css';

const CertificationsPage = () => {
  return (
    <div className="certifications-container">
      <h1 className="certifications-title">My Certifications</h1>
      <p className="certifications-subtitle">
        Professional certifications and achievements that showcase my continuous learning journey.
      </p>
      <div className="certifications-grid">
        {certificationsData.map(cert => (
          <div key={cert.id} className="cert-card">
            <div className="cert-icon">
              <FaCertificate />
            </div>
            <div className="cert-content">
              <h3 className="cert-name">{cert.name}</h3>
              <div className="cert-meta">
                <span className="cert-issuer">
                  <FaBuilding />
                  {cert.issuer}
                </span>
                <span className="cert-date">
                  <FaCalendar />
                  {cert.date}
                </span>
              </div>
              {cert.url && !cert.url.startsWith('file://') && (
                <a 
                  href={cert.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="cert-link"
                >
                  <FaExternalLinkAlt />
                  View Certificate
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CertificationsPage;